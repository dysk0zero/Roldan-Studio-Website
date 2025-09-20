export default async function handler(req, res) {
  if (req.method !== 'POST') {
    res.status(405).json({ error: 'Method not allowed' });
    return;
  }

  const { name, email, message } = req.body;

  // TODO: send data somewhere (email API, DB, Slack, etc.)
  console.log(name, email, message);

  res.status(200).json({ success: true });
}
