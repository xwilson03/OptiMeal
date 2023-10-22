const mongoose = require("mongoose");

const basicModel = new mongoose.schema({
    id:{type:int ,required:true},
    title:{type:String, required:true},
    summary:{type:String, required:true},
    vegetarian:{type:Boolean, default:false},
    vegan:{type:Boolean,default:false},
    glutenFree:{type:Boolean,default:false},
    dairyFree:{type:Boolean,default:false},
    cheap:{type:Boolean,default:false}
}
);