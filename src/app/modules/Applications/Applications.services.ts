import { prisma } from "../../../lib/prisma";
import { IApplication } from "./Applications.interface";

const submitApplication = async (
  jobId: string,
  applicationData: IApplication,
) => {
  const existingJob = await prisma.job.findUnique({
    where: { id: jobId },
  });

  if (!existingJob) {
    throw new Error("Job not found");
  }

  const application = await prisma.application.create({
    data: {
      jobId,
      ...applicationData,
    },
  });
  return application;
};

export const applicationService = {
  submitApplication,
};
