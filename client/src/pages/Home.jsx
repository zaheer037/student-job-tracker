// src/pages/Home.jsx
import { useState } from "react";
import JobForm from "../components/JobForm";
import JobList from "../components/JobList";

const Home = () => {
  const [newJob, setNewJob] = useState(null);

  const handleJobAdded = (job) => {
    setNewJob(job);
  };

  return (
    <div className="mt-4">
      <JobForm onJobAdded={handleJobAdded} />
      <JobList newJob={newJob} />
    </div>
  );
};

export default Home;
