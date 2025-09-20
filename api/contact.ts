export default async function handler(req: any, res: any) {
  if (req.method !== 'POST') {
    res.status(405).json({ error: 'Method not allowed' });
    return;
  }

  const { name, email, message, website } = req.body;

  if (website && website.trim() !== '') {
    res.status(400).json({ error: 'Spam detected' });
    return;
  }

  await fetch(process.env.SLACK_WEBHOOK_URL, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      text: `📩 New contact form submission:\n*Name*: ${name}\n*Email*: ${email}\n*Message*: ${message}`
    }),
  });

  res.status(200).json({ success: true });
}
