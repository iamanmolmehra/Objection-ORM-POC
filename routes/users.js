var express = require('express');
const router = express.Router();
const UserService = require('../service/user');
const service = new UserService();

router.get("/homepage", (req, res) => {
    console.log({"success": "welcome on the home page!"});
    res.send({"success": "welcome on the home page!"});
});

router.post("/signup", async (req, res) => {
    console.log(req.body);
    service.create(req.body).then((data) => {
        console.log({"success": "signup successfully"});
        res.send({"success": "signup successfully"});
    }).catch((error) => {
        res.send(error);
    })
});

router.get("/getAll", (req, res) => {
    service.findAll().then((data) => {
        res.send(data);
    }).catch((error) => {
        res.send(error);
    })
})

router.get("/:id", (req, res) => {
    const userId = req.params.id;
    service.findById(userId).then((data) => {
        res.send(data);
    }).catch((error) => {
        res.send(error);
    })
})

router.delete("/:id", (req, res) => {
    const userDel = req.params.id;
    service.deleteById(userDel).then((data) => {
        res.send(data);
    }).catch((error) => {
        res.send(error);
    })
})

router.put("/:id", (req, res) => {
    const userup = req.params.id;
    service.updateById(userup, req.body).then((data) => {
        res.send(data);
    }).catch((error) => {
        res.send(error);
    })
})

router.post("/:id/login", (req, res) => {
    const userId = req.params.id;
    service.findById(userId).then((data) => {
        res.send(data);
    }).catch((error) => {
        res.send(error);
    })
})

module.exports = router;