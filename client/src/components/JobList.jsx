// src/components/JobList.jsx
import { useEffect, useState } from "react";
import api from "../api";
import JobCard from "./JobCard";

const JobList = ({ newJob }) => {
    const [jobs, setJobs] = useState([]);
    const [filteredJobs, setFilteredJobs] = useState([]);
    const [statusFilter, setStatusFilter] = useState("All");
    const [dateFilter, setDateFilter] = useState("");

    useEffect(() => {
        fetchJobs();
    }, []);

    useEffect(() => {
        if (newJob) {
            setJobs((prev) => [newJob, ...prev]);
        }
    }, [newJob]);

    useEffect(() => {
        applyFilters();
    }, [jobs, statusFilter, dateFilter]);

    const fetchJobs = async () => {
        try {
            const res = await api.get("/jobs");
            setJobs(res.data.reverse()); // latest first
        } catch (err) {
            console.error("Error fetching jobs:", err);
        }
    };

    const handleUpdate = (updatedJob) => {
        setJobs((prev) =>
            prev.map((job) => (job._id === updatedJob._id ? updatedJob : job))
        );
    };

    const handleDelete = (id) => {
        setJobs((prev) => prev.filter((job) => job._id !== id));
    };

    const applyFilters = () => {
        let temp = [...jobs];

        if (statusFilter !== "All") {
            temp = temp.filter((job) => job.status === statusFilter);
        }

        if (dateFilter) {
            temp = temp.filter((job) => {
                const jobDate = new Date(job.applicationDate).toISOString().split("T")[0];
                return jobDate === dateFilter;
            });
        }


        setFilteredJobs(temp);
    };

    return (
        <div className="space-y-6">
            {/* 🔍 Filters */}
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

            {/* 📋 Job Cards */}
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
        </div>
    );
};

export default JobList;
