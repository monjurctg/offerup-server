const mongoose = require('mongoose')
const { Schema } = mongoose;

const orderSchema = new Schema({
    name:{type:String,require:true,unique:true},
    email:{type:String,require:true,unique:true},
    phone:{type:Number,require:true,unique:true},
    address:{type:String,require:true,unique:true},
    city:{type:String,require:true,unique:true},
    state:{type:String,require:true,unique:true},
    zip:{type:String,require:true,unique:true},
 
 
   
},{
    timestamps: {
        createdAt: 'created_at', // Use `created_at` to store the created date
        updatedAt: 'updated_at' // and `updated_at` to store the last updated date
      }
})
const OrderModel = mongoose.model('Order',orderSchema);

module.exports = OrderModel