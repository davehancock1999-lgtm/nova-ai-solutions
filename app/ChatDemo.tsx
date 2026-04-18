"use client";
import ReactMarkdown from 'react-markdown'
import React, { useState } from 'react';

export default function ChatDemo() {
  const [messages, setMessages] = useState([{ role: 'assistant', content: 'Nexus Core Online.' }]);
  const [input, setInput] = useState('');

  const send = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim()) return;
    const newMsgs = [...messages, { role: 'user', content: input }];
    setMessages(newMsgs);
    setInput('');
    
    const res = await fetch('/api/chat', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ messages: newMsgs }),
    });
    const data = await res.json();
    setMessages([...newMsgs, data]);
  };

  return (
    <div style={{ background: '#18181b', border: '1px solid #0891b2', borderRadius: '15px', padding: '20px', width: '100%', maxWidth: '400px' }}>
      <div style={{ height: '300px', overflowY: 'auto', marginBottom: '10px' }}>
        {messages.map((m, i) => (
          <div key={i} style={{ textAlign: m.role === 'user' ? 'right' : 'left', margin: '10px 0' }}>
            <span style={{ background: m.role === 'user' ? '#0891b2' : '#27272a', padding: '8px', borderRadius: '8px', fontSize: '14px' }}>
              {m.role === 'assistant' ? <ReactMarkdown>{m.content}</ReactMarkdown> : m.content}
            </span>
          </div>
        ))}
      </div>
      <form onSubmit={send} style={{ display: 'flex', gap: '10px' }}>
        <input style={{ flex: 1, background: 'black', color: 'white', border: '1px solid #3f3f46', padding: '8px' }} value={input} onChange={(e) => setInput(e.target.value)} />
        <button style={{ background: '#0891b2', color: 'white', border: 'none', padding: '8px 15px', cursor: 'pointer' }}>SEND</button>
      </form>
    </div>
  );
}
