const express = require("express");
const { exec } = require("child_process");

const app = express();
const PORT = process.env.PORT || 3000;

app.get("/", (req, res) => {
  exec("node_modules/.bin/joke", (err, stdout) => {
    if (err) {
      console.error("Error running joke CLI:", err);
      return res.status(500).send("Error running joke CLI");
    }
    res.send(`<pre>${stdout}</pre>`);
  });
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
