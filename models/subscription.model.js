import mongoose, { Schema } from "mongoose";

const subscriptionSchema=new Schema({
    name:{type:String,
        minlength:6,
            maxLength:30,
            required:[true,'subscription name is required'],
            trim:true

    },
    price:{
        type:Number,
        required:[true,'subscription name is required'],
        price:[0,'price should be greater than zero']

    },
    currencry:{
        type:String,
        enum:['usd','inr','eur'],
        default:'inr'
        
    },

    frequency:{type:String,
        enum:['daily','monthly','yearly','weekly']
    },
    category:{
        type:String,
        enum:['entertainment','sports','news','finance','politics','science','food','travel','other'],
        required:true
    },
    paymentMethod:{
        type:String,
        required:true,
        trim:true
    },
    status:{
        type:String,
        enum:['active','cancelled','expired'],
        default:'active'
    },
    users:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'User',
        required:true,
        index:true
    },
    startDate:{
        type:Date,
        required:true,
        validate:{
            validator:(val)=>val<=new Date(),
            message:'startDate must be in past '
        }
    },
    renewalDate:{
         type:Date,
        validate:{
            validator:function(val){ 
                val>this.startDate()
            },
            message:'renewalDate must be after start date '
        }
    }
},{timestamps:true});

subscriptionSchema.pre('save',function(next){
  if(!this.renewalDate){
    const renewalPeriods={
        monthly:30,
        weekly:7,
        yearly:365,
        daily:1
    }
    this.renewalDate=new Date(this.startDate);
    this.renewalDate.setDate(this.renewalDate.getDate()+renewalPeriods[this.frequency])
  }

//   simillarly auto update the status
if(this.renewalDate<new Date()){
    this.status='expired'
}
next()
})