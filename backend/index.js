require("dotenv").config();
const port = 4000;
const express = require("express");
const app = express();
const mongoose = require("mongoose");
const jwt = require("jsonwebtoken");
const multer = require("multer");
const path = require("path");
const cors = require("cors");

app.use(express.json());
app.use(cors());

// Database connection with MongoDB
mongoose.connect(process.env.CONNECTION_STRING);

// API Creation
app.get("/", (req, res) => {
  res.send("Express App is running");
});

// Image Storage Engine
const storage = multer.diskStorage({
  destination: "./upload/images/",
  filename: (req, file, cb) => {
    return cb(
      null,
      `${file.fieldname}_${Date.now()}${path.extname(file.originalname)}`
    );
  },
});

const upload = multer({ storage: storage });

// Creating Upload Endpoint for image
app.use("/images", express.static("upload/images"));
app.post("/upload", upload.single("product"), (req, res) => {
  res.json({
    success: 1,
    image_url: `http:localhost:${port}/images/${req.file.filename}`,
  });
});

// schema creating for user model
const Users = mongoose.model("users", {
  name: {
    type: String,
  },
  email: {
    type: String,
    unique: true,
  },
  password: {
    type: String,
  },
  cartData: {
    type: Object,
  },
  date: {
    type: Date,
    default: Date.now,
  },
});

// Creating Endpoint for Registrating User
app.post("/signup", async (req, res) => {
  let check = await Users.findOne({ email: req.body.email });
  if (check) {
    return res
      .status(400)
      .json({ success: false, errors: "existing user found with same email" });
  }
  let cart = {};
  for (let i = 0; i < 300; i++) {
    cart[i] = 0;
  }
  const user = new Users({
    name: req.body.username,
    email: req.body.email,
    password: req.body.password,
    cartData: cart,
  });
  await user.save();

  const data = {
    user: {
      id: user.id,
    },
  };
  const token = jwt.sign(data, "serect_ecom");
  res.json({ success: true, token });
});

// Creating Endpoint for Login User
app.post("/login", async (req, res) => {
  let user = await Users.findOne({ email: req.body.email });
  if (user) {
    const passCompare = req.body.password === user.password;
    if (passCompare) {
      const data = {
        user: {
          id: user.id,
        },
      };
      const token = jwt.sign(data, "serect_ecom");
      res.json({ success: true, token });
    } else {
      res.json({ success: false, errors: "Wrong Password" });
    }
  } else {
    res.json({ success: false, errors: "Wrong Email Id" });
  }
});

// Schema for creating products
const Product = mongoose.model("Product", {
  id: {
    type: Number,
    unique: true,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  image: {
    type: String,
    required: true,
  },
  author: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  age: {
    type: String,
    required: true,
  },
  topic: {
    type: String,
    required: true,
  },
  language: {
    type: String,
    required: true,
  },
  new_price: {
    type: Number,
    required: true,
  },
  old_price: {
    type: Number,
    required: true,
  },
  date: {
    type: Date,
    default: Date.now,
  },
});

// Save product to database
app.post("/addproduct", async (req, res) => {
  let products = await Product.find({});
  let id;
  if (products.length > 0) {
    let last_product_array = products.slice(-1);
    let last_product = last_product_array[0];
    id = last_product.id + 1;
  } else {
    id = 1;
  }
  const product = new Product({
    id: id,
    name: req.body.name,
    image: req.body.image,
    author: req.body.author,
    description: req.body.description,
    age: req.body.age,
    topic: req.body.topic,
    language: req.body.language,
    new_price: req.body.new_price,
    old_price: req.body.old_price,
  });
  console.log(product);
  await product.save();
  console.log("Product saved");
  res.json({
    success: 1,
    name: req.body.name,
  });
});

// Save multiple products to database
app.post("/addproducts", async (req, res) => {
  try {
    let products = await Product.find({});
    let lastProductId =
      products.length > 0 ? products[products.length - 1].id : 0;

    // req.body.products should be an array of products
    const newProducts = req.body.products.map((product, index) => ({
      id: lastProductId + 1 + index,
      name: product.name,
      image: product.image,
      author: product.author,
      description: product.description,
      age: product.age,
      topic: product.topic,
      language: product.language,
      new_price: product.new_price,
      old_price: product.old_price,
    }));

    const savedProducts = await Product.insertMany(newProducts);

    console.log("Products saved", savedProducts);
    res.json({
      success: 1,
      message: `${savedProducts.length} products added successfully`,
      products: savedProducts,
    });
  } catch (error) {
    console.error("Error saving products:", error);
    res.status(500).json({
      success: 0,
      message: "Error saving products",
      error: error.message,
    });
  }
});

// Creating API for deleting product
app.post("/removeproduct", async (req, res) => {
  await Product.findOneAndDelete({ id: req.body.id });
  console.log("Product deleted");
  res.json({
    success: true,
    name: req.body.name,
  });
});

// Creating API for getting all products
app.get("/allproducts", async (req, res) => {
  let products = await Product.find({});
  console.log("All products fetched");
  res.send(products);
});

// API for getting a single product by ID
app.get("/product/:id", async (req, res) => {
  try {
    const productId = req.params.id;
    let product = await Product.findOne({ id: productId });
    if (product) {
      console.log(`Product with ID ${productId} fetched`);
      res.send(product);
    } else {
      res.status(404).send("Product not found");
    }
  } catch (error) {
    console.error(error);
    res.status(500).send("Server Error");
  }
});

// Creating endpoint for newcollection  data
app.get("/newcollections", async (req, res) => {
  let products = await Product.find({});
  let newcollection = products.slice(1).slice(-8);
  console.log("New collection fetched");
  res.send(newcollection);
});

// Creating endpoint for popular products
app.get("/popularproducts", async (req, res) => {
  let products = await Product.find({});
  let popular_products = products.slice(0, 4);
  console.log("Popular products fetched");
  res.send(popular_products);
});

// Creating middleware to fetch user
const fetchUser = async (req, res, next) => {
  const token = req.header("auth-token");
  if (!token) {
    res
      .status(401)
      .send({ errors: "Please authenticate using a valid token." });
  } else {
    try {
      const data = jwt.verify(token, "serect_ecom");
      req.user = data.user;
      next();
    } catch (error) {
      res
        .status(401)
        .send({ errors: "Please authenticate using a valid token." });
    }
  }
};

// Creating endpoint for adding product to cart
app.post("/addtocart", async (req, res) => {
  console.log("Add", req.body.itemId);
  let userData = await Users.findOne({ _id: req.user.id });
  userData.cartData[req.body.itemId] += 1;
  await Users.findOneAndUpdate(
    { _id: req.user.id },
    { cartData: userData.cartData }
  );
  res.send("Product added to cart");
});

// Creating endpoint for removing product from cart
app.post("/removefromcart", fetchUser, async (req, res) => {
  console.log("Remove", req.body.itemId);
  let userData = await Users.findOne({ _id: req.user.id });
  if (userData.cartData[req.body.itemId] > 0)
    userData.cartData[req.body.itemId] -= 1;
  await Users.findOneAndUpdate(
    { _id: req.user.id },
    { cartData: userData.cartData }
  );
  res.send("Product removed to cart");
});

// Creating endpoint for getting user cart data
app.post("/getcart", fetchUser, async (req, res) => {
  console.log("Getcart");
  let userData = await Users.findOne({ _id: req.user.id });
  res.json(userData.cartData);
});

app.listen(port, (error) => {
  if (!error) {
    console.log("Server is running on port:", port);
  } else {
    console.log("Error:", error);
  }
});
