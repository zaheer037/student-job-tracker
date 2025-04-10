// src/components/JobCard.jsx
import api from "../api";

const JobCard = ({ job, onUpdate, onDelete }) => {
    const handleStatusChange = async (e) => {
        try {
            const updated = await api.put(`/jobs/${job._id}`, { status: e.target.value });
            onUpdate(updated.data);
        } catch (err) {
            console.error("Error updating status:", err);
        }
    };

    const handleDelete = async () => {
        try {
            await api.delete(`/jobs/${job._id}`);
            onDelete(job._id);
        } catch (err) {
            console.error("Error deleting job:", err);
        }
    };

    return (
        <div className="bg-white p-4 rounded shadow-md flex flex-col gap-2 border">
            <h3 className="text-xl font-semibold">{job.company}</h3>
            <p><strong>Role:</strong> {job.role}</p>
            <p><strong>Date:</strong> {new Date(job.applicationDate).toLocaleDateString()}</p>
            <a href={job.link} className="text-blue-500 underline" target="_blank" rel="noreferrer">Job Link</a>
            <div className="flex items-center justify-between mt-2">
                <select
                    value={job.status}
                    onChange={handleStatusChange}
                    className="p-1 border rounded"
                >
                    <option value="Applied">Applied</option>
                    <option value="Interview">Interview</option>
                    <option value="Offer">Offer</option>
                    <option value="Rejected">Rejected</option>
                </select>
                <button
                    onClick={handleDelete}
                    className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600"
                >
                    Delete
                </button>
            </div>
        </div>
    );
};

export default JobCard;
