import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
  try {
    const { name, email, business, plan } = await req.json();

    const result = await resend.emails.send({
      from: 'onboarding@resend.dev',
      to: 'dhancock268@gmail.com',
      subject: `New Lead: ${name} - ${plan} plan`,
      html: `
        <h2>New Nova AI Solutions Lead</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Business:</strong> ${business}</p>
        <p><strong>Plan:</strong> ${plan}</p>
      `,
    });

    console.log('Resend result:', JSON.stringify(result));
    return Response.json({ success: true });
  } catch (error) {
    console.error('Resend error:', String(error));
    return Response.json({ error: String(error) }, { status: 500 });
  }
}
