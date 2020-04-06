
var mongoose = require("mongoose");

var Schema = mongoose.Schema;

var student_schema = new Schema({
    mobile:Number,
    username:String,
    password:String,
    dbpwd:String,
    sno:Number,
    cno:Number,
    banji:String,
    md:String
})

var teacher_schema = new Schema({
    mobile:Number,
    username:String,
    password:String,
    dbpwd:String,
    tno:Number,
    cno:Number
})

var uid_schema = new Schema({
    name:String,
    id:Number
})

var class_schema = new Schema({
    class_text:String,
    class_code:String
})

var tlist_schema = new Schema({
    tno:Number,
    tname:String,
    tclass:Array
})

var Msg_schema = new Schema({
   job:Number,
   section:String,
   name:String,
   sex:String,
   age:Number 
})

exports.Uid = mongoose.model("uid",uid_schema);

exports.Student = mongoose.model("student",student_schema);

exports.Teacher = mongoose.model("teacher",teacher_schema);

exports.Class = mongoose.model("class",class_schema);

exports.Tlist = mongoose.model("tlist",tlist_schema);

exports.Msg = mongoose.model('msg',Msg_schema)

