# 🎓 Vidyapeeth Institute of Technology — College Website

A fully functional college management website built with **Node.js**, **Express**, and **MongoDB**.

---

## 📦 Tech Stack

| Layer      | Technology                        |
|------------|-----------------------------------|
| Runtime    | Node.js                           |
| Framework  | Express.js                        |
| Database   | MongoDB (via Mongoose ODM)        |
| Templating | EJS (Embedded JavaScript)         |
| Styling    | Custom CSS (no frameworks)        |

---

## 🚀 Quick Start

### Prerequisites
- Node.js v18+ installed
- MongoDB running locally (`mongod`) **or** MongoDB Compass connected

### 1. Install Dependencies
```bash
npm install
```

### 2. Configure Environment
Edit `.env` to match your MongoDB connection:
```
PORT=3000
MONGODB_URI=mongodb://localhost:27017/collegeDB
SESSION_SECRET=your_secret_here
```

### 3. Start the Server
```bash
node app.js
```

The app will **auto-seed sample data** on first run if the database is empty.

### 4. Open in Browser
```
http://localhost:3000
```

---

## 📁 Project Structure

```
college-website/
├── app.js                  # Entry point, Express + MongoDB setup
├── seed.js                 # Sample data seeder
├── .env                    # Environment variables
├── models/
│   └── index.js            # All Mongoose models
├── routes/
│   └── index.js            # All routes (web + API)
├── views/
│   ├── partials/
│   │   ├── header.ejs
│   │   └── footer.ejs
│   ├── home.ejs
│   ├── error.ejs
│   ├── students/           # index.ejs, form.ejs
│   ├── courses/            # index.ejs, form.ejs
│   ├── faculty/            # index.ejs, form.ejs
│   ├── events/             # index.ejs, form.ejs
│   └── notices/            # index.ejs, form.ejs
└── public/
    ├── css/style.css
    └── js/main.js
```

---

## 🗄️ MongoDB Collections

| Collection | Fields |
|------------|--------|
| **students** | name, rollNo, email, department, year, phone, gpa, status |
| **courses**  | title, code, department, credits, instructor, schedule, room |
| **faculty**  | name, employeeId, email, department, designation, qualification |
| **events**   | title, description, date, venue, organizer, category |
| **notices**  | title, content, category, important, postedBy, postedAt |

---

## 🌐 Routes

| Method | Path | Description |
|--------|------|-------------|
| GET | `/` | Home page with stats |
| GET/POST | `/students` | List & create students |
| GET/PUT/DELETE | `/students/:id` | Edit & delete students |
| GET/POST | `/courses` | List & create courses |
| GET/PUT/DELETE | `/courses/:id` | Edit & delete courses |
| GET/POST | `/faculty` | List & create faculty |
| GET/PUT/DELETE | `/faculty/:id` | Edit & delete faculty |
| GET/POST | `/events` | List & create events |
| GET/POST | `/notices` | List & create notices |
| GET | `/api/stats` | JSON stats endpoint |

---

## 🔌 Using MongoDB Compass

1. Open MongoDB Compass
2. Connect to: `mongodb://localhost:27017`
3. Select database: `collegeDB`
4. Browse collections: students, courses, faculty, events, notices
