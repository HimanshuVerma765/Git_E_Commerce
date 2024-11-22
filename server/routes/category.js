const { Category } = require("../models/category");
const express = require("express");
const router = express.Router();

const cloudinary = require("cloudinary").v2;
const pLimit = require("p-limit");

cloudinary.config({
  cloud_name: process.env.cloudinary_Config_Cloud_Name,
  api_key: process.env.cloudinary_Config_api_Key,
  api_secret: process.env.cloudinary_Config_api_Secret,
});

router.get("/", async (req, res) => {
  const categoryList = await Category.find();

  if (!categoryList) {
    return res.status(500).json({ success: false });
  }
  res.send(categoryList);
});

router.get("/:id", async (req, res) => {
  const category = await Category.findById(req.params.id);
  if (!category) {
    return res.status(404).json({
      message: "the category at given id is not found",
      success: false,
    });
  }
  res.status(200).send(category);
});

router.post("/create", async (req, res) => {
    try {
        const limit = pLimit(2);
        const imagesToUpload = req.body.images.map((image) => {
            return limit(async () => {
                const result = await cloudinary.uploader.upload(image);
                return result;
            });
        });
        const uploadStatus = await Promise.all(imagesToUpload);

        const imgurl = uploadStatus.map((item) => {
            return item.secure_url;
        });

        let category = new Category({
            name: req.body.name,
            color: req.body.color,
            images: imgurl,
        });

        category = await category.save();
        res.status(201).json(category);
    } catch (error) {
        console.error('Error creating category:', error);
        res.status(500).json({
            error: 'Failed to create category',
            success: false,
        });
    }
});


router.delete("/:id", async (req, res) => {
  const deletedUser = await Category.findByIdAndDelete(req.params.id);
  if (!deletedUser) {
    return res.status(404).json({
      error: "category not found",
      success: false,
    });
  }
  res.status(200).json({
    id: deletedUser,
    success: true,
    message: " Category Deleted",
  });
});
router.put("/:id", async (req, res) => {
    try {
        // Validate the request body (optional but recommended)
        if (!req.body || Object.keys(req.body).length === 0) {
            return res.status(400).json({
                error: 'Request body cannot be empty',
                success: false
            });
        }

        // Find and update the category
        const category = await Category.findByIdAndUpdate(req.params.id, req.body, { new: true });

        // Check if the category was found and updated
        if (!category) {
            return res.status(404).json({
                error: 'Category not found',
                success: false
            });
        }

        // Return the updated category
        res.status(200).json(category);
    } catch (error) {
        console.error('Error updating category:', error);
        res.status(500).json({
            error: 'Failed to update category',
            success: false
        });
    }
});



module.exports = router;
