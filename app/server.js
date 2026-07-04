const morgan = require("morgan");
const express = require("express");
const client = require("prom-client");

const app = express();
app.use(morgan("dev"));
const PORT = 5000;

// Enable default metrics
client.collectDefaultMetrics();


// Create custom counter
const requests = new client.Counter({
    name: "http_requests_total",
    help: "Total number of HTTP requests"
});


// Home route
app.get("/", (req,res)=>{
    requests.inc();

    res.send("Monitoring Application Running 🚀");
});


// Health API
app.get("/health", (req,res)=>{
    requests.inc();

    res.json({
        status:"UP",
        message:"Application is healthy"
    });
});


// Prometheus metrics endpoint
app.get("/metrics", async(req,res)=>{

    res.setHeader(
        "Content-Type",
        client.register.contentType
    );

    res.end(
        await client.register.metrics()
    );

});


app.listen(PORT,()=>{
    console.log(`Server running on port ${PORT}`);
});