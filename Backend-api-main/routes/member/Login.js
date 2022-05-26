const express = require('express');
const router = express.Router();
const multer = require('multer');
const db = require('../../modules/mysql_config');
const upload = multer();
require("dotenv").config();


router.get('/checkName',async (req,res,next)=>{
  // const sql = `SELECT Count(*) as total FROM members WHERE member_account=?`
  const sql = `SELECT Count(*) as total FROM members WHERE member_account=?`
  const [datas] = await db.query(sql,[req.query.member_account]);
  res.json(datas[0]);
})
router.post('/LoginTF',async (req,res,next)=>{
  const sql = `SELECT Count(*) as total FROM members WHERE member_account=? and member_password=?`
  const [data] =  await db.query(sql,[req.query.member_account,req.query.member_password]);
  console.log(data);
  res.json(data[0]);
})

router.post('/Login',async (req,res,next)=>{
  console.log(req.query.member_account);
  const sql = `SELECT * FROM members WHERE member_account=? and member_password=?`
  const [data] =  await db.query(sql,[req.query.member_account,req.query.member_password]);
  console.log(data)
  res.json(data[0]);
})


module.exports = router;