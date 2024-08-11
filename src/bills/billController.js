const Bill = require("./billModel");

async function chargeBill(req, res) {
  try {
    const bill = new Bill(req.body);
    await bill.save();
    res.send("Bill charged successfully");
  } catch (error) {
    res.status(500).json(error);
  }
}
async function getAllBills(req, res) {
  try {
    const bills = await Bill.find();
    res.send(bills);
  } catch (error) {
    res.status(500).json(error);
  }
}
module.exports = { chargeBill, getAllBills };
