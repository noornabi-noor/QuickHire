import express, { application, Request, Response } from "express";
import cors from "cors";
import { applicationsRoutes } from "./app/modules/Applications/Applications.routes";
import { jobsRoutes } from "./app/modules/Jobs/jobs.routes";
import { globalErrorHandler } from "./app/middleware/globalErrorHandler";
import { notFound } from "./app/middleware/notFound";

const app = express();
app.use(express.json());

app.use("/api/applications", applicationsRoutes);
app.use("/api/jobs", jobsRoutes);

app.get("", (req: Request, res: Response) => {
  res.send("Hello world!");
});

app.use(globalErrorHandler);
app.use(notFound);

export default app;