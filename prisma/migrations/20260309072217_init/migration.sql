/*
  Warnings:

  - You are about to drop the column `user_id` on the `jobs` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE "jobs" DROP CONSTRAINT "jobs_user_id_fkey";

-- AlterTable
ALTER TABLE "jobs" DROP COLUMN "user_id";
