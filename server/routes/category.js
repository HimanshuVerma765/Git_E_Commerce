const { Category } = require('../models/category');
const express = require('express');
const router = express.Router();



router.get('/', async(req, res)=>{
    const categoryList = await Category.find();

    if (!categoryList){
        return res.status(500).json({success: false});
    }
    res.send(categoryList);
});

router.post('/create', async(req,res)=>{
    const limit = pLimit(2);

    
})

module.exports = router;