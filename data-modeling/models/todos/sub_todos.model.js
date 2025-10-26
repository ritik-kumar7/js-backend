import mongooes from 'mongoose'

const subTodoSchema=new mongooes.Schema({
    title:{
        type:String,
        required:true,

    }
     
},{timestamps:true})