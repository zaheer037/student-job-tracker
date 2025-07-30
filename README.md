
# 🎓 Student Job Tracker

A full-stack MERN web application that helps students efficiently manage and track their job applications — from applied to offer!

> 🚀 Live Demo: [Student Job Tracker (Vercel)](https://student-job-tracker-psi.vercel.app/)

> 🔗 Backend API: [MERN Backend (Render)](https://mern-ta-cuvette.onrender.com)

---

## 📸 Preview

<!-- Replace below image with your actual screenshot -->
![App Screenshot](./client/src/assets/app_preview.png)

<!-- You can also include a GIF below if needed -->
<!-- ![Demo GIF](./screenshots/demo.gif) -->

---

## 🧑‍💻 Built By

**Zaheer**, MERN Stack Developer  
👨‍🎓 Pursuing professional training at Chalapathi Institute of Engineering and Technology  

---

## 🛠️ Tech Stack

**Frontend:**
- React.js (with Hooks)
- Tailwind CSS
- Axios
- React Toastify

**Backend:**
- Node.js
- Express.js
- MongoDB (MongoDB Atlas)

**Deployment:**
- Frontend: Vercel
- Backend: Render

---

## ✨ Features

✅ **Add New Job Application**  
- Fields: Company, Role, Status, Date, and Job Link

✅ **List All Applications**  
- Responsive, clean layout to view all job entries

✅ **Filter Applications**  
- Filter by Status (`Applied`, `Interview`, `Offer`, `Rejected`)  
- Filter by Date of Application

✅ **Update Application Status**  
- Modify the status of any job (e.g., from Applied → Interview)

✅ **Delete Application**  
- Permanently remove a job record

✅ **User Feedback & UX**  
- Real-time Toast notifications (success, error)  
- Loading spinners for smoother user experience  
- Tailwind-powered UI for a clean and modern look

---

## 📦 API Endpoints

**Base URL:** `https://mern-ta-cuvette.onrender.com`

| Method | Endpoint          | Description                  |
|--------|-------------------|------------------------------|
| POST   | `/api/jobs`       | Add new job application      |
| GET    | `/api/jobs`       | Get all job applications     |
| PUT  | `/api/jobs/:id`   | Update job status            |
| DELETE | `/api/jobs/:id`   | Delete a job application     |

---

## 🚀 Getting Started (Local Development)

1. **Clone the repo:**

```bash
git clone https://github.com/zaheer037/student-job-tracker.git
```

2. **Frontend Setup:**

```bash
cd frontend
npm install
npm run dev
```

3. **Backend Setup:**

```bash
cd backend
npm install
npm run dev
```

4. **.env File (Backend):**

```env
PORT=5000
MONGO_URI=your_mongo_connection_string
```

---

## 📂 Folder Structure

```
student-job-tracker/
├── server/
  ├── controllers/
  │   └── jobController.js
  ├── models/
  │   └── Job.js
  ├── routes/
  │   └── jobRoutes.js
  ├── config/
  │   └── db.js
  ├── .env
  ├── server.js
  ├── package.json

├── client/
  ├── public/
  ├── src/
  │   ├── components/
  │   │   ├── JobForm.jsx
  │   │   ├── JobList.jsx
  │   │   └── JobCard.jsx
  │   ├── api.js
  │   ├── App.jsx
  │   └── main.jsx
  ├── .env
  ├── package.json
```

---

## 💡 Future Improvements

- [ ] Add user authentication (JWT)
- [ ] Export job data to CSV
- [ ] Add custom reminders for follow-ups
- [ ] Dark mode toggle

---

## 🙌 Acknowledgements

- Designed and developed as a self intrest
- Inspired by real-world job tracking challenges faced by students

---

> If you liked this project, feel free to ⭐ the repo or reach out for collaboration!
