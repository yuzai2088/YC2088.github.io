var express = require('express');
var router = express.Router();

const { Msg, Student, Teacher, Uid } = require("../utils/schema");

const { keys, aesEncrypt } = require("../utils");

/* GET users listing. */
router.get('/', function (req, res, next) {
  res.send('respond with a resource');
});

router.post('/detail', (req, res) => {
  const body = req.body;
  console.log(body);
  console.log(body.name)
  Msg.updateMany(
    {name:body.name},
    {
      $set:{
        job:body.job,
        sex:body.sex,
        name:body.name,
        section:body.section,
        age:body.age
      }
    }

    ).then((err,result)=>{
    console.log(result)
  })
  

})


router.post('/regist', (req, res) => {
  const body = req.body;
  console.log(body);
  if (body.toggle0 || body.toggle1) {
    if (body.toggle0) {
      Student.findOne({
        mobile: body.mobile
      }).then(result => {
        if (result) {
          res.send(`<script>alert('手机号已被注册,请重新注册!');location.href='/regist'</script>`)
        }
        else {

          Uid.updateOne(
            {
              name: "student"
            },
            {
              $inc: { id: 1 }
            }
          ).then(result => {
            Uid.findOne({
              name: "student"
            }).then(result => {
              console.log(result);
              body.sno = result.id;
              Student.insertMany(body).then(result => {
                res.send(`<script>alert('注册成功,请立即登录!');location.href='/login?mobile=${aesEncrypt(body.mobile, keys)}'</script>`)
              })
            })
          })
        }
      })
    }
    else if (body.toggle1) {
      Teacher.findOne({
        mobile: body.mobile
      }).then(result => {
        if (result) {
          res.send(`<script>alert('手机号已被注册,请重新注册!');location.href='/regist'</script>`)
        }
        else {
          Uid.updateOne(
            {
              name: "teacher"
            },
            {
              $inc: { id: 1 }
            }
          ).then(result => {
            Uid.findOne({
              name: "teacher"
            }).then(result => {
              console.log(result);
              body.tno = result.id;
              Teacher.insertMany(body).then(result => {
                res.send(`<script>alert('注册成功,请立即登录!');location.href='/login?mobile=${aesEncrypt(body.mobile, keys)}'</script>`)
              })
            })
          })
        }
      })
    }

  }
  else {
    res.send(`<script>alert("请阅读公司保密条例协议!");location.href='/login?mobile=${aesEncrypt(body.mobile, keys)}'</script>`)
  }
})

router.post("/login", (req, res) => {
  var body = req.body;
  console.log(body);

  // res.send("登录成功!");

  if (body.toggle0 || body.toggle1) {
    if (body.toggle0) {
      Student.findOne({
        mobile: body.mobile
      }).then(result => {
        if (result) {
          if (result.password == body.password) {
            console.log(req.session);

            req.session.mobile = result.mobile;
            req.session.username = result.username;
            req.session.password = body.password;
            req.session.toggle0 = body.toggle0;
            req.session.toggle1 = body.toggle1;
            req.session.sno = result.sno;
            res.send(`<script>alert('登录成功,即将跳转首页!');location.href='/home'</script>`)

          }
          else {
            res.send(`<script>alert('账号密码不匹配,请立即登录!');location.href='/login?mobile=${aesEncrypt(body.mobile, keys)}'</script>`)

          }
        }
        else {
          res.send(`<script>alert('账号不存在,请重新登录!');location.href='/login?mobile=${aesEncrypt(body.mobile, keys)}'</script>`)

        }
      })
    }
    else {
      Teacher.findOne({
        mobile: body.mobile
      }).then(result => {
        if (result) {
          if (result.password == body.password) {
            console.log(req.session);

            req.session.mobile = result.mobile;
            req.session.username = result.username;
            req.session.password = body.password;
            req.session.toggle0 = body.toggle0;
            req.session.toggle1 = body.toggle1;
            req.session.tno = result.tno;
            res.send(`<script>alert('登录成功,即将跳转首页!');location.href='/home'</script>`)

          }
          else {
            res.send(`<script>alert('账号密码不匹配,请立即登录!');location.href='/login?mobile=${aesEncrypt(body.mobile, keys)}'</script>`)

          }
        }
        else {
          res.send(`<script>alert('账号不存在,请重新登录!');location.href='/login?mobile=${aesEncrypt(body.mobile, keys)}'</script>`)

        }
      })
    }

  }
  else {
    res.send(`<script>alert("请阅读公司保密条例协议!");location.href='/login?mobile=${aesEncrypt(body.mobile, keys)}'</script>`)
  }


})

module.exports = router;
