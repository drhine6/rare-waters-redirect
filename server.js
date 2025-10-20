import express from "express";

const app = express();

// Catch all routes and redirect permanently
app.use((req, res) => {
  const newUrl = `https://infiniteoutdoorsusa.com${req.originalUrl}`;
  res.redirect(301, newUrl);
});

// Start the server
const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Redirect server running on port ${port}`);
});
