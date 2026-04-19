export default function Terms() {
  return (
    <main style={{ background: "#000", minHeight: "100vh", color: "#fff", padding: "80px 40px", fontFamily: "'Courier New', monospace", maxWidth: "800px", margin: "0 auto" }}>
      <p style={{ color: "#06b6d4", fontSize: "11px", letterSpacing: "6px", marginBottom: "16px" }}>LEGAL</p>
      <h1 style={{ fontSize: "clamp(28px, 5vw, 48px)", fontWeight: "900", letterSpacing: "-2px", marginBottom: "8px" }}>TERMS OF <span style={{ color: "#06b6d4" }}>SERVICE</span></h1>
      <p style={{ color: "#666", fontSize: "12px", letterSpacing: "2px", marginBottom: "60px" }}>Last updated: 19 April 2026</p>

      {[
        { title: "1. Introduction", body: "These Terms of Service govern your use of the services provided by Nova AI Solutions, contactable at dhancock268@gmail.com. By subscribing to or using our services, you agree to be bound by these Terms." },
        { title: "2. Services Provided", body: "Nova AI Solutions provides AI-powered chatbot software for integration into business websites. The Service is offered on a monthly subscription basis: Starter (£25/month), Pro (£79/month), and Agency (£199/month)." },
        { title: "3. Eligibility", body: "You must be at least 18 years of age and have the legal authority to enter into a binding contract under the laws of England and Wales to use our services." },
        { title: "4. Subscriptions and Payment", body: "All subscriptions are billed monthly in advance in GBP. We reserve the right to change pricing with 30 days written notice. Failure to pay may result in suspension or termination of your account." },
        { title: "5. Cancellation and Refunds", body: "You may cancel your subscription at any time. Cancellation takes effect at the end of the current billing period. No refunds are issued for partial months already paid, except where required by law." },
        { title: "6. Acceptable Use", body: "You agree not to use the Service for any unlawful activity, to transmit spam or malware, to infringe intellectual property rights, or to harass any person. We may suspend accounts that violate this policy without refund." },
        { title: "7. Intellectual Property", body: "All software, code, designs, and content forming part of the Service remain the exclusive intellectual property of Nova AI Solutions. Your subscription grants a non-exclusive, non-transferable licence to use the Service during your subscription period only." },
        { title: "8. Data and Privacy", body: "We collect and process personal data in accordance with our Privacy Policy. We will never sell your personal data to third parties. You are responsible for ensuring your use of the Service complies with UK GDPR." },
        { title: "9. Limitation of Liability", body: "To the maximum extent permitted by law, Nova AI Solutions shall not be liable for any indirect or consequential damages. Our total liability shall not exceed the amount paid by you in the relevant month." },
        { title: "10. Governing Law", body: "These Terms are governed by the laws of England and Wales. Any disputes shall be subject to the exclusive jurisdiction of the courts of England and Wales." },
        { title: "11. Contact", body: "For any questions regarding these Terms, please contact us at: dhancock268@gmail.com" },
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
