var express = require("express");
var router = express.Router();

const { Student, Teacher, Uid, Class, Tlist } = require("../utils/schema");

router.get("/", (req, res) => {
    res.render("teacher");
})

router.get("/addclass", (req, res) => {
    Class.find({}, {}).then(classList => {
        Tlist.findOne({
            tno: req.session.tno
        }).then(obj => {
            res.render("tea_class", {
                classList,
                obj,
                username: req.session.username,
                sno: req.session.sno,
                tno: req.session.tno
            })
        })
    })

})

module.exports = router;