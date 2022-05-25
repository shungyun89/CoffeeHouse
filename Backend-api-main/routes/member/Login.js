const express = require('express');
const router = express.Router();
const multer = require('multer');
const db = require('../../modules/mysql_config');
const upload = multer();
require("dotenv").config();


router.get('/checkName',async (req,res,next)=>{
  const sql = `SELECT Count(*) as total FROM members WHERE member_account=?`
  const [datas] = await db.query(sql,[req.query.member_account]);
  res.json(datas[0]);
})
router.get('/Login',async (req,res,next)=>{
  console.log(req.query.member_account);

  const acs=req.query.member_account.indexOf("?");
  const member_account=req.query.member_account.slice(0,acs)

  const pwS=req.query.member_account.indexOf("=");
  const member_password=req.query.member_account.slice(pwS+1,)
  
  console.log(member_account);
  console.log(member_password);
  const sql = `SELECT Count(*) as total FROM members WHERE member_account=? and member_password=?`
  req.query.member_account.indexOf("=")
  // console.log(req.query.member_password);
  const [aaa] = await db.query(sql,[member_account,member_password]);
  res.json(aaa[0]);
})


module.exports = router;