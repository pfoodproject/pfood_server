const express = require('express');
const router = express.Router();
const dbs = require('../../utils/dbs');
const { check, validationResult } = require('express-validator');
/* Authentication */
router.use(async (req, res, next) => {
    try {
        let header = req.headers && req.headers.authorization, matches = header ? /^Bearer (\S+)$/.exec(header) : null, token = matches && matches[1]        
        if (!token) return res.status(403).send({ msg: 'Xác thực không thành công. Vui lòng đăng nhập lại!' })
        jwt.verify(token, config.secret, (err, decoded) => {
            if (err) return res.status(403).send({ msg: 'Hết phiên làm việc. Vui lòng đăng nhập lại!' })
            return next();
        })
    }
    catch (err) {
        next(err)
    }
});

/* */
router.get('/', (req, res) => {
});

module.exports = router;
