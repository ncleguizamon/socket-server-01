"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const router = express_1.Router();
router.get('/mensages', (req, res) => {
    res.json({
        ok: true,
        mesaje: 'Todo esta Bien !!'
    });
});
exports.default = router;
