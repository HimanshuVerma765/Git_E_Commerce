const { Category } = require('../models/category');
const express = require('express');
const router = express.Router();

const cloudinary = require('cloudinary').v2;
const pLimit = require('p-limit');

cloudinary.config({
    cloud_name: process.env.cloudinary_Config_Cloud_Name,
    api_key: process.env.cloudinary_Config_api_Key,
    api_secret: process.env.cloudinary_Config_api_Secret
});


router.get('/', async(req, res)=>{
    const categoryList = await Category.find();

    if (!categoryList){
        return res.status(500).json({success: false});
    }
    res.send(categoryList);
});

router.post('/create', async(req,res)=>{
    const limit = pLimit(2);
    const imagesToUpload = req.body.images.map((image)=>{
        return limit(async()=>{
            const result = await cloudinary.uploader.upload(image);
         //   console.log(`successful uploaded ${image}`);
         //   console.log(`> result: ${result.secure_url}`);
         return result;
        })
    })
    const uploadStatus = await Promise.all(imagesToUpload);

    const imgurl = uploadStatus.map((item)=>{
        return item.secure_url;
    })

    if(!uploadStatus){
        return res.status(500).json({
            error: "images cannot uploaded",
            success: false
        });
    }

    let category = new Category({
        name: req.body.name,
        color: req.body.color,
        images: imgurl,
    });

    if(!category){
        return res.status(500).json({
            error: "category cannot created",
            success: false
            });
    }

    category = await category.save();
    res.status(201).json(category);
})

module.exports = router;