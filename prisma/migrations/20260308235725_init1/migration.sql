/*
  Warnings:

  - A unique constraint covering the columns `[job_id]` on the table `applications` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "applications_job_id_key" ON "applications"("job_id");
