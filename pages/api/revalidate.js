export default async function handler(req, res) {
  // Validasi secret key
  if (req.query.secret !== process.env.NEXT_PRIVATE_REVALIDATION_KEY) {
    return res.status(401).json({ message: "Invalid token" });
  }

  try {
    await res.revalidate(`/${req.query.slug}`); // Contoh: /blog/[id]
    return res.json({ success: true });
  } catch (err) {
    return res.status(500).send("Error revalidating");
  }
}
