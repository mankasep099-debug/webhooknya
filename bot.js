const express = require("express");

const app = express();

app.use(express.json());

app.get("/", (req, res) => {
    res.send("Bot Online");
});

app.post("/webhook/sanpay", async (req, res) => {

    console.log(req.body);

    // proses deposit sukses

    res.status(200).send("OK");
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log(`Server running ${PORT}`);
});