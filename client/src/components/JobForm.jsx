// src/components/JobForm.jsx
import { useState } from "react";
import api from "../api";

const JobForm = ({ onJobAdded }) => {
    const [formData, setFormData] = useState({
        company: "",
        role: "",
        status: "Applied",
        applicationDate: "",
        link: "",
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const res = await api.post("/jobs", formData);
            onJobAdded(res.data); // Notify parent
            setFormData({
                company: "",
                role: "",
                status: "Applied",
                applicationDate: "",
                link: "",
            });
        } catch (err) {
            console.error("Error adding job:", err);
        }
    };

    return (
        <form onSubmit={handleSubmit} className="bg-white p-4 rounded shadow-md mb-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <input
                    type="text"
                    name="company"
                    placeholder="Company"
                    value={formData.company}
                    onChange={handleChange}
                    required
                    className="p-2 border rounded"
                />
                <input
                    type="text"
                    name="role"
                    placeholder="Role"
                    value={formData.role}
                    onChange={handleChange}
                    required
                    className="p-2 border rounded"
                />
                <select
                    name="status"
                    value={formData.status}
                    onChange={handleChange}
                    className="p-2 border rounded"
                >
                    <option value="Applied">Applied</option>
                    <option value="Interview">Interview</option>
                    <option value="Offer">Offer</option>
                    <option value="Rejected">Rejected</option>
                </select>
                <input
                    type="date"
                    name="applicationDate"
                    value={formData.applicationDate}
                    onChange={handleChange}
                    required
                    className="p-2 border rounded"
                />
                <input
                    type="url"
                    name="link"
                    placeholder="Job Link"
                    value={formData.link}
                    onChange={handleChange}
                    className="p-2 border rounded col-span-full"
                />
            </div>
            <button
                type="submit"
                className="mt-4 bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
            >
                Add Job
            </button>
        </form>
    );
};

export default JobForm;
