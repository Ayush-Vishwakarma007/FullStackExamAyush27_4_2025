const express = require('express');
const router = express.Router();

router.get('/', async (req, res) => {
  try {
    const reports = await Order.find({}).populate('items.product');
    res.status(200).json(reports);
  } catch (err) {
    res.status(500).json({ error: 'Failed to fetch reports' });
  }
});

module.exports = router;
