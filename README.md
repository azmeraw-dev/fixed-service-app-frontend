# Ethio Telecom Fixed Service App (Full-Stack)

A **full-stack web application** for simplifying **fixed service delivery** at Ethio Telecom.  
It connects **customers, technicians, and sales teams** on one digital platform — reducing multiple office visits and making service requests **faster, easier, and transparent**.  

---

## 🌐 Features

### 👨‍💼 Customers
- Register and **submit new service requests** (Fixed Line, Internet, Other).  
- **Track service requests** in real-time using request ID.  
- View assigned technician and current status.  
- Make **online payments** (Telebirr integration planned).  

### 🔧 Technicians
- View **assigned customer requests**.  
- Update request status: **Pending → Assigned → Completed → Activated**.  
- Confirm service installation.  

### 💼 Sales Team
- View all customer requests.  
- **Assign technicians** to new service requests.  
- Monitor progress and update customers.  

### 🌍 General
- **Role-based dashboards** (Customer, Technician, Sales).  
- **Authentication & Authorization** (JWT).  
- **Responsive UI** styled with Ethio Telecom standards.  
- **Notification system (future)** via SMS/email.  

---

## ⚙️ Tech Stack

### Frontend
- **React.js** (UI framework)  
- **Tailwind CSS** (Styling, Ethio Telecom theme)  
- **React Router** (Navigation)  
- **Context API** (State management)  

### Backend
- **Node.js + Express.js** (Server)  
- **MongoDB / PostgreSQL** (Database for requests, users, payments)  
- **JWT Authentication** (Secure login for customers, sales, technicians)  

### Others
- **Payment Gateway:** Telebirr API (planned)  
- **Deployment:** Netlify/Vercel (Frontend), AWS/Azure/Heroku (Backend)  

---



