const Item = require("./itemModel");

async function getAllItems(req, res) {
  try {
    const items = await Item.find();
    res.send(items);
  } catch (error) {
    res.status(500).josn(error);
  }
}

async function addItem(req, res) {
  try {
    const item = new Item(req.body);
    await item.save();
    res.send("Item added successfully");
  } catch (error) {
    res.status(500).josn(error);
  }
}

async function updateItem(req, res) {
  try {
    await Item.findOneAndUpdate({ _id: req.body.itemId }, req.body);
    res.send("Item updated successfully");
  } catch (error) {
    res.status(500).josn(error);
  }
}
async function deleteItem(req, res) {
  try {
    await Item.findOneAndDelete({ _id: req.body.itemId });
    res.send("Item deleted successfully");
  } catch (error) {
    res.status(500).json(error);
  }
}

module.exports = {
  getAllItems,
  addItem,
  updateItem,
  deleteItem,
};
