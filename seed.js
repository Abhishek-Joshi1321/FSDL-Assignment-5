const mongoose = require('mongoose');
const { Student, Course, Faculty, Event, Notice } = require('./models');

const MONGODB_URI = process.env.MONGODB_URI || 'mongodb://localhost:27017/collegeDB';

const seedData = async () => {
  await mongoose.connect(MONGODB_URI);
  console.log('Connected to MongoDB for seeding...');

  // Clear existing data
  await Promise.all([
    Student.deleteMany({}),
    Course.deleteMany({}),
    Faculty.deleteMany({}),
    Event.deleteMany({}),
    Notice.deleteMany({})
  ]);

  // Seed Students
  await Student.insertMany([
    { name: 'Aryan Sharma', rollNo: 'CS2021001', email: 'aryan@college.edu', department: 'Computer Science', year: 3, phone: '9876543210', gpa: 8.9, status: 'active' },
    { name: 'Priya Patel', rollNo: 'EC2021002', email: 'priya@college.edu', department: 'Electronics', year: 3, phone: '9876543211', gpa: 9.2, status: 'active' },
    { name: 'Rohit Mehta', rollNo: 'ME2022001', email: 'rohit@college.edu', department: 'Mechanical', year: 2, phone: '9876543212', gpa: 7.8, status: 'active' },
    { name: 'Sneha Joshi', rollNo: 'CS2022002', email: 'sneha@college.edu', department: 'Computer Science', year: 2, phone: '9876543213', gpa: 8.5, status: 'active' },
    { name: 'Vikram Singh', rollNo: 'CE2021003', email: 'vikram@college.edu', department: 'Civil Engineering', year: 3, phone: '9876543214', gpa: 7.5, status: 'active' },
    { name: 'Ananya Desai', rollNo: 'CS2023001', email: 'ananya@college.edu', department: 'Computer Science', year: 1, phone: '9876543215', gpa: 9.1, status: 'active' },
    { name: 'Karan Verma', rollNo: 'EC2022003', email: 'karan@college.edu', department: 'Electronics', year: 2, phone: '9876543216', gpa: 8.0, status: 'active' },
    { name: 'Meera Nair', rollNo: 'ME2021004', email: 'meera@college.edu', department: 'Mechanical', year: 3, phone: '9876543217', gpa: 8.7, status: 'active' },
  ]);

  // Seed Courses
  await Course.insertMany([
    { title: 'Data Structures & Algorithms', code: 'CS301', department: 'Computer Science', credits: 4, instructor: 'Dr. Rajesh Kumar', description: 'Fundamental data structures and algorithmic techniques', maxStudents: 60, schedule: 'Mon/Wed/Fri 9:00 AM', room: 'CS-101', semester: 'Odd 2024' },
    { title: 'Database Management Systems', code: 'CS302', department: 'Computer Science', credits: 4, instructor: 'Dr. Preethi Rao', description: 'Relational and NoSQL database concepts', maxStudents: 55, schedule: 'Tue/Thu 10:30 AM', room: 'CS-102', semester: 'Odd 2024' },
    { title: 'Digital Electronics', code: 'EC301', department: 'Electronics', credits: 3, instructor: 'Dr. Suresh Iyer', description: 'Logic gates, combinational and sequential circuits', maxStudents: 50, schedule: 'Mon/Wed 11:00 AM', room: 'EC-201', semester: 'Odd 2024' },
    { title: 'Thermodynamics', code: 'ME301', department: 'Mechanical', credits: 4, instructor: 'Dr. Anand Gupta', description: 'Laws of thermodynamics and heat transfer', maxStudents: 60, schedule: 'Tue/Thu/Sat 8:00 AM', room: 'ME-101', semester: 'Odd 2024' },
    { title: 'Structural Analysis', code: 'CE301', department: 'Civil Engineering', credits: 4, instructor: 'Dr. Kavitha Reddy', description: 'Analysis of beams, trusses and frames', maxStudents: 45, schedule: 'Mon/Wed/Fri 2:00 PM', room: 'CE-101', semester: 'Odd 2024' },
    { title: 'Machine Learning', code: 'CS401', department: 'Computer Science', credits: 4, instructor: 'Dr. Neha Bhat', description: 'Supervised, unsupervised learning and neural networks', maxStudents: 40, schedule: 'Tue/Thu 3:00 PM', room: 'CS-Lab1', semester: 'Odd 2024' },
    { title: 'Web Development', code: 'CS303', department: 'Computer Science', credits: 3, instructor: 'Prof. Arun Pillai', description: 'Full stack web development with modern frameworks', maxStudents: 50, schedule: 'Fri 1:00 PM', room: 'CS-Lab2', semester: 'Odd 2024' },
    { title: 'VLSI Design', code: 'EC401', department: 'Electronics', credits: 3, instructor: 'Dr. Ramesh Babu', description: 'Very large scale integration design techniques', maxStudents: 35, schedule: 'Mon/Fri 4:00 PM', room: 'EC-Lab', semester: 'Odd 2024' },
  ]);

  // Seed Faculty
  await Faculty.insertMany([
    { name: 'Dr. Rajesh Kumar', employeeId: 'FAC001', email: 'r.kumar@college.edu', department: 'Computer Science', designation: 'Professor', qualification: 'Ph.D. IIT Bombay', experience: 18, phone: '9988776655', specialization: 'Algorithms & AI' },
    { name: 'Dr. Preethi Rao', employeeId: 'FAC002', email: 'p.rao@college.edu', department: 'Computer Science', designation: 'Associate Professor', qualification: 'Ph.D. NIT Trichy', experience: 12, phone: '9988776656', specialization: 'Databases & Big Data' },
    { name: 'Dr. Suresh Iyer', employeeId: 'FAC003', email: 's.iyer@college.edu', department: 'Electronics', designation: 'Professor', qualification: 'Ph.D. IIT Madras', experience: 20, phone: '9988776657', specialization: 'Embedded Systems' },
    { name: 'Dr. Anand Gupta', employeeId: 'FAC004', email: 'a.gupta@college.edu', department: 'Mechanical', designation: 'Professor', qualification: 'Ph.D. IIT Delhi', experience: 15, phone: '9988776658', specialization: 'Thermal Engineering' },
    { name: 'Dr. Kavitha Reddy', employeeId: 'FAC005', email: 'k.reddy@college.edu', department: 'Civil Engineering', designation: 'Associate Professor', qualification: 'Ph.D. BITS Pilani', experience: 10, phone: '9988776659', specialization: 'Structural Engineering' },
    { name: 'Dr. Neha Bhat', employeeId: 'FAC006', email: 'n.bhat@college.edu', department: 'Computer Science', designation: 'Assistant Professor', qualification: 'Ph.D. IISc Bangalore', experience: 6, phone: '9988776660', specialization: 'Machine Learning' },
  ]);

  // Seed Events
  const now = new Date();
  await Event.insertMany([
    { title: 'Annual Tech Fest - TechNova 2024', description: 'Three-day mega technical festival featuring hackathons, coding contests, robotics, and keynote speeches by industry leaders.', date: new Date(now.getFullYear(), now.getMonth() + 1, 15), venue: 'Main Auditorium & Sports Complex', organizer: 'Student Technical Council', category: 'technical' },
    { title: 'Cultural Night - Rang Utsav', description: 'A spectacular evening of music, dance, drama and art performances by students from all departments.', date: new Date(now.getFullYear(), now.getMonth() + 1, 22), venue: 'Open Air Theatre', organizer: 'Cultural Committee', category: 'cultural' },
    { title: 'Industry-Academia Conclave', description: 'Interaction session with top industry professionals, panel discussions on emerging technologies and career guidance.', date: new Date(now.getFullYear(), now.getMonth(), 28), venue: 'Seminar Hall A', organizer: 'Placement Cell', category: 'academic' },
    { title: 'Sports Week 2024', description: 'Inter-department sports competition covering cricket, football, basketball, athletics and indoor games.', date: new Date(now.getFullYear(), now.getMonth() + 2, 5), venue: 'Sports Ground & Gymnasium', organizer: 'Sports Committee', category: 'sports' },
    { title: 'Freshers Orientation Program', description: 'Welcome program for newly admitted students with campus tour, department introductions and mentorship assignments.', date: new Date(now.getFullYear(), now.getMonth(), 20), venue: 'College Auditorium', organizer: 'Dean of Students', category: 'academic' },
  ]);

  // Seed Notices
  await Notice.insertMany([
    { title: 'End Semester Examination Schedule - Nov 2024', content: 'The end semester examinations for all programmes will commence from November 18, 2024. Students are advised to check the detailed timetable on the examination portal. Hall tickets can be downloaded from the student portal from November 10 onwards.', category: 'exam', important: true, postedBy: 'Examination Controller' },
    { title: 'Placement Drive - Infosys & TCS', content: 'Infosys and TCS will be conducting campus placements on October 25-26, 2024. All final year B.Tech students with CGPA above 6.5 are eligible to apply. Register on the placement portal before October 15, 2024.', category: 'placement', important: true, postedBy: 'Placement Cell' },
    { title: 'Library Working Hours Extended', content: 'The central library will remain open 24 hours during the examination period (November 10 - December 5). Students must carry their ID cards for access during night hours.', category: 'general', important: false, postedBy: 'Library Administration' },
    { title: 'Fee Payment Deadline - Odd Semester 2024', content: 'The last date for fee payment for the Odd Semester 2024 is October 31, 2024. Students who fail to pay by this date will be charged a late fee of Rs. 500 per week. Online payment is available through the student portal.', category: 'academic', important: true, postedBy: 'Finance Office' },
    { title: 'New Elective Courses Added for Even Semester', content: 'Five new elective courses have been added for the Even Semester 2025: Cloud Computing, Cyber Security, Blockchain Technology, IoT Applications, and Quantum Computing. Registration opens November 20, 2024.', category: 'academic', important: false, postedBy: 'Academic Office' },
  ]);

  console.log('✅ Database seeded successfully!');
  await mongoose.disconnect();
};

module.exports = seedData;
