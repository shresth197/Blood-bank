const adminMiddleware = require("../middlewares/adminMiddleware");
const authMiddelware = require("../middlewares/authMiddelware");
const userModel = require("../models/userModel");

//GET DONOR LIST
const getDonorsListController = async (req, res) => {
  try {
    const donorData = await userModel
      .find({
        role: "donor",
      })
      .sort({ createdAt: -1 });

    return res.status(200).send({
      success: true,
      Totalcount: donorData.length,
      message: "Donor List Fetched Successfully",
      donorData,
    });
  } catch (error) {
    return res.status(500).send({
      success: false,
      message: "Error In Donor List API",
      error,
    });
  }
};

//GET HOSPITAL LIST
const getHospitalListController = async (req, res) => {
  try {
    const hospitalData = await userModel
      .find({
        role: "hospital",
      })
      .sort({ createdAt: -1 });

    return res.status(200).send({
      success: true,
      Totalcount: hospitalData.length,
      message: "HOSPITAL List Fetched Successfully",
      hospitalData,
    });
  } catch (error) {
    return res.status(500).send({
      success: false,
      message: "Error In Hospital List API",
      error,
    });
  }
};

//GET ORG LIST
const getOrgListController = async (req, res) => {
  try {
    const orgData = await userModel
      .find({
        role: "organisation",
      })
      .sort({ createdAt: -1 });

    return res.status(200).send({
      success: true,
      Totalcount: orgData.orglength,
      message: "ORG List Fetched Successfully",
      orgData,
    });
  } catch (error) {
    return res.status(500).send({
      success: false,
      message: "Error In Org List API",
      error,
    });
  }
};
//*********************** */

//DELETE DONOR

const deleteDonorController = async (req, res) => {
  try {
    await userModel.findByIdAndDelete(req.params.id);
    return res.status(200).send({
      success: true,
      message: "Donor Record Deleted Successfully",
    });
  } catch (error) {
    console.log(error);
    return res.status(500).send({
      success: false,
      message: "Error while deleting donor",
      error,
    });
  }
};

//DELETE HOSPITAL

const deleteHospitalController = async (req, res) => {
  try {
    await userModel.findByIdAndDelete(req.params.id);
    return res.status(200).send({
      success: true,
      message: "Donor Record Deleted Successfully",
    });
  } catch (error) {
    console.log(error);
    return res.status(500).send({
      success: false,
      message: "Error while deleting donor",
      error,
    });
  }
};

//DELETE ORG

const deleteOrgController = async (req, res) => {
  try {
    await userModel.findByIdAndDelete(req.params.id);
    return res.status(200).send({
      success: true,
      message: "Donor Record Deleted Successfully",
    });
  } catch (error) {
    console.log(error);
    return res.status(500).send({
      success: false,
      message: "Error while deleting donor",
      error,
    });
  }
};

//EXPORT

module.exports = {
  getDonorsListController,
  getHospitalListController,
  getOrgListController,
  deleteDonorController,
  deleteHospitalController,
  deleteOrgController,
};
