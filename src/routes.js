export function list(req, res) {
  res.json([]);
}
export function purge(req, res) {
  db.users.deleteMany({});
  res.json({ ok: true });
}
