// src/components/JobForm.jsx
import { useState } from "react";
import api from "../api";
import { toast } from "react-toastify";

const JobForm = () => {
  const [form, setForm] = useState({
    company: "",
    role: "",
    status: "Applied",
    applicationDate: "",
    link: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await api.post("/jobs", form);
      toast.success("Job added successfully!");
      setTimeout(() => {
        window.location.reload();
      }, 2000); // Reload after 2 seconds
    } catch (err) {
      console.error(err);
      toast.error("Failed to add job");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4 bg-white p-4 shadow rounded">
      <input type="text" name="company" placeholder="Company" required
        className="w-full p-2 border rounded"
        value={form.company} onChange={handleChange}
      />
      <input type="text" name="role" placeholder="Role" required
        className="w-full p-2 border rounded"
        value={form.role} onChange={handleChange}
      />
      <select name="status" value={form.status} onChange={handleChange}
        className="w-full p-2 border rounded"
      >
        <option>Applied</option>
        <option>Interview</option>
        <option>Offer</option>
        <option>Rejected</option>
      </select>
      <input type="date" name="applicationDate" required
        className="w-full p-2 border rounded"
        value={form.applicationDate} onChange={handleChange}
      />
      <input type="url" name="link" placeholder="Job Link"
        className="w-full p-2 border rounded"
        value={form.link} onChange={handleChange}
      />
      <button type="submit"
        className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition"
      >
        Add Job
      </button>
    </form>
  );
};

export default JobForm;
