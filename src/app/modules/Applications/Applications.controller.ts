import { Request, Response } from "express";
import { applicationService } from "./Applications.services";

const submitApplication = async (req: Request, res: Response) => {
  try {
    const { jobId } = req.params;
    const applicationData = req.body;
    const application = await applicationService.submitApplication(
      jobId as string,
      applicationData,
    );
    res.status(201).json(application);
  } catch (error: any) {
    res.status(400).json({ error: error.message });
  }
};

export const applicationController = {
  submitApplication,
};
