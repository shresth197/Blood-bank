const express = require("express");
const authMiddelware = require("../middlewares/authMiddelware");
const {
  getDonorsListController,
  getHospitalListController,
  getOrgListController,
  deleteDonorController,
  deleteHospitalController,
  deleteOrgController,
} = require("../controllers/adminController");
const adminMiddleware = require("../middlewares/adminMiddleware");

//router object
const router = express.Router();

//Routes
//GET|| DONOR LIST
router.get(
  "/donor-list",
  authMiddelware,
  adminMiddleware,
  getDonorsListController
);

//GET|| HOSPITAL LIST
router.get(
  "/hospital-list",
  authMiddelware,
  adminMiddleware,
  getHospitalListController
);

//GET|| ORG LIST
router.get("/org-list", authMiddelware, adminMiddleware, getOrgListController);
//************* */

//DELET DONOR || GET
router.delete(
  "/delete-donor/:id",
  authMiddelware,
  adminMiddleware,
  deleteDonorController
);

//DELET HOSPITAL || GET
router.delete(
  "/delete-hospital/:id",
  authMiddelware,
  adminMiddleware,
  deleteHospitalController
);

//DELET HOSPITAL || GET
router.delete(
  "/delete-org/:id",
  authMiddelware,
  adminMiddleware,
  deleteOrgController
);

//EXPORT
module.exports = router;
