import express from "express";

const app = express();
const PORT = process.env.PORT || 5000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const cart = new Map(); // Dummy storage for cart | contains product name and price

app.get("/", (req, res) => {
  res.send("Welcome to Express App build with Optimized Docker");
});

app.post("/product/add", (req, res) => {
  const { product, price } = req.body;

  if ((!product, !price))
    return res.status(400).json({ messsage: "Product and price is required" });

  cart.set(product, price);
  res.status(200).json({
    message: "Product is successfully added to cart",
    product: {
      product_name: product,
      product_price: price,
    },
  });
});

app.get("/products", (req, res) => {
  const allProducts = Array.from(cart);
  res
    .status(200)
    .json({ message: "See all products in your cart", allProducts });
});

app.get("/product/:name", (req, res) => {
  const { name } = req.params;

  if (!name)
    return res.status(400).json({ message: "Product name is required!" });

  if (!cart.has(name))
    return res.status(404).json({ message: "Product not fount in your cart" });

  const product = cart.get(name);
  res.status(200).json({ message: "Product found!", product });
});

app.delete("/delete/:name", (req, res) => {
  const { name } = req.params;

  if (cart.delete(name))
    res.json({ message: `Product ${name} deleted successfully` });
  else res.status(404).json({ error: "product not found" });
});

app.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`);
});
