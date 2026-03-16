// Deploy to Vercel/Netlify + add this endpoint
app.get('/track/:code', (req, res) => {
  const { ref } = req.query;
  // Log: "Someone clicked from Instagram ref=ig_12345"
  console.log(`Track hit: ${req.params.code} from ${ref}`);
  res.redirect(req.query.url || '/');
});