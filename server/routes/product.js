const { Category } = require("../models/category");
const express = require("express");
const router = express.Router();
const { Product } = require("../models/product");

const cloudinary = require("cloudinary").v2;
const pLimit = require("p-limit");

router.get("/", async (req, res) => {
  const productList = await Product.find().populate("category");

  if (!productList) {
    return res.status(404).json({
      message: "No products found",
      success: false,
    });
  }
  res.send(productList);
});
router.post("/create", async (req, res) => {
  try {
    const category = await Category.findById(req.body.category);
    if (!category) {
      return res.status(404).json({
        message: "Category not found",
        success: false,
      });
    }

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

    if (!uploadStatus) {
      return res.status(404).json({
        message: "Failed to upload images",
        success: false,
      });
    }

    let product = new Product({
      name: req.body.name,
      discription: req.body.discription,
      price: req.body.price,
      images: imgurl,
      category: req.body.category,
      brand: req.body.brand,
      countInStock: req.body.countInStock,
      rating: req.body.rating,
      numReviews: req.body.numReviews,
      isFeatures: req.body.isFeatured,
    });

    await product.save();

    if (!product) {
      return res.status(404).json({
        message: "Product not created",
        success: false,
      });
    }

    res.status(201).json(product);
  } catch (error) {
    console.error("Error in product creation:", error);
    return res.status(500).json({
      message: "Error creating product",
      error: error.message,
      success: false,
    });
  }
});

router.delete("/:id", async (req, res) => {
  try {
    const product = await Product.findByIdAndDelete(req.params.id);
    if (!product) {
      return res.status(404).json({
        message: "Product not found",
        success: false,
      });
    }
    res.status(200).json({
      message: "Product deleted",
      success: true,
    });
  } catch (error) {
    console.error("Error in product deletion:", error);
    return res.status(500).json({
      message: "Error deleting product",
      error: error.message,
    });
  }
});

router.get("/:id", async (req, res) => {
  try {
    const product = await Product.findById(req.params.id);
    if (!product) {
      return res.status(404).json({
        message: "Product not found",
        success: false,
      });
    }
    res.status(200).json(product);
  } catch (error) {
    console.error("Error in product retrieval:", error);
    return res.status(500).json({
      message: "Error retrieving product",
      error: error.message,
    });
  }
});
router.put("/:id", async (req, res) => {
    try {
      const limit = pLimit(2);
      const imagesToUpload = req.body.images.map((image) => {
        return limit(async () => {
          try {
            const result = await cloudinary.uploader.upload(image);
            return result; // Return the upload result
          } catch (uploadError) {
            console.error("Image upload failed:", uploadError);
            return null; // Return null for failed uploads
          }
        });
      });
  
      const uploadStatus = await Promise.all(imagesToUpload);
      const imgurl = uploadStatus
        .filter(item => item !== null) // Filter out any failed uploads
        .map(item => item.secure_url);
  
      // Check if any images were uploaded successfully
      if (imgurl.length === 0) {
        return res.status(400).json({
          message: "Failed to upload images",
          success: false,
        });
      }
  
      // Update the product
      const product = await Product.findByIdAndUpdate(
        req.params.id,
        {
          name: req.body.name,
          description: req.body.description, // Corrected spelling from 'discription'
          price: req.body.price,
          images: imgurl,
          category: req.body.category,
          brand: req.body.brand,
          countInStock: req.body.countInStock,
          rating: req.body.rating,
          numReviews: req.body.numReviews,
          isFeatured: req.body.isFeatured, // Corrected spelling from 'isFeatures'
        },
        { new: true }
      );
  
      if (!product) {
        return res.status(404).json({
          message: "Product not found",
          success: false,
        });
      }
  
      res.status(200).json({
        data: product,
        message: "Product updated",
        success: true,
      });
    } catch (error) {
      console.error("Error in product update:", error);
      return res.status(500).json({
        message: "Error updating product",
        error: error.message,
      });
    }
  });
module.exports = router;
