# Skippr Booking Management System

## Overview

A full-stack Booking Management System built using React, Spring Boot, and MySQL.

Residents can create service bookings, while administrators can manage bookings through an interactive dashboard.

---

## Tech Stack

### Frontend

* React
* Vite
* Axios

### Backend

* Spring Boot
* Spring Data JPA

### Database

* MySQL

---

## Features

### Resident Features

* Create Booking
* Submit Service Requests

### Admin Features

* View All Bookings
* Search Bookings by Customer Name
* Filter Bookings by Status
* Update Booking Status
* Delete Bookings
* Dashboard Summary Cards

---

## Booking Statuses

* Pending
* Assigned
* Completed

---

## Setup Instructions

### Backend

```bash
cd backend
.\mvnw.cmd spring-boot:run
```

Backend runs on:

```text
http://localhost:8080
```

### Frontend

```bash
cd frontend
npm install
npm run dev
```

Frontend runs on:

```text
http://localhost:5173
```
## Architecture Overview

```text
React Frontend
      │
      │ Axios HTTP Requests
      ▼
Spring Boot REST API
      │
      │ Spring Data JPA
      ▼
MySQL Database
```

The React frontend allows residents to create bookings and administrators to manage them. The Spring Boot backend exposes REST APIs for booking operations, while MySQL stores booking data persistently.


---

## Database Configuration

Create database:

```sql
CREATE DATABASE skippr_db;
```

Update credentials in:

```properties
application.properties
```

Example:

```properties
spring.datasource.url=jdbc:mysql://localhost:3307/skippr_db
spring.datasource.username=root
spring.datasource.password=<your_mysql_password>
```
## Validation Rules

* Customer Name is required
* Mobile Number must contain 10 digits
* Service selection is mandatory
* Booking Date cannot be earlier than the current date
* Time Slot selection is mandatory
* Booking Status defaults to Pending when a booking is created


---

## Assumptions

* Single administrator system
* No authentication required
* Booking statuses are limited to Pending, Assigned, and Completed
* All bookings are stored in MySQL

---

## Future Improvements

* User Authentication
* Email/SMS Notifications
* Booking Analytics Dashboard
* Technician Assignment System
* Role-Based Access Control

## AI Usage

AI tools were used to assist with:

* React component development
* Spring Boot API implementation
* UI styling improvements
* Debugging and troubleshooting
* Documentation preparation

All code was reviewed, modified, tested, and integrated manually.

