import mongoose, { Schema } from 'mongoose';

const orderSchema = new mongoose.Schema({
        name: {
          type: String,
          required: true
        },
        phone: {
          type: String,
          required: true
        },
        address: {
          type: String,
          required: true
        },
        
       
}, {timestamps:true,})

const orderModel = mongoose.model('orders', orderSchema);

export default orderModel;

