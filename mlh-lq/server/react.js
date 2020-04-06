var express = require("express");
var router = express.Router();

// import {LiuYan} from "./utils/schema"
var { LiuYan, Code, Pic, Movie_hot, GoodType, GoodDetail, GoodList, Shopcar,Goodsearch } = require("./utils/schema")
var { sendCode } = require("./aly")
// var {getResult} =require("./config");
var { createToken, decodeToken, getMobile } = require("./utils/token");
var multer = require("multer");
router.get("/index", (req, res) => {
    res.json({
        msg: "测试 react api 接口 ",
        code: 200
    })
})


// 查询留言
router.get("/movie", (req, res) => {
    Movie_hot.find({}, {}).then(result => {
        res.json({
            code: 200,
            result,
            msg: "获取评论成功."
        })
    })
})
// 删除留言
router.post("/delComment", (req, res) => {
    var body = req.body;
    LiuYan.deleteOne({
        _id: body.id
    }).then(result => {
        res.json({
            code: 200,
            result,
            msg: "删除评论成功."
        })
    })
})

// 添加留言
router.post("/addComment", (req, res) => {
    var body = req.body;
    console.log(body);
    LiuYan.insertMany(body).then(data => {
        LiuYan.find({}, {}).then(result => {
            res.json({
                code: 200,
                result,
                msg: "添加评论成功."
            })
        })
    })
})
// 修改留言

function getCode() {
    return 1000 + Math.floor((10000 - 1000) * Math.random())
}

// 发送 
router.post("/aly/sendSms", (req, res) => {
    var { mobile } = req.body;
    const code = getCode();
    if (!mobile) {
        res.json({
            code: 200,
            msg: "请先输入手机号"
        })
    }

    sendCode(mobile, code).then(result => {
        console.log("result", result);   // result.Code = "OK"
        if (result.Code = "OK") {
            // 插入数据库 
            Code.insertMany({
                mobile,
                code,
                time: new Date()
            }).then(result => {
                res.json({
                    code: 200,
                    msg: "验证码发送成功",
                    param: code,
                    type: 1,
                    result
                })
            })
        } else {
            res.json({
                code: 200,
                msg: "验证码发送失败",
                type: 0
            })
        }

    }).catch(err => {
        res.json({
            code: 200,
            msg: "服务器错误",
            type: 0
        })
    })
})


// router.post("/yum/sendSms", (req, res) => {
//     var { mobile } = req.body;
//     const code = getCode();
//     if (!mobile) {
//         res.json({
//             code: 200,
//             msg: "请先输入手机号"
//         })
//     }

//     getResult(code, mobile).then(response => {
//         console.log(response.data);
//         console.log(response.data.code);
//         if (response.data.code == "000000") {
//             // 插入数据库 
//             Code.insertMany({
//                 mobile,
//                 code,
//                 time: new Date()
//             }).then(result => {
//                 res.json({
//                     code: 200,
//                     msg: "验证码发送成功",
//                     param: code,
//                     type: 1,
//                     result
//                 })
//             })
//         } else {
//             res.json({
//                 code: 200,
//                 msg: "验证码发送失败",
//                 type: 0
//             })
//         }

//     }).catch(err => {
//         res.json({
//             code: 200,
//             msg: "服务器错误",
//             type: 0
//         })
//     })
// })


router.post("/checkCode", (req, res) => {
    var {
        mobile,
        code
    } = req.body;
    Code.findOne({
        mobile,
        code
    }).then(result => {
        if (result) {
            var time = new Date();
            if (time - result.time < 6000000000000000 * 1000) {
                var token = createToken(mobile);
                res.json({
                    code: 200,
                    msg: "验证码有效",
                    type: 1,
                    token
                })
            } else {
                res.json({
                    code: 200,
                    msg: "验证码过期",
                    type: 0
                })
            }
        } else {
            res.json({
                code: 200,
                msg: "验证码错误",
                type: 0
            })
        }
    })
})


router.post("/getMobile", (req, res) => {
    var token = req.headers.token;
    console.log("getmobil-token", token)
    if (token) {
        decodeToken(token).then(result => {
            res.json({
                code: 200,
                msg: "token 验证成功",
                result: result,
                type: 1,
            })
        }).catch(err => {
            res.json({
                code: "3000",
                msg: "token 验证失败",
                err,
                type: 0,
            })
        })
    } else {
        res.json({
            code: "3000",
            msg: "token不存在,请重新登录",
            type: 0
        })
    }
})


// 磁盘存储数据 
var storage = multer.diskStorage({
    destination(req, file, cb) {
        cb(null, "./public/upload");  // 存储到 /public/upload
    },
    filename(req, file, cb) {

        cb(null, Date.now() + "wh1910" + file.originalname);
    }
})
var upload = multer({ storage: storage }).any();  // 接收任何格式的文件

router.post("/uploadImg", upload, (req, res) => {
    console.log(req.files[0]);
    var path = req.files[0].path;   // 上传的图片路径
    var time = new Date();
    getMobile(req, res, (mobile) => {
        Pic.insertMany({
            mobile,
            pic: path,
            time
        }).then(result => {
            res.json({
                code: 200,
                msg: "头像上传成功",
                pic: path,
                mobile,
                type: 1
            })
        })
    })
})

