// src/App.jsx
import JobForm from "./components/JobForm";
import JobList from "./components/JobList";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <>
      <div className="p-4 max-w-4xl mx-auto px-4">
        <h1 className="text-3xl font-bold text-center text-blue-700 mb-6">
          🎯 Student Job Tracker
        </h1>
        <JobForm />
        <hr className="my-6" />
        <JobList />
      </div>
      <ToastContainer position="top-right" autoClose={2000} />
    </>
  );
}

export default App;
