const mongoose = require('mongoose');

const cartSchema = new mongoose.Schema({
  user: { type: Number, required: true }, 
  items: [
    {
      product: { type: mongoose.Schema.Types.ObjectId, ref: 'Product' },
      quantity: { type: Number, default: 1 },
    }
  ],
}, { timestamps: true });

cartSchema.set('toJSON', {
  transform: (doc, ret) => {
    delete ret.__v;
    return ret;
  }
});

module.exports = mongoose.model('Cart', cartSchema);
