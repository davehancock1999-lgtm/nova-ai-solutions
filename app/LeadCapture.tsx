"use client";
import { useState } from "react";

export default function LeadCapture() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [business, setBusiness] = useState('');
  const [plan, setPlan] = useState('Starter');
  const [agreed, setAgreed] = useState(false);
  const [status, setStatus] = useState('idle');
  const [errorMsg, setErrorMsg] = useState('');

  const submit = async () => {
    if (!agreed) {
      setErrorMsg('You must agree to the Terms of Service to continue.');
      return;
    }
    setStatus('sending');
    setErrorMsg('');
    try {
      const payload = JSON.stringify({
        name: String(name).trim(),
        email: String(email).trim(),
        business: String(business).trim(),
        plan: String(plan).trim(),
        agreedToTerms: true,
        agreedAt: new Date().toISOString(),
      });
      const res = await fetch('/api/lead', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: payload,
      });
      const data = await res.json();
      if (res.ok) {
        setStatus('sent');
      } else {
        setStatus('error');
        setErrorMsg(data.error || 'Unknown error');
      }
    } catch (err) {
      setStatus('error');
      setErrorMsg(String(err));
    }
  };

  return (
    <section style={{ background: "#000", padding: "80px 20px", display: "flex", flexDirection: "column", alignItems: "center", fontFamily: "'Courier New', monospace" }}>
      <p style={{ color: "#06b6d4", fontSize: "11px", letterSpacing: "6px", marginBottom: "16px" }}>GET STARTED TODAY</p>
      <h2 style={{ color: "#fff", fontSize: "clamp(28px, 5vw, 52px)", fontWeight: "900", letterSpacing: "-2px", textAlign: "center", margin: "0 0 40px 0" }}>
        READY TO DEPLOY<br /><span style={{ color: "#06b6d4" }}>YOUR AI?</span>
      </h2>
      {status === 'sent' ? (
        <div style={{ border: "1px solid #06b6d4", padding: "40px", textAlign: "center", maxWidth: "500px" }}>
          <p style={{ color: "#06b6d4", fontSize: "14px", letterSpacing: "3px" }}>MESSAGE RECEIVED</p>
          <p style={{ color: "#666", fontSize: "13px", marginTop: "10px" }}>We will be in touch within 24 hours.</p>
        </div>
      ) : (
        <div style={{ width: "100%", maxWidth: "500px", border: "1px solid rgba(6,182,212,0.2)", padding: "40px", background: "rgba(6,182,212,0.02)" }}>
          <input
            placeholder="YOUR NAME"
            value={name}
            onChange={e => setName(e.target.value)}
            autoComplete="off"
            autoCorrect="off"
            autoCapitalize="off"
            spellCheck={false}
            style={{ width: "100%", background: "transparent", border: "none", borderBottom: "1px solid rgba(6,182,212,0.3)", color: "#fff", padding: "12px 0", marginBottom: "24px", fontSize: "12px", letterSpacing: "2px", fontFamily: "'Courier New', monospace", outline: "none", boxSizing: "border-box" }}
          />
          <input
            placeholder="YOUR EMAIL"
            value={email}
            onChange={e => setEmail(e.target.value)}
            autoComplete="off"
            autoCorrect="off"
            autoCapitalize="off"
            spellCheck={false}
            style={{ width: "100%", background: "transparent", border: "none", borderBottom: "1px solid rgba(6,182,212,0.3)", color: "#fff", padding: "12px 0", marginBottom: "24px", fontSize: "12px", letterSpacing: "2px", fontFamily: "'Courier New', monospace", outline: "none", boxSizing: "border-box" }}
          />
          <input
            placeholder="BUSINESS NAME"
            value={business}
            onChange={e => setBusiness(e.target.value)}
            autoComplete="off"
            autoCorrect="off"
            autoCapitalize="off"
            spellCheck={false}
            style={{ width: "100%", background: "transparent", border: "none", borderBottom: "1px solid rgba(6,182,212,0.3)", color: "#fff", padding: "12px 0", marginBottom: "24px", fontSize: "12px", letterSpacing: "2px", fontFamily: "'Courier New', monospace", outline: "none", boxSizing: "border-box" }}
          />
          <select
            value={plan}
            onChange={e => setPlan(e.target.value)}
            style={{ width: "100%", background: "#000", border: "none", borderBottom: "1px solid rgba(6,182,212,0.3)", color: "#06b6d4", padding: "12px 0", marginBottom: "32px", fontSize: "12px", letterSpacing: "2px", fontFamily: "'Courier New', monospace", outline: "none" }}
          >
            <option>Starter</option>
            <option>Pro</option>
            <option>Agency</option>
          </select>

          <div style={{ display: "flex", alignItems: "flex-start", gap: "12px", marginBottom: "24px" }}>
            <input
              type="checkbox"
              id="terms"
              checked={agreed}
              onChange={e => setAgreed(e.target.checked)}
              style={{ marginTop: "2px", accentColor: "#06b6d4", cursor: "pointer", width: "16px", height: "16px", flexShrink: 0 }}
            />
            <label htmlFor="terms" style={{ color: "#9ca3af", fontSize: "11px", letterSpacing: "1px", lineHeight: "1.6", cursor: "pointer" }}>
              I agree to the Nova AI Solutions{" "}
              <a href="/terms" style={{ color: "#06b6d4", textDecoration: "underline" }}>Terms of Service</a>
              {" "}and{" "}
              <a href="/privacy" style={{ color: "#06b6d4", textDecoration: "underline" }}>Privacy Policy</a>
              . I understand this constitutes a legally binding electronic signature under the UK Electronic Communications Act 2000.
            </label>
          </div>

          <button
            type="button"
            onClick={submit}
            disabled={status === 'sending'}
            style={{ width: "100%", padding: "16px", background: agreed ? "#06b6d4" : "rgba(6,182,212,0.3)", border: "none", color: agreed ? "#000" : "#666", fontSize: "12px", fontWeight: "900", letterSpacing: "4px", cursor: agreed ? "pointer" : "not-allowed", fontFamily: "'Courier New', monospace", transition: "all 0.2s ease" }}
          >
            {status === 'sending' ? 'SENDING...' : 'REQUEST ACCESS'}
          </button>

          {status === 'error' && (
            <p style={{ color: "red", fontSize: "11px", marginTop: "10px", textAlign: "center" }}>{errorMsg}</p>
          )}
        </div>
      )}
    </section>
  );
}
