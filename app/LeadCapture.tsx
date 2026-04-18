"use client";
import { useState } from "react";

export default function LeadCapture() {
  const [form, setForm] = useState({ name: '', email: '', business: '', plan: 'Starter' });
  const [status, setStatus] = useState<'idle'|'sending'|'sent'|'error'>('idle');

  const submit = async () => {
    setStatus('sending');
    const res = await fetch('/api/lead', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(form),
    });
    if (res.ok) setStatus('sent');
    else setStatus('error');
  };

  return (
    <section style={{ background: "#000", padding: "80px 20px", display: "flex", flexDirection: "column", alignItems: "center", fontFamily: "'Courier New', monospace" }}>
      <p style={{ color: "#06b6d4", fontSize: "11px", letterSpacing: "6px", marginBottom: "16px" }}>GET STARTED TODAY</p>
      <h2 style={{ color: "#fff", fontSize: "clamp(28px, 5vw, 52px)", fontWeight: "900", letterSpacing: "-2px", textAlign: "center", margin: "0 0 40px 0" }}>
        READY TO DEPLOY<br /><span style={{ color: "#06b6d4" }}>YOUR AI?</span>
      </h2>

      {status === 'sent' ? (
        <div style={{ border: "1px solid #06b6d4", padding: "40px", textAlign: "center", maxWidth: "500px" }}>
          <p style={{ color: "#06b6d4", fontSize: "14px", letterSpacing: "3px" }}>✓ MESSAGE RECEIVED</p>
          <p style={{ color: "#666", fontSize: "13px", marginTop: "10px" }}>We'll be in touch within 24 hours.</p>
        </div>
      ) : (
        <div style={{ width: "100%", maxWidth: "500px", border: "1px solid rgba(6,182,212,0.2)", padding: "40px", background: "rgba(6,182,212,0.02)" }}>
          {[
            { key: 'name', placeholder: 'YOUR NAME' },
            { key: 'email', placeholder: 'YOUR EMAIL' },
            { key: 'business', placeholder: 'BUSINESS NAME' },
          ].map(({ key, placeholder }) => (
            <input
              key={key}
              placeholder={placeholder}
              value={form[key as keyof typeof form]}
              onChange={e => setForm({ ...form, [key]: e.target.value })}
              style={{ width: "100%", background: "transparent", border: "none", borderBottom: "1px solid rgba(6,182,212,0.3)", color: "#fff", padding: "12px 0", marginBottom: "24px", fontSize: "12px", letterSpacing: "2px", fontFamily: "'Courier New', monospace", outline: "none", boxSizing: "border-box" }}
            />
          ))}

          <select
            value={form.plan}
            onChange={e => setForm({ ...form, plan: e.target.value })}
            style={{ width: "100%", background: "#000", border: "none", borderBottom: "1px solid rgba(6,182,212,0.3)", color: "#06b6d4", padding: "12px 0", marginBottom: "32px", fontSize: "12px", letterSpacing: "2px", fontFamily: "'Courier New', monospace", outline: "none" }}
          >
            <option>Starter</option>
            <option>Pro</option>
            <option>Agency</option>
          </select>

          <button
            onClick={submit}
            disabled={status === 'sending'}
            style={{ width: "100%", padding: "16px", background: "#06b6d4", border: "none", color: "#000", fontSize: "12px", fontWeight: "900", letterSpacing: "4px", cursor: "pointer", fontFamily: "'Courier New', monospace" }}
          >
            {status === 'sending' ? 'SENDING...' : 'REQUEST ACCESS'}
          </button>

          {status === 'error' && <p style={{ color: "red", fontSize: "11px", marginTop: "10px", textAlign: "center" }}>Something went wrong. Try again.</p>}
        </div>
      )}
    </section>
  );
}
