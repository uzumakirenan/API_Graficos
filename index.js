const express = require('express');
const app = express()

app.use(express.json())

const { ChartJSNodeCanvas } = require('chartjs-node-canvas');

const width = 400;
const height = 400;

const chartJSNodeCanvas = new ChartJSNodeCanvas({ width, height });



app.get("/", (req, res) => {
    res.sendFile(__dirname + "/pages/index.html")
})




const port = process.env.PORT || 3000;

app.listen(port, () => {
    console.log("Server is Running")
})