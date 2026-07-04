# Monitoring, Logging & Incident Playbook

## Features

- Node.js Express Application
- Prometheus Monitoring
- Grafana Dashboard
- Morgan HTTP Logging
- Incident Playbook

---

## Installation

Clone repository

```bash
git clone <your-github-link>
```

Install dependencies

```bash
npm install
```

Run application

```bash
npm start
```

Application runs at

```
http://localhost:5000
```

Metrics

```
http://localhost:5000/metrics
```

Prometheus

```
http://localhost:9090
```

Grafana

```
http://localhost:3000
```

Default Login

```
admin
admin
```

---

## Dashboards

- HTTP Requests
- CPU Usage
- Memory Usage
- Event Loop Lag

---

## Logging

Morgan middleware logs every HTTP request.

---

## Incident Playbook

See:

```
incident-playbook.md
```