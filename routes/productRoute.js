const { makeActive, addp } = require("../controlers/productControler");
const { activeProduct } = require("../controlers/productControler");
const {

  allProduct,
  singleProduct,

  deleteProduct,
} = require("../controlers/productControler");
const multiUpload = require("../middleware/addSingleImage");
const ProductValidation = require("../middleware/productvalidation");

const router = require("express").Router();



router.post("/post-product",addp)
router.get("/all-product", allProduct);

router.get("/singleProduct/:id", singleProduct);
router.put("/make-active", makeActive);


router.get("/active-product", activeProduct);

router.delete("/delete-product/:id", deleteProduct);

router.get("/", (req, res) => {
  res.send('cors problem:)');
});

module.exports = router;
