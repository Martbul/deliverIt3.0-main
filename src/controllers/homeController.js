const router = require("express").Router();
const orderService = require("../services/orderService");

router.get("/", (req, res) => {
  res.render("index");
});

router.get("/order", (req, res) => {
  res.render("order");
});

router.get("/beADeliver", (req, res) => {
  res.render("beADeliver");
});

router.get("/learnMore", (req, res) => {
  res.render("learnMore");
});

router.get("/binds", async (req, res) => {
  const { search, from, to } = req.query;
  const orders = await orderService.getAll(search, from, to);

  res.render("binds", { orders, search, from, to });
});

router.get("/about", (req, res) => {
  res.render("about");
});

router.get("/singup", (req, res) => {
  res.render("singup");
});

router.get("/login", (req, res) => {
  res.render("login");
});
// router.get("/order", (req, res) => {
//   const { search, from, to } = req.query;
//   const cubes = cubeService.getAll(search, from, to);
//   res.render("order", { cubes, search, from, to });

// });

router.get("/404", (req, res) => {
  res.render("404");
});

module.exports = router;
