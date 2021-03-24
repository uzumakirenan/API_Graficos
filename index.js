const express = require('express');
const app = express()

app.use(express.json())

const { ChartJSNodeCanvas } = require('chartjs-node-canvas');

const width = 400;
const height = 400;

const chartJSNodeCanvas = new ChartJSNodeCanvas({ width, height });

async function grafico (tipo, labels, data) {

    const configuration = {
        type: tipo, //'bar'
        data: {
            labels: labels,//['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange']
            datasets: [{
                label: '# of Votes',
                data: data, //[12, 19, 3, 5, 2, 3]
                backgroundColor: [
                    'rgba(255, 99, 132, 0.2)',
                    'rgba(54, 162, 235, 0.2)',
                    'rgba(255, 206, 86, 0.2)',
                    'rgba(75, 192, 192, 0.2)',
                    'rgba(153, 102, 255, 0.2)',
                    'rgba(255, 159, 64, 0.2)'
                ],
                borderColor: [
                    'rgba(255,99,132,1)',
                    'rgba(54, 162, 235, 1)',
                    'rgba(255, 206, 86, 1)',
                    'rgba(75, 192, 192, 1)',
                    'rgba(153, 102, 255, 1)',
                    'rgba(255, 159, 64, 1)'
                ],
                borderWidth: 1
            }]
        },
        options: {
            scales: {
                yAxes: [{
                    ticks: {
                        beginAtZero: true,
                        callback: (value) => '$' + value
                    }
                }]
            }
        }
    };
    
    const dataUrl = await chartJSNodeCanvas.renderToDataURL(configuration);
    
    return await dataUrl

};

app.get("/", (req, res) => {
    res.sendFile(__dirname + "/pages/index.html")
})




const port = process.env.PORT || 3000;

app.listen(port, () => {
    console.log("Server is Running")
})