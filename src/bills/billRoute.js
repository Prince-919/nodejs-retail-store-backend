const { chargeBill, getAllBills } = require("./billController");

const router = require("express").Router();

router.post("/charge", chargeBill);
router.get("/get-all", getAllBills);

module.exports = router;
