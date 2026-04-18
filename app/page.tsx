"use client";
import ChatDemo from './ChatDemo';
import Pricing from './Pricing';
import LeadCapture from './LeadCapture';
export default function Home() {
  return (
    <main style={{ backgroundColor: '#000', minHeight: '100vh', color: 'white', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', padding: '40px', fontFamily: 'sans-serif' }}>
      <div style={{ textAlign: 'center', marginBottom: '60px' }}>
        <h1 style={{ fontSize: '4.5rem', fontWeight: '900', letterSpacing: '-4px', margin: '0', background: 'linear-gradient(to bottom, #fff, #444)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', textTransform: 'uppercase' }}>
          Nova AI Solutions
        </h1>
        <div style={{ height: '2px', width: '100px', background: '#00d1ff', margin: '20px auto' }}></div>
        <p style={{ color: '#00d1ff', letterSpacing: '8px', fontSize: '0.7rem', textTransform: 'uppercase', fontWeight: 'bold' }}>Intelligence Reinvented // Route6 Pilot</p>
      </div>

      <ChatDemo />

      <div style={{ marginTop: '80px', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '40px', maxWidth: '800px', textAlign: 'left', borderTop: '1px solid #111', paddingTop: '40px' }}>
        <div>
          <h3 style={{ fontSize: '0.8rem', color: '#00d1ff', textTransform: 'uppercase', letterSpacing: '2px' }}>Deep Sea AI Exploration</h3>
          <p style={{ fontSize: '0.85rem', color: '#666', lineHeight: '1.6' }}>Autonomous neural nodes monitoring Blue Carbon and ocean health. Built for the future of humanity.</p>
        </div>
        <div>
          <h3 style={{ fontSize: '0.8rem', color: '#00d1ff', textTransform: 'uppercase', letterSpacing: '2px' }}>Project Route6</h3>
          <p style={{ fontSize: '0.85rem', color: '#666', lineHeight: '1.6' }}>The 1p revolution. Bypassing fees to secure the community legacy. Status: Active.</p>
        </div>
      </div>

      <Pricing />
      <LeadCapture />
    </main>
  );
}
