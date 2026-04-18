"use client";
import { useState } from "react";

const plans = [
  {
    name: "STARTER",
    price: 29,
    tag: "For small businesses",
    color: "#06b6d4",
    features: ["1 AI chatbot","500 messages / month","Basic customisation","Email support","Nova branding"],
    cta: "Get Started",
    highlight: false,
  },
  {
    name: "PRO",
    price: 79,
    tag: "Most popular",
    color: "#22d3ee",
    features: ["3 AI chatbots","Unlimited messages","Full customisation","Priority support","Remove Nova branding","Analytics dashboard"],
    cta: "Go Pro",
    highlight: true,
  },
  {
    name: "AGENCY",
    price: 199,
    tag: "For agencies & resellers",
    color: "#67e8f9",
    features: ["Unlimited chatbots","Unlimited messages","White label platform","Client dashboard","Resell rights","Dedicated account manager","Custom integrations"],
    cta: "Contact Us",
    highlight: false,
  },
];

export default function Pricing() {
  const [hovered, setHovered] = useState<number | null>(null);
  return (
    <section style={{ background: "#000", minHeight: "100vh", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", padding: "80px 20px", fontFamily: "'Courier New', monospace", position: "relative", overflow: "hidden" }}>
      <div style={{ position: "absolute", inset: 0, backgroundImage: "linear-gradient(rgba(6,182,212,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(6,182,212,0.04) 1px, transparent 1px)", backgroundSize: "40px 40px", pointerEvents: "none" }} />
      <div style={{ textAlign: "center", marginBottom: "60px", position: "relative" }}>
        <p style={{ color: "#06b6d4", fontSize: "11px", letterSpacing: "6px", textTransform: "uppercase", marginBottom: "16px" }}>ROUTE6 PRICING MATRIX</p>
        <h2 style={{ color: "#fff", fontSize: "clamp(32px, 6vw, 64px)", fontWeight: "900", letterSpacing: "-2px", margin: 0, lineHeight: 1 }}>
          INTELLIGENCE<br /><span style={{ color: "#06b6d4" }}>HAS A PRICE.</span>
        </h2>
        <p style={{ color: "#4b5563", fontSize: "14px", marginTop: "20px", letterSpacing: "2px" }}>NO SETUP FEES. CANCEL ANYTIME. DEPLOY IN MINUTES.</p>
      </div>
      <div style={{ display: "flex", gap: "20px", flexWrap: "wrap", justifyContent: "center", width: "100%", maxWidth: "1100px" }}>
        {plans.map((plan, i) => (
          <div
            key={plan.name}
            onMouseEnter={() => setHovered(i)}
            onMouseLeave={() => setHovered(null)}
            style={{ flex: "1 1 300px", maxWidth: "340px", border: plan.highlight ? "1px solid #06b6d4" : hovered === i ? "1px solid rgba(6,182,212,0.4)" : "1px solid rgba(255,255,255,0.06)", borderRadius: "2px", padding: "40px 32px", background: plan.highlight ? "linear-gradient(135deg, rgba(6,182,212,0.08) 0%, rgba(0,0,0,0.8) 100%)" : "rgba(255,255,255,0.02)", position: "relative", transition: "all 0.3s ease", transform: plan.highlight ? "translateY(-8px)" : hovered === i ? "translateY(-4px)" : "none", cursor: "pointer" }}
          >
            <div style={{ position: "absolute", top: 0, right: 0, width: "40px", height: "40px", borderTop: `2px solid ${plan.color}`, borderRight: `2px solid ${plan.color}` }} />
            <div style={{ position: "absolute", bottom: 0, left: 0, width: "40px", height: "40px", borderBottom: `2px solid ${plan.color}`, borderLeft: `2px solid ${plan.color}` }} />
            {plan.highlight && (
              <div style={{ position: "absolute", top: "-12px", left: "50%", transform: "translateX(-50%)", background: "#06b6d4", color: "#000", fontSize: "10px", fontWeight: "900", letterSpacing: "3px", padding: "4px 16px" }}>MOST POPULAR</div>
            )}
            <p style={{ color: plan.color, fontSize: "10px", letterSpacing: "4px", margin: "0 0 8px 0" }}>{plan.tag.toUpperCase()}</p>
            <h3 style={{ color: "#fff", fontSize: "22px", fontWeight: "900", letterSpacing: "4px", margin: "0 0 24px 0" }}>{plan.name}</h3>
            <div style={{ marginBottom: "32px" }}>
              <span style={{ color: "#fff", fontSize: "52px", fontWeight: "900", lineHeight: 1 }}>£{plan.price}</span>
              <span style={{ color: "#4b5563", fontSize: "13px", marginLeft: "8px" }}>/ month</span>
            </div>
            <div style={{ width: "100%", height: "1px", background: "rgba(6,182,212,0.2)", marginBottom: "24px" }} />
            <ul style={{ listStyle: "none", padding: 0, margin: "0 0 36px 0" }}>
              {plan.features.map((f) => (
                <li key={f} style={{ color: "#9ca3af", fontSize: "13px", letterSpacing: "1px", padding: "8px 0", borderBottom: "1px solid rgba(255,255,255,0.04)", display: "flex", alignItems: "center", gap: "10px" }}>
                  <span style={{ color: plan.color, fontSize: "10px" }}>◆</span>
                  {f.toUpperCase()}
                </li>
              ))}
            </ul>
            <button
              style={{ width: "100%", padding: "14px", background: plan.highlight ? "#06b6d4" : "transparent", border: `1px solid ${plan.highlight ? "#06b6d4" : "rgba(6,182,212,0.4)"}`, color: plan.highlight ? "#000" : "#06b6d4", fontSize: "12px", fontWeight: "900", letterSpacing: "4px", cursor: "pointer", fontFamily: "'Courier New', monospace" }}
            >
              {plan.cta.toUpperCase()}
            </button>
          </div>
        ))}
      </div>
      <p style={{ color: "#374151", fontSize: "11px", letterSpacing: "2px", marginTop: "60px", textAlign: "center" }}>
        ALL PLANS INCLUDE SSL, 99.9% UPTIME SLA, AND GROK-POWERED INTELLIGENCE.
      </p>
    </section>
  );
}
