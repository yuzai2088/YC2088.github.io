var express = require("express");
var router = express.Router();

const { Msg, Student, Teacher, Uid, Class } = require("../utils/schema");

router.get("/demo", (req, res) => {
    res.send("这是一个学生端的接口路由");
})


router.get("/changepwd", (req, res) => {
    res.render("stu_changepwd", {
        username: req.session.username,
        password: req.session.password,
        sno: req.session.sno,
        tno: req.session.tno,
        mobile: req.session.mobile
    })
})

// 修改密码
router.post("/resetpwd", (req, res) => {
    var body = req.body;
    console.log(body);
    Student.updateOne({
        mobile: body.mobile
    }, {
        $set: {
            password: body.newpwd
        }
    }).then(result => {
        console.log(result);
        res.json({
            code: 200,
            msg: "密码修改成功!",
            newpwd: body.newpwd
        });
        req.session.destroy();
    })

})

router.get("/add", (req, res) => {
    res.render("stu_apply", {
        username: req.session.username,
        sno: req.session.sno,
        tno: req.session.tno
    })
})

router.get("/today", (req, res) => {
    res.render("stu_today", {
        username: req.session.username,
        sno: req.session.sno,
        tno: req.session.tno
    })
})

router.get("/changeinfo", (req, res) => {
    Class.find({}, {}).then(result => {
        res.render("stu_changeinfo", {
            mobile: req.session.mobile,
            username: req.session.username,
            sno: req.session.sno,
            tno: req.session.tno,
            classInfo: result
        })
    })
})


router.post("/addinfo", (req, res) => {
    var body = req.body;
    console.log('body',body);
    Msg.insertMany(body).then(result=>{
        console.log(result)
        res.send(`<script>alert('修改成功!');location.href='/student'</script>`);
    })
})



router.post("/postinfo", (req, res) => {
    var body = req.body;
    console.log(body);
    Student.updateOne({
        mobile: req.session.mobile

    }, {
        $set: body
    }).then(result => {
        console.log(result);
        res.send(`<script>alert('修改成功!');location.href='/student'</script>`);
    })
})




module.exports = router;

// Msg.find({'job':11111},{}).then(result=>{
//     console.log(result)
// })
