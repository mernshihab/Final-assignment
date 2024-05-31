const express = require("express");
const router = express.Router();
const { brands } = require("../controllers/BrandContrller");
const { categories } = require("../controllers/CategoryController");
const { productSliders } = require("../controllers/ProductSliderController");
const {
  productsByBrand,
  productsByCategory,
  similarProducts,
  productsByKeyword,
  productsByRemark,
} = require("../controllers/ProductController");
const { productDetail } = require("../controllers/ProductDetailController");
const { reviews } = require("../controllers/ReviewController");
const { sendOTP, verifyOTP, logout } = require("../controllers/UserController");
const AuthMiddleware = require("../middlewares/AuthMiddleware");
const {
  createProfile,
  readProfile,
  updateProfile,
} = require("../controllers/ProfileController");
const {
  saveWish,
  readWishes,
  removeWish,
} = require("../controllers/WishController");
const {
  createCart,
  readCarts,
  removeCart,
} = require("../controllers/CartController");



router.get("/ProductBrandList", brands);
router.get("/ProductCategoryList", categories);
router.get("/ProductSliderList", productSliders);

router.get("/ProductListByBrand/:BrandID", productsByBrand);
router.get("/ProductListByCategory/:CategoryID", productsByCategory);
router.get("/ProductListBySimilar/:CategoryID", similarProducts);
router.get("/ProductListByKeyword/:Keyword", productsByKeyword);
router.get("/ProductListByRemark/:Remark", productsByRemark);

router.get("/ProductDetails/:ProductID", productDetail);
router.get("/ProductReviewList/:ProductID", reviews);



router.get("/UserOTP/:email", sendOTP);
router.get("/VerifyLogin/:email/:otp", verifyOTP);
router.get("/UserLogout", AuthMiddleware, logout);
router.post("/CreateProfile", AuthMiddleware, createProfile);
router.post("/UpdateProfile", AuthMiddleware, updateProfile);
router.get("/ReadProfile", AuthMiddleware, readProfile);


router.post("/SaveWishList", AuthMiddleware, saveWish);
router.post("/RemoveWishList", AuthMiddleware, removeWish);
router.get("/WishList", AuthMiddleware, readWishes);



router.post("/SaveCartList", AuthMiddleware, createCart);
router.post("/RemoveCartList", AuthMiddleware, removeCart);
router.get("/CartList", AuthMiddleware, readCarts);


module.exports = router;
