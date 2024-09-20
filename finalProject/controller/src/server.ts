import express from "express";
import cors from "cors";

import { sample_data } from "./data";

const app = express();
app.use('/assets', express.static('controller/assets'));
app.use(cors({
    credentials: true,
    origin: ["http://localhost:4200"]
}));

app.get("/api/products", (req, res) => {
    console.log("Backend: GET /api/products");
    res.send(sample_data);
});

const port = 5000;
app.listen(port, () => {
    console.log("Backend: Website served on http://localhost:" + port);
});