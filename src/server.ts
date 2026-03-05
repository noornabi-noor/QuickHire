import app from "./app";

const port = process.env.PORT || 5000;

const main = () => {
  try {
    console.log("Connected to the database successfully!");

    app.listen(port, () => {
      console.log(`Server is running on http://localhost:${port}`);
    });
  } catch (error) {
    console.error("An error occured", error);
    process.exit(1);
  }
};
