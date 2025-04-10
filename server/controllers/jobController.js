import Job from "../models/Job.js";

// @desc Get all job applications
export const getJobs = async (req, res) => {
  const jobs = await Job.find().sort({ createdAt: -1 });
  res.json(jobs);
  // res.send("Backend is working!");
};

// @desc Create new job application
export const addJob = async (req, res) => {
  const { company, role, status, applicationDate, link } = req.body;
  try {
    const job = new Job({ company, role, status, applicationDate, link });
    await job.save();
    res.status(201).json(job);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// @desc Update job status
export const updateJob = async (req, res) => {
  const { id } = req.params;
  const { status } = req.body;
  try {
    const job = await Job.findByIdAndUpdate(id, { status }, { new: true });
    res.json(job);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// @desc Delete a job
export const deleteJob = async (req, res) => {
  const { id } = req.params;
  try {
    await Job.findByIdAndDelete(id);
    res.json({ message: "Job deleted successfully" });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};
