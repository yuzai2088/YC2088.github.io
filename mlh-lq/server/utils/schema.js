

// Schema主要用于定义MongoDB中集合Collection里文档document的结构
// Schema 表结构的定义 定义文档的结构和属性  
// 每个schema会映射到mongodb中的一个collection，schema不具备操作数据库的能力
// {username:String,age:Number}

// String      字符串
// Number      数字    
// Date        日期
// Buffer      二进制
// Boolean     布尔值
// Mixed       混合类型
// ObjectId    对象ID    
// Array       数组

var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var users_schema = new Schema({
    username: String,
    mobile: Number,
    password: String,
    dbpwd: String,
    time: Date,
    pic: String,
    uid: Number,
    age: Number,
    word: String,
    address: String
})

// 如果需要在Schema定义后添加其他字段，可以使用add()方法



// Model 模型  
// Model是由Schema编译而成的假想（fancy）构造器，具有抽象属性和行为
// Model的每一个实例（instance）就是一个document，document可以保存到数据库和对数据库进行操作
// model是由schema生成的模型，可以对数据库的操作


exports.User = mongoose.model('user', users_schema);  // user => users 


var wh1910_schema = new Schema({
    names: String,
    password: String,
    time: Date
})

exports.Wuhan1910 = mongoose.model('wuhan1910', wh1910_schema)


var movie_schema = new Schema({
    title: String,
    genres: Array,
    year: String,
    rating: Object,
    id: String,
    casts: Array,
    directors: Array,
    images: Object
})

exports.Movie = mongoose.model('movie', movie_schema);


var movie_list = new Schema({
    title: String,
    genres: Array,
    year: String,
    rating: Object,
    id: String,
    casts: Array,
    directors: Array,
    images: Object
})

exports.Movie_hot = mongoose.model('mvlist', movie_list);

// pre
var Press = new Schema({

})
exports.Pre = mongoose.model('pre', Press);



// imax
var Imax = new Schema({
    name: String,
    address: String,
    cityName: String

})
exports.Ima = mongoose.model('imax', Imax);


var Lyb = new Schema({
    title: String,
    content: String

})
exports.Lyan = mongoose.model('lyt', Lyb);

var city_list = new Schema({

})
exports.City = mongoose.model("cit", city_list)

var News = new Schema({

})
exports.New = mongoose.model("new", News)



var uid_schema = new Schema({
    names: String,
    id: Number
})

exports.Uid = mongoose.model('uid', uid_schema);




var code_schema = new Schema({
    mobile: Number,
    code: Number,
    time: Date,
})

exports.Code = mongoose.model("code", code_schema)

var pic_schema = new Schema({
    mobile: Number,
    pic: String,
    time: Date,
})

exports.Pic = mongoose.model('pic', pic_schema);


var glist_schema = new Schema({
    listType: String,
})

exports.GoodList = mongoose.model('goodslist', glist_schema);


// GoodDetail
var gdetail_schema = new Schema({
    siloCategory: String,
    productName: String
})
exports.GoodDetail = mongoose.model('goodsdetail', gdetail_schema);


// goodType
var gtype_schema = new Schema({

})
exports.GoodType = mongoose.model('goodtype', gtype_schema);



var comment_schema = new Schema({
    cid: Number,
    title: String,
    content: String,
    mid: String, // 电影id
    mtitle: String, // 电影标题
    mpic: String,
    uid: Number, // 用户编号
    uname: String, // 用户名
    time: Date,
    con: String,
    username: String,

})
exports.Comment = mongoose.model('comment', comment_schema);


// 购物车
var shopcar_schema = new Schema({
    mobile: Number,
    goodId: String,
    good: Object,
    time: Date,
    count: Number,
    checked: Boolean
})

exports.Shopcar = mongoose.model('shopcar', shopcar_schema);

// 合并后详情列表
var detall_schema = new Schema({

})

exports.Goodsearch = mongoose.model('detall', detall_schema);

