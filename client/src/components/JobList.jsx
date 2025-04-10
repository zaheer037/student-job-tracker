// src/components/JobList.jsx
import { useEffect, useState } from "react";
import api from "../api";
import JobCard from "./JobCard";
import { toast } from "react-toastify";

const JobList = () => {
  const [jobs, setJobs] = useState([]);
  const [filteredJobs, setFilteredJobs] = useState([]);
  const [statusFilter, setStatusFilter] = useState("All");
  const [dateFilter, setDateFilter] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchJobs();
  }, []);

  useEffect(() => {
    applyFilters();
  }, [jobs, statusFilter, dateFilter]);

  const fetchJobs = async () => {
    try {
      setLoading(true);
      const res = await api.get("/jobs");
      setJobs(res.data.reverse());
    } catch (err) {
      console.error("Fetch failed", err);
      toast.error("Failed to load jobs");
    } finally {
      setLoading(false);
    }
  };

  const handleUpdate = (updatedJob) => {
    toast.success("Status updated!");
    setJobs((prev) =>
      prev.map((job) => (job._id === updatedJob._id ? updatedJob : job))
    );
  };

  const handleDelete = (id) => {
    toast.success("Job deleted!");
    setJobs((prev) => prev.filter((job) => job._id !== id));
  };

  const applyFilters = () => {
    let temp = [...jobs];
    if (statusFilter !== "All") {
      temp = temp.filter((job) => job.status === statusFilter);
    }
    if (dateFilter) {
      temp = temp.filter(
        (job) =>
          new Date(job.applicationDate).toISOString().split("T")[0] ===
          dateFilter
      );
    }
    setFilteredJobs(temp);
  };

  return (
    <div className="space-y-6">
      {/* Filters */}
      <div className="flex flex-col sm:flex-row items-center gap-4">
        <select
          value={statusFilter}
          onChange={(e) => setStatusFilter(e.target.value)}
          className="p-2 border rounded"
        >
          <option value="All">All Status</option>
          <option value="Applied">Applied</option>
          <option value="Interview">Interview</option>
          <option value="Offer">Offer</option>
          <option value="Rejected">Rejected</option>
        </select>

        <input
          type="date"
          value={dateFilter}
          onChange={(e) => setDateFilter(e.target.value)}
          className="p-2 border rounded"
        />

        <button
          onClick={() => {
            setStatusFilter("All");
            setDateFilter("");
          }}
          className="px-3 py-2 bg-gray-200 hover:bg-gray-300 rounded"
        >
          Reset Filters
        </button>
      </div>

      {/* Job Cards */}
      {loading ? (
        <div className="text-center py-8">
          <div className="animate-spin rounded-full h-10 w-10 border-b-2 border-gray-900 mx-auto"></div>
          <p className="mt-2 text-gray-500">Loading jobs...</p>
        </div>
      ) : (
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {filteredJobs.length > 0 ? (
            filteredJobs.map((job) => (
              <JobCard
                key={job._id}
                job={job}
                onUpdate={handleUpdate}
                onDelete={handleDelete}
              />
            ))
          ) : (
            <p className="text-gray-500">No jobs match the selected filters.</p>
          )}
        </div>
      )}
    </div>
  );
};

export default JobList;
