export default function Privacy() {
  return (
    <main style={{ background: "#000", minHeight: "100vh", color: "#fff", padding: "80px 40px", fontFamily: "'Courier New', monospace", maxWidth: "800px", margin: "0 auto" }}>
      <p style={{ color: "#06b6d4", fontSize: "11px", letterSpacing: "6px", marginBottom: "16px" }}>LEGAL</p>
      <h1 style={{ fontSize: "clamp(28px, 5vw, 48px)", fontWeight: "900", letterSpacing: "-2px", marginBottom: "8px" }}>PRIVACY <span style={{ color: "#06b6d4" }}>POLICY</span></h1>
      <p style={{ color: "#666", fontSize: "12px", letterSpacing: "2px", marginBottom: "60px" }}>Last updated: 19 April 2026</p>

      {[
        { title: "1. Who We Are", body: "Nova AI Solutions is a technology business providing AI chatbot services. Contact: dhancock268@gmail.com. We are the data controller for personal data collected through our website and services." },
        { title: "2. What Data We Collect", body: "We collect: name, email address, and business name submitted via our lead form; usage data about how you interact with our services; correspondence you send us; and payment information handled securely by our payment processor." },
        { title: "3. How We Use Your Data", body: "We use your data to respond to enquiries, provide and manage your subscription, send service communications, improve our services, and comply with legal obligations." },
        { title: "4. We Will Never Sell Your Data", body: "Nova AI Solutions has a strict no-data-selling policy. We will never sell, rent, or trade your personal data to any third party for commercial purposes. This is a core principle of our business." },
        { title: "5. Legal Basis for Processing", body: "We process your data under UK GDPR on the following bases: contract performance, legitimate interests, legal obligation, and consent where explicitly given." },
        { title: "6. Data Retention", body: "Lead enquiry data is retained for up to 2 years. Subscription data is retained for 7 years for legal and accounting purposes. You may request deletion at any time, subject to legal obligations." },
        { title: "7. Third Party Services", body: "We use Resend (email delivery), Vercel (hosting), and xAI (AI chatbot). All providers are required to process your data in accordance with applicable data protection law." },
        { title: "8. Your Rights", body: "Under UK GDPR you have the right to access, rectify, erase, restrict processing of, and port your data. You also have the right to object to processing. Contact us at dhancock268@gmail.com to exercise these rights. We will respond within 30 days." },
        { title: "9. Security", body: "We implement appropriate technical and organisational measures to protect your data. All data is transmitted over encrypted SSL/TLS connections." },
        { title: "10. Complaints", body: "You have the right to lodge a complaint with the Information Commissioner's Office (ICO) at ico.org.uk if you have concerns about how we handle your data." },
        { title: "11. Contact", body: "For privacy queries or to exercise your rights: dhancock268@gmail.com" },
      ].map((s, i) => (
        <div key={i} style={{ marginBottom: "40px" }}>
          <h2 style={{ color: "#06b6d4", fontSize: "13px", letterSpacing: "3px", marginBottom: "12px" }}>{s.title.toUpperCase()}</h2>
          <p style={{ color: "#9ca3af", fontSize: "13px", lineHeight: "1.8", letterSpacing: "1px" }}>{s.body}</p>
        </div>
      ))}

      <div style={{ borderTop: "1px solid rgba(6,182,212,0.2)", paddingTop: "40px", marginTop: "40px" }}>
        <a href="/" style={{ color: "#06b6d4", fontSize: "11px", letterSpacing: "3px", textDecoration: "none" }}>← BACK TO HOME</a>
      </div>
    </main>
  );
}
