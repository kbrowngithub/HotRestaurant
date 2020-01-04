var express = require("express");
var app = express();
var PORT = process.env.PORT || 3000;
var path = require("path");

app.listen(PORT, function() {
  console.log("App listening on PORT " + PORT);
});

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

var reservationArr = [
    {
      customerName: "Someone",
      customerEmail: "a@b.com",
      customerID: "12345",
      phoneNumber: "xxx-xxx-xxxx"
    }
  ];

var waitArr = [  
    {
    customerName: "Someone",
    customerEmail: "a@b.com",
    customerID: "12345",
    phoneNumber: "xxx-xxx-xxxx"
  }
];

app.get("/",function(req, res) {
    res.sendFile(path.join(__dirname, "home.html"));
  });

app.get("/tables", function(req, res) {
    res.sendFile(path.join(__dirname, "tables.html"));
  });

app.get("/reserve", function(req, res) {
    res.sendFile(path.join(__dirname, "reserve.html"));
  });

app.get("/api/reservationArr", function(req, res) {
    return res.json(reservationArr);
  });

app.get("/api/waitArr", function(req, res) {
    return res.json(waitArr);
  });