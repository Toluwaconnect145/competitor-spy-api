const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.json({ message: "My Competitor Spy API is working! 🕵️" });
});

app.get('/competitor-intel', (req, res) => {
  res.json({
    priceChanges: [
      "Amazon lowered iPhone price from $999 to $899",
      "Uber reduced ride prices by 15%"
    ],
    newFeatures: [
      "Instagram added Stories download",
      "WhatsApp launched business tools"
    ]
  });
});

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log('Competitor Spy API running!');
}APIiceice
