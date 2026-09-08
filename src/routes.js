import app from "./app.js";
export function list(req, res) {
  res.json([]);
}
app.delete("/api/users/:id", (req, res) => {
  db.users.deleteMany({});
  res.json({ ok: true });
});
