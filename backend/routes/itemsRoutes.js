const express = require("express");
const router = express.Router();

// Sample data for demonstration
const items = Array.from({ length: 1000 }, (_, index) => ({
  id: index + 1,
  name: `Item ${index + 1}`,
}));

// GET /api/items - Fetch large dataset
router.get("/", (req, res) => {
  res.json(items);
});

module.exports = router;
