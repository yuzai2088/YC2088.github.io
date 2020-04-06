var express = require('express');
var router = express.Router();

const { keys, aesDecrypt } = require("../utils");
var { Msg } = require('../utils/schema')

/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get("/home", (req, res) => {
  console.log(req.session);
  res.render("home", {
    title: "员工管理系统",
    username: req.session.username,
    mobile: req.session.mobile,
    toggle0: req.session.toggle0,
    toggle1: req.session.toggle1,
    sno: req.session.sno,
    tno: req.session.tno
  });
})

router.get("/login", (req, res) => {
  var query = req.query;
  console.log(query);
  var mobile = query.mobile ? aesDecrypt(query.mobile, keys) : "";
  res.render("login", {
    mobile,
    username: req.session.username,
    sno: req.session.sno,
    tno: req.session.tno
  });
})

router.get("/logout", (req, res) => {
  req.session.destroy(() => {
    res.redirect("/home");
  })
})

router.get("/regist", (req, res) => {
  res.render("regist", {
    username: req.session.username,
    sno: req.session.sno,
    tno: req.session.tno
  });
})

router.get("/detail", (req, res) => {
  const query = req.query;
  console.log('query', query)

  if (req.session.username) {

    Msg.find(query).then(result => {
      res.render("detail", {
        username: req.session.username,
        mobile: req.session.mobile,
        sno: req.session.sno,
        tno: req.session.tno,
        result
      })

    })

  }
})

router.get("/student", (req, res) => {

  const query = req.query;
  console.log('query', query)
  var sortobj = {};
  var searchObj = {};
  var delobj = {}
  if (query['keyword']) {
    var keyword = query['keyword']
    searchObj = {
      $or: [
        {
          name: new RegExp(keyword)
        },
        {
          sex: new RegExp(keyword)
        },
        {
          section: new RegExp(keyword)
        }
      ]
    }
  } else if (query['name']) {
    delobj = query;
    console.log(delobj)
    Msg.findOneAndRemove(delobj).then(result => {
      console.log(result)
      res.send(`<script>alert('删除成功！.');location.href='/student'</script>`)
    })
  } else {
    sortobj = query;
    console.log('sortobj', sortobj)

  }

  if (req.session.username) {

    Msg.find(searchObj, {}).sort(sortobj).then(result => {
      res.render("student", {
        username: req.session.username,
        mobile: req.session.mobile,
        sno: req.session.sno,
        tno: req.session.tno,
        result
      });
    });
  } else {
    res.send(`<script>alert('登录session已经失效,请重新登录.');location.href='/login'</script>`)
  }
})



router.get("/teacher", (req, res) => {
  res.render("teacher", {
    username: req.session.username,
    mobile: req.session.mobile,
    sno: req.session.sno,
    tno: req.session.tno
  });
})

router.get("/list/:uid", (req, res) => {
  res.json({
    code: 200,
    msg: "获取列表list成功!",
    result: [],
    headers: req.headers,
    params: req.params
  })
})

router.post("/postsome", (req, res) => {
  res.json({
    code: 200,
    msg: "这是一个post请求!",
    body: req.body,
    query: req.query
  })
})

router.all("/allmethods", (req, res) => {
  res.send("这是post和get都可以响应的!")
})



module.exports = router;

// Msg.insertMany(
//   [
//     {
//         "job":"11111",
//         "section":"技术部",
//         "name": "张三",
//         "sex": "男",
//         "age":"18"
//     },
//     {
//         "job":"22222",
//         "section":"技术部",
//         "name": "张思",
//         "sex": "女",
//         "age":"18"
//     },
//     {
//         "job":"33333",
//         "section":"制造部",
//         "name": "李四",
//         "sex": "男",
//         "age":"22"
//     },
//     {
//         "job":"44444",
//         "section":"制造部",
//         "name": "老王",
//         "sex": "男",
//         "age":"33"
//     },
//     {
//         "job":"66666",
//         "section":"后勤部",
//         "name": "小花",
//         "sex": "女",
//         "age":"23"
//     },
//     {
//         "job":"99999",
//         "section":"后勤部",
//         "name": "小芳",
//         "sex": "女",
//         "age":"18"
//     },
//     {
//         "job":"25793",
//         "section":"技术部",
//         "name": "小于",
//         "sex": "男",
//         "age":"25"
//     },
//     {
//         "job":"23456",
//         "section":"制造部",
//         "name": "王五",
//         "sex": "男",
//         "age":"18"
//     },
//     {
//         "job":"77777",
//         "section":"研发科",
//         "name": "小徐",
//         "sex": "男",
//         "age":20
//     },
//     {
//         "job":"34567",
//         "section":"研发科",
//         "name": "小余",
//         "sex": "男",
//         "age":"22"
//     },
//     {
//         "job":"10000",
//         "section":"总部",
//         "name": "小余",
//         "sex": "男",
//         "age":"22"
//     },
//     {
//         "job":"10001",
//         "section":"助理",
//         "name": "小江",
//         "sex": "女",
//         "age":"22"
//     },
//     {
//         "job":"10002",
//         "section":"经理",
//         "name": "小李",
//         "sex": "男",
//         "age":"21"
//     },
//     {
//         "job":"10003",
//         "section":"秘书",
//         "name": "小阮",
//         "sex": "女",
//         "age":"24"
//     },
//     {
//         "job":"10004",
//         "section":"保镖",
//         "name": "小伟",
//         "sex": "男",
//         "age":"20"
//     }

// ]
// ).then(result=>{
//   console.log(result)
// })