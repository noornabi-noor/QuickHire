import { prisma } from "../../../lib/prisma";
import { IJob } from "./jobs.interface";

const createJob = async (jobData: IJob) => {
  const newJob = await prisma.job.create({
    data: jobData,
  });
  return newJob;
};

const getAllJobs = async () => {
  const jobs = await prisma.job.findMany();
  return jobs;
};

const getJobById = async (jobId: string) => {
  const job = await prisma.job.findUnique({
    where: { id: jobId },
  });
  if (!job) {
    throw new Error("Job not found");
  }
  return job;
};

const deleteJob = async (jobId: string) => {
  const deletedJob = await prisma.job.delete({
    where: { id: jobId },
  });
  return deletedJob;
};

export const jobService = {
  createJob,
  getAllJobs,
  getJobById,
  deleteJob,
};
