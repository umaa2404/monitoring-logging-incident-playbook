# 📊 Monitoring, Logging & Incident Playbook

## 📌 Project Overview

This project demonstrates how to implement basic monitoring, logging, and incident response for a Node.js application using modern DevOps tools.

The application exposes Prometheus metrics, collects HTTP request logs using Morgan, visualizes metrics in Grafana, and includes an Incident Response Playbook for handling common production issues.

---

## 🎯 Project Objectives

- Monitor application performance using Prometheus.
- Visualize metrics using Grafana dashboards.
- Collect HTTP request logs using Morgan.
- Expose application metrics through the `/metrics` endpoint.
- Create an Incident Response Playbook.
- Understand the fundamentals of DevOps observability.

---

## 🛠️ Technologies Used

- Node.js
- Express.js
- Prometheus
- Grafana
- Morgan
- Docker
- Docker Compose
- Git
- GitHub

---

## 📂 Project Structure

```
monitoring-logging-incident-playbook
│
├── app
│   └── server.js
│
├── docker-compose.yml
├── prometheus.yml
├── package.json
├── package-lock.json
├── incident-playbook.md
├── README.md
└── screenshots
```

---

## ✨ Features

- Node.js Express Web Server
- Prometheus Metrics Endpoint
- HTTP Request Counter
- CPU Monitoring
- Memory Monitoring
- Event Loop Monitoring
- Morgan HTTP Logging
- Grafana Dashboard
- Dockerized Monitoring Stack
- Incident Response Documentation

---

## 🚀 Installation

### Clone Repository

```bash
git clone https://github.com/umaa2404/monitoring-logging-incident-playbook.git

cd monitoring-logging-incident-playbook
```

---

## 📦 Install Dependencies

```bash
npm install
```

---

## ▶️ Run the Application

```bash
npm start
```

The application will start on:

```
http://localhost:5000
```

---

## 📈 Metrics Endpoint

Open:

```
http://localhost:5000/metrics
```

This endpoint exposes Prometheus metrics such as:

- CPU Usage
- Memory Usage
- HTTP Requests
- Node.js Runtime Metrics

---

## 🐳 Start Prometheus & Grafana

Run:

```bash
docker compose up -d
```

Check running containers:

```bash
docker ps
```

---

## 🔍 Prometheus

Open:

```
http://localhost:9090
```

Verify the target status:

```
Status → Targets
```

The Node.js application should appear as:

```
UP
```

---

## 📊 Grafana

Open:

```
http://localhost:3000
```

Default Login

```
Username: admin
Password: admin
```

Add Prometheus as a Data Source and create dashboards using metrics like:

```
http_requests_total
```

---

## 📝 Logging

Morgan middleware logs every incoming HTTP request.

Example:

```
GET / 200 5 ms
GET /metrics 200 10 ms
```

---

## 🚨 Incident Playbook

The project includes an Incident Response Playbook covering:

- Service Down
- High CPU Usage
- High Memory Usage
- Prometheus Target Down
- Grafana Dashboard Issues

---

## 📷 Screenshots

### Docker Containers

<img width="1600" height="796" alt="WhatsApp Image 2026-07-01 at 12 10 06 PM" src="https://github.com/user-attachments/assets/de85ac7a-2cb5-4373-b621-9636f6b467b0" />


---

### Metrics Endpoint

<img width="1296" height="957" alt="image" src="https://github.com/user-attachments/assets/eca2c7f5-796b-47b4-be1c-4217ae9bd370" />


---

### Prometheus Targets

<img width="1600" height="658" alt="image" src="https://github.com/user-attachments/assets/33d428df-923e-4ff9-809e-a0d221a28626" />


---

### Prometheus Query

<img width="1599" height="789" alt="image" src="https://github.com/user-attachments/assets/4a93f2cf-d26c-442e-832f-218efff811aa" />


---

### Grafana Dashboard

<img width="1600" height="794" alt="image" src="https://github.com/user-attachments/assets/588670ea-badd-4338-b465-205f09e3a1c4" />


---

## 📚 Learning Outcomes

Through this project, I learned:

- Application Monitoring
- Metrics Collection
- Prometheus Configuration
- Grafana Dashboard Creation
- HTTP Request Logging
- Docker Compose
- DevOps Observability
- Incident Response Planning

---

## 🎓 Internship

**Alfido Tech – DevOps Internship**

Project 4: Monitoring, Logging & Incident Playbook

---

## 👨‍💻 Author

**Umamani Singh**

GitHub: https://github.com/umaa2404

LinkedIn: www.linkedin.com/in/umamani-singh-96a4a6328

---

## ⭐ Repository

If you found this project helpful, feel free to ⭐ this repository.
