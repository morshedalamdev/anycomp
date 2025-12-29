import express from "express";
import {
  createSpecialist,
  deleteSpecialist,
  getAllSpecialists,
  getSpecialistById,
  getSpecialistList,
  updateDraftToPublished,
  updateSpecialist,
} from "../controllers/specialistController";
const router = express.Router();

// Create Specialist
router.post("/", createSpecialist);
// Get All Specialists Data
router.get("/", getAllSpecialists);
// Get Specialists Data without Media
router.get("/list", getSpecialistList);
// Get Single Specialist Data by ID
router.get("/:id", getSpecialistById);
// Update Draft Specialist to Published by ID
router.put("/:id/publish", updateDraftToPublished);
// Update Single Specialist Data by ID
router.put("/:id", updateSpecialist);
// Delete Single Specialist Data by ID
router.delete("/:id", deleteSpecialist);

export default router;
