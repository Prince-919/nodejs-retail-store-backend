const router = require("express").Router();

const {
  getAllItems,
  addItem,
  updateItem,
  deleteItem,
} = require("./itemsController");

router.get("/get-all", getAllItems);
router.post("/add", addItem);
router.put("/update", updateItem);
router.post("/delete", deleteItem);

module.exports = router;
