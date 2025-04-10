// src/components/JobCard.jsx
import api from "../api";
import { toast } from "react-toastify";

const JobCard = ({ job, onUpdate, onDelete }) => {
  const handleStatusChange = async (e) => {
    try {
      const res = await api.put(`/jobs/${job._id}`, {
        status: e.target.value,
      });
      onUpdate(res.data);
    } catch (err) {
      console.error(err);
      toast.error("Failed to update status");
    }
  };

  const handleDelete = async () => {
    try {
      await api.delete(`/jobs/${job._id}`);
      onDelete(job._id);
    } catch (err) {
      console.error(err);
      toast.error("Failed to delete job");
    }
  };

  return (
    <div className="border rounded p-4 shadow-md bg-white space-y-2">
      <h2 className="text-xl font-semibold">{job.company}</h2>
      <p className="text-gray-600">{job.role}</p>
      <a
        href={job.link}
        className="text-blue-500 underline"
        target="_blank"
        rel="noopener noreferrer"
      >
        Job Link
      </a>
      <p className="text-sm text-gray-500">
        Applied on:{" "}
        {new Date(job.applicationDate).toLocaleDateString("en-IN")}
      </p>

      <select
        value={job.status}
        onChange={handleStatusChange}
        className="p-2 border rounded w-full"
      >
        <option>Applied</option>
        <option>Interview</option>
        <option>Offer</option>
        <option>Rejected</option>
      </select>

      <button
        onClick={handleDelete}
        className="w-full bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600 transition"
      >
        Delete
      </button>
    </div>
  );
};

export default JobCard;
