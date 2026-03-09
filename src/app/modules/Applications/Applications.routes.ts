import { Router } from "express";
import { applicationController } from "./Applications.controller";

const router = Router();

router.post("/", applicationController.submitApplication); 

export const applicationsRoutes = router;