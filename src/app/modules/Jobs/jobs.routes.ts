import { Router } from "express";
import { jobController } from "./jobs.controller";

const router = Router();

router.get("/:id", jobController.getJobById);
router.get("/", jobController.getAllJobs);
router.post("/", jobController.createJob);
router.delete("/:id", jobController.deleteJob);

export const jobsRoutes = router;
