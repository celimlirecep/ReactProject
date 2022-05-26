
const { default: mongoose } = require('mongoose');

const EmployeSchema=new mongoose.Schema(
    {
        name:{
            type:String,
            required:true
        },
        age:{
            type:Number,
            required:true
        },
        username:{
            type:String,
            required:true
        }
    }
)

const EmployeModel=mongoose.model("emplyees",EmployeSchema);
module.exports=EmployeModel;