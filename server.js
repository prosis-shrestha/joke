const express = require("express");
const { exec } = require("child_process");

const app = express();
const PORT = process.env.PORT || 3000;

app.get("/", (req, res) => {
  exec("joke", (err, stdout, stderr) => {
    if (err) return res.status(500).send("Error: " + stderr);
    res.send(`<pre>${stdout}</pre>`);
  });
});

app.listen(PORT, () => console.log(`Listening on ${PORT}`));
