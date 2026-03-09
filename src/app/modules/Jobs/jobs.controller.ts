import { Request, Response } from "express";
import { jobService } from "./jobs.services";

const createJob = async (req: Request, res: Response) => {
  try {
    const jobData = req.body;
    const result = await jobService.createJob(jobData);
    res.status(201).json(result);
  } catch (error: any) {
    res.status(400).json({ error: error.message });
  }
};

const getAllJobs = async (req: Request, res: Response) => {
  try {
    const jobs = await jobService.getAllJobs();
    res.status(200).json(jobs);
  } catch (error: any) {
    res.status(500).json({ error: error.message });
  }
};

const getJobById = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const job = await jobService.getJobById(id as string);
    res.status(200).json(job);
  } catch (error: any) {
    res.status(404).json({ error: error.message });
  }
};

const deleteJob = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const deletedJob = await jobService.deleteJob(id as string);
    res.status(200).json(deletedJob);
  } catch (error: any) {
    res.status(404).json({ error: error.message });
  }
};

export const jobController = {
  createJob,
  getAllJobs,
  getJobById,
  deleteJob,
};
