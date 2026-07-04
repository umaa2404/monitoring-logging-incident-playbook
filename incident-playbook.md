# Incident Playbook

## Service Down

Symptoms:
- Application not responding
- Prometheus target shows DOWN

Steps:
1. Check if Node.js server is running.
2. Restart the application:
   npm start
3. Check logs for errors.
4. Verify Prometheus can access:
   http://localhost:5000/metrics

---

## High CPU Usage

Symptoms:
- CPU graph continuously increasing

Steps:
1. Check application traffic.
2. Restart the Node.js application if required.
3. Investigate heavy requests.

---

## High Memory Usage

Symptoms:
- Memory graph continuously increases

Steps:
1. Check for memory leaks.
2. Restart application.
3. Monitor memory usage in Grafana.

---

## Prometheus Target Down

Steps:
1. Open:
http://localhost:9090/targets

2. Verify target is UP.

3. Restart Prometheus if needed.

---

## Grafana Dashboard Not Showing Data

Steps:
1. Verify Prometheus datasource.
2. Test query:
http_requests_total

3. Refresh dashboard.