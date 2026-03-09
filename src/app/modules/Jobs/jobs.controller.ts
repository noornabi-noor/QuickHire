import { Request, Response } from "express";
import { jobService } from "./jobs.services";
import { catchAsync } from "../../shared/catchAsync";
import { sendResponse } from "../../shared/sendResponse";

const createJob = catchAsync(async (req: Request, res: Response) => {
  const jobData = req.body;
  const result = await jobService.createJob(jobData);

  sendResponse(res, {
    httpStatusCode: 201,
    success: true,
    message: "Job created successfully",
    data: result,
  });
});

const getAllJobs = catchAsync(async (req: Request, res: Response) => {
  const jobs = await jobService.getAllJobs();

  sendResponse(res, {
    httpStatusCode: 200,
    success: true,
    message: "Jobs retrieved successfully",
    data: jobs,
  });
});

const getJobById = catchAsync(async (req: Request, res: Response) => {
  const { id } = req.params;
  const job = await jobService.getJobById(id as string);

  sendResponse(res, {
    httpStatusCode: 200,
    success: true,
    message: "Job retrieved successfully",
    data: job,
  });
});

const deleteJob = catchAsync(async (req: Request, res: Response) => {
  const { id } = req.params;
  const deletedJob = await jobService.deleteJob(id as string);

  sendResponse(res, {
    httpStatusCode: 200,
    success: true,
    message: "Job deleted successfully",
    data: deletedJob,
  });
});

export const jobController = {
  createJob,
  getAllJobs,
  getJobById,
  deleteJob,
};
