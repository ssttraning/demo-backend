const express = require('express');
const db=require('../Database/db');
const router = express.Router();


router.post('/',(req,res)=>{
    const name = req.body.name;
    const email = req.body.email;
    const course = req.body.course;
    const sql ="insert into tbl_student(student_name,student_email,course) values(?,?,?)";
    db.query(sql,[name,email,course],(err,result)=>{
        if(err)
        {
            console.log(err)
        return res.status(500).send("Failed to insert student");
        }
        else{
            res.send('student inserted')
        }
    })
})

module.exports = router;