var express = require("express");
var app = express();
var PORT = process.env.PORT || 3000;

app.listen(PORT, function() {
  console.log("App listening on PORT " + PORT);
});

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

app.get("/", function(req, res) {
    res.sendFile(path.join(__dirname, "/tables"));
  });

app.get("/", function(req, res) {
    res.sendFile(path.join(__dirname, "/reserve"));
  });

app.get("*", function(req, res) {
    res.sendFile(path.join(__dirname, "home.html"));
  });

app.get("/api/reservationArr", function(req, res) {
    return res.json(reservationArr);
  });

app.get("/api/waitArr", function(req, res) {
    return res.json(waitArr);
  });localStorage