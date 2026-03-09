import { Request, Response } from "express";
import { applicationService } from "./Applications.services";
import { sendResponse } from "../../shared/sendResponse";
import { catchAsync } from "../../shared/catchAsync";

const submitApplication = catchAsync(async (req: Request, res: Response) => {
  const { jobId } = req.params;
  const applicationData = req.body;
  const application = await applicationService.submitApplication(
    jobId as string,
    applicationData,
  );

  sendResponse(res, {
    httpStatusCode: 201,
    success: true,
    message: "Folder created successfully",
    data: application,
  });
});

export const applicationController = {
  submitApplication,
};
