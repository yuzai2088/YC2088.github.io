

var express = require("express");
var router = express.Router();
var { Movie, User, Movie_hot, Pre, Ima, New, City, Comment } = require("./utils/schema")
var axios = require("axios");
var { aesEncrypt, keys } = require("./utils/index")
var multer = require("multer");
var Mock = require("mockjs");

router.get("/index", (req, res) => {
    res.send("这是  vue - project 接口 文件")
})

router.get("/movie", (req, res) => {
    var limit = req.query.limit * 1 || 0;
    Movie_hot.find().limit(limit).then(result => {
        // console.log("hot", result)
        res.json({
            msg: "获取电影数据成功...",
            code: 200,
            result
        })
    })
});

router.get("/pre", (req, res) => {
    var limit = req.query.limit * 1 || 0;
    Pre.find().limit(limit).then(result => {
        // console.log("pre", result)
        res.json({
            msg: "获取即将上映数据成功...",
            code: 200,
            result
        })
    })
});

router.get("/ima", (req, res) => {
    var limit = req.query.limit * 1 || 0;
    Ima.find().limit(limit).then(result => {
        // console.log("ima", result)
        res.json({
            msg: "获取影院数据成功...",
            code: 200,
            result
        })
    })
});

router.get("/new", (req, res) => {
    var limit = req.query.limit * 1 || 0;
    New.find().limit(limit).then(result => {
        // console.log("new", result)
        res.json({
            msg: "获取电影资讯成功...",
            code: 200,
            result
        })
    })
});
router.get("/city", (req, res) => {
    var limit = req.query.limit * 1 || 0;
    City.find().limit(limit).then(result => {
        console.log("city", result)
        res.json({
            msg: "获取电影资讯成功...",
            code: 200,
            result
        })
    })
});

router.post("/getcomment", (req, res) => {
    var limit = req.query.limit * 1 || 0;
    console.log("query", req.query.id)
    Comment.find({ cid: req.query.id }).limit(limit).then(result => {
        console.log("getcomment", result)
        res.json({
            msg: "获取评论列表成功",
            code: 200,
            result
        })
    })
});

router.post("/comment", (req, res) => {
    const body = req.body;
    console.log(body)
    console.log(req.session.username)
    console.log("query", req.query.id)
    body.time = new Date();
    body.username = req.session.username;
    body.cid = req.query.id;
    Comment.insertMany(body)
        .then(result => {
            res.json({
                code: 200,
                msg: "添加评论成功！",
                type: 1,
                result
            })
        })
})

router.post("/changpwd", (req, res) => {
    const body = req.body;
    console.log(body)
    var { oldpwd, newpwd } = body;
    // console.log(req.session.username)
    if (req.session.username) {
        User.findOne({
            username: req.session.username
        }).then(result => {
            console.log("result", result)
            if (result.password == oldpwd){
                User.updateOne({
                    username:req.session.username,
                },{
                    $set:{
                        password:newpwd
                    }
                }).then(result=>{
                    res.json({
                        code:200,
                        msg:"密码修改成功",
                        type:1
                    })
                })
            }
        })
    }
})











router.get("/maizuo/banner", (req, res) => {
    axios({
        url: "https://m.maizuo.com/gateway?type=2&cityId=210300&k=1816349",
        headers: {
            'X-Client-Info': '{"a":"3000","ch":"1002","v":"5.0.4","e":"15725877173487513444945","bc":"210300"}',
            'X-Host': 'mall.cfg.common-banner'
        }
    }).then(result => {
        console.log(result.data);

        res.json({
            msg: '获取banner数据成功',
            code: 200,
            result: result.data
        })
    })
})



router.post("/register", (req, res) => {
    const body = req.body;
    console.log(body);
    // 先判断用户名或者手机号是否存在
    User.findOne({
        $or: [
            {
                username: body.username
            },
            {
                mobile: body.mobile
            }
        ]
    }).then(data => {
        if (data) {
            // 已经注册过
            res.json({
                code: 200,
                msg: "用户名或者手机已经被注册",
                result: null,
                type: 0
            })
        } else {
            // 插入
            body.time = new Date();
            User.insertMany(body)
                .then(result => {
                    res.json({
                        code: 200,
                        msg: "注册成功,欢迎登陆",
                        type: 1,
                        result
                    })
                })
        }
    })
})

router.post("/login", (req, res) => {
    var body = req.body;
    console.log(body)

    // 先查询  
    User.findOne({
        mobile: body.mobile
    }).then(data => {
        if (data) {
            if (data.password == body.password) {
                var str = body.mobile + "-" + body.password;
                var token = aesEncrypt(str, keys);
                req.session.token = token;
                req.session.mobile = body.mobile;
                req.session.username = data.username;
                res.json({
                    code: 200,
                    msg: '登陆成功',
                    result: data,
                    type: 1,
                    token
                })
            } else {
                res.json({
                    code: 200,
                    msg: '登陆失败,手机号或者密码不正确',
                    result: data,
                    type: 0
                })
            }
        } else {
            res.json({
                code: 200,
                msg: '登陆失败,手机号不存在',
                result: data,
                type: 0
            })
        }
    })
})


router.get("/getInfo", (req, res) => {
    User.findOne({
        mobile: req.session.mobile
    }).then(result => {
        res.json({
            code: 200,
            msg: '获取用户的个人信息成功',
            result
        })
    })
})

// 注销
// router.get("/logout", (req, res) => {
//     req.session.destroy(() => {
//         res.json({
//             msg: "退出成功！"
//         })
//     })
// })

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


// 图片上传  
router.post("/uploadImg", upload, (req, res) => {
    console.log(req.files[0]);
    var path = req.files[0].path;

    User.updateOne({
        mobile: req.session.mobile
    }, {
        $set: {
            pic: path
        }
    }).then(result => {
        res.json({
            msg: '头像上传成功',
            code: 200,
            pic: path,
            type: 1,
            mobile: req.session.mobile,
            result
        })
    })
})

// 根据手机号获取头像
router.post("/getAvatarImg", (req, res) => {
    User.findOne({
        mobile: req.session.mobile
    }).then(result => {
        if (result.pic) {
            res.json({
                msg: '获取头像成功',
                code: 200,
                result,
                type: 1
            })
        } else {
            res.json({
                msg: '获取头像失败',
                code: 200,
                result,
                type: 0
            })
        }
    })
})

var Random = Mock.Random;
// Mock 获取随机数据 
router.get("/mock/data", (req, res) => {
    var result = [];
    for (var i = 0; i <= 200; i++) {
        result.push({
            uid: Random.id(),
            title: Random.sentence(8, 16),
            username: Random.cname(2, 5),
            time: Random.date("yyyy-MM-dd"),
            city: Random.city(),
            pic: Random.image('300x200', '#00405d', '#FFF', 'Mock.js' + i)
        })
    }
    res.json({
        code: 200,
        result,
        msg: "获取mock的随机数据成功"
    })
})



module.exports = router;