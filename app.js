const express = require("express");
const { reduceMyArray } = require("./arrayOperation");
const { maxGap, getAll } = require("./maxGap");
const app = express();
const port = 5000;

app.use(express.json());

app.post("/api/postUser/:id", async (req, res) => {
  return res.status(200).json({ params: req.params.id });
});

app.get("/api", (req, res, next) => {
  console.log(req.body);
  res.status(200).json({ ok: "ok" });
});

app.post("/api/", (req, res) => {
  res.status(200).json(req.query.id);
});
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
const array = [1, 87, 80, 7, 1, 17, 100];

maxGap(array);