router.post("/getlastPic", (req, res) => {
    getMobile(req, res, (mobile) => {
        Pic.findOne({
            mobile
        }).sort({ _id: -1 }).then(result => {
            if (result) {
                res.json({
                    code: 200,
                    msg: "获取最新头像成功",
                    result,
                    type: 1
                })
            } else {
                res.json({
                    code: 200,
                    msg: "用户暂无头像",
                    result,
                    type: 0
                })
            }
        })
    })
})


// 首页导航
router.get("/nav", (req, res) => {
    GoodType.find({}, {}).then(result => {
        res.json({
            code: 200,
            result,
            msg: "获取导航成功."
        })
    })
})


// 商品列表
router.get("/goodlist", (req, res) => {
    GoodList.find({}, {}).then(result => {
        res.json({
            code: 200,
            result,
            msg: "获取商品列表列表成功."
        })
    })
})

router.get("/gooddetail", (req, res) => {
    GoodDetail.find({}, {}).then(result => {
        console.log("gooddetail", result)
        res.json({
            code: 200,
            result,
            msg: "获取商品列表列表成功."
        })
    })
})


// 商品详情
router.get("/getGoodById", (req, res) => {
    GoodDetail.find({
        siloCategory: req.query.goodId
    }, {}).then(result => {
        console.log("gooddetail", result)
        res.json({
            code: 200,
            msg: "获取商品详情成功",
            result
        })
    })
})

// 加入购物车 逻辑 

router.post("/addToShopcar", (req, res) => {
    const {
        count,
        goodId,
        good
    } = req.body;
    getMobile(req, res, mobile => {  // 判断token 是否 有效 

        // 数据库 有这一条商品 count ++
        //  没有直接新增 
        Shopcar.findOne({
            mobile,
            goodId
        }).then(result => {
            if (result) {
                Shopcar.updateOne({
                    mobile,
                    goodId
                }, {
                    $inc: {
                        count: count
                    },
                    $set: {
                        time: new Date()
                    }
                }).then(data => {
                    res.json({
                        code: 200,
                        msg: "添加成功",
                        result: data
                    })
                })
            } else {
                Shopcar.insertMany({
                    mobile,
                    count,
                    time: new Date(),
                    goodId,
                    good
                }).then(data => {
                    res.json({
                        code: 200,
                        msg: "添加成功",
                        result: data
                    })
                })
            }
        })
    })
})


router.post("/showbuy", (req, res) => {
    const {
        count,
        goodId,
        good
    } = req.body;
    getMobile(req, res, mobile => {  // 判断token 是否 有效 

        // 数据库 有这一条商品 count ++
        //  没有直接新增 
        Shopcar.findOne({
            mobile,
            goodId
        }).then(result => {
            if (result) {
                Shopcar.updateOne({
                    mobile,
                    goodId
                }, {
                    $inc: {
                        count: count
                    },
                    $set: {
                        time: new Date()
                    }
                }).then(data => {
                    res.json({
                        code: 200,
                        result: data
                    })
                })
            } else {
                Shopcar.insertMany({
                    mobile,
                    count,
                    time: new Date(),
                    goodId,
                    good
                }).then(data => {
                    res.json({
                        code: 200,
                        result: data
                    })
                })
            }
        })
    })
})


// 查询 
router.get("/getCarList", (req, res) => {
    getMobile(req, res, mobile => {
        console.log("mobile", mobile)
        Shopcar.find({
            mobile
        }).then(result => {
            res.json({
                code: 200,
                msg: "获取购物车列表成功",
                result
            })
        })
    })
})


// 修改 
// 修改是否选中 1条选中  全部选中
router.post("/changeChecked", (req, res) => {
    const {
        checked,
        goodId
    } = req.body;
    getMobile(req, res, mobile => {
        var obj = { mobile };
        if (goodId) {
            obj = {
                mobile,
                goodId
            }
        }
        Shopcar.updateMany(obj, {
            $set: {
                checked: checked
            }
        }).then(result => {
            res.json({
                code: 200,
                msg: goodId ? "修改单条选中成功" : "修改全部选中成功",
                result
            })
        })
    })
})

router.post("/changeCount", (req, res) => {
    const {
        goodId,
        count,
        flag
    } = req.body;

    getMobile(req, res, mobile => {
        var obj = {}
        if (count) {
            obj = {
                $set: {
                    count
                }
            }
        } else {
            obj = {
                $inc: {
                    count: flag ? 1 : -1
                }
            }
        }
        Shopcar.updateOne({
            goodId,
            mobile
        }, obj).then(result => {
            res.json({
                code: 200,
                msg: "修改商品数量成功",
                result
            })
        })

    })
})

// 删除 
router.post("/delSelect", (req, res) => {
    getMobile(req, res, mobile => {
        Shopcar.deleteMany({
            mobile,
            checked: true
        }).then(result => {
            res.json({
                code: 200,
                msg: "删除购物车商品成功",
                result
            })
        })
    })
})

router.get("/getSearchList", (req, res) => {
    var limit = req.query.limit * 1 || 0;
    var keyword = req.query.keyword;
    var obj = {};
    if (keyword) {
        obj = {
            $or: [
                {
                    productName: new RegExp(keyword)
                },
                {
                    brandName: new RegExp(keyword)
                }
            ]
        };
    }
    console.log(keyword);
    Goodsearch.find(obj, {})
        .limit(limit)
        .then(result => {
            if (result) {
                res.json({
                    code: 200,
                    msg: "获取商品详细列表",
                    result
                });
            } else {
                res.json({
                    code: 200,
                    msg: "获取商品详细列表失败",
                    result
                });
            }
        });
});


module.exports = router;
