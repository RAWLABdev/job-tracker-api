🚀 Job Tracker API

A production-ready REST API built with NestJS, Prisma, TypeScript and Swagger for managing job applications and tracking hiring pipeline metrics.

Features

* Create job applications
* List job applications
* Get application details
* Update application status
* Delete applications
* Hiring pipeline metrics dashboard
* Request validation
* Swagger API documentation
* Modular architecture
* Prisma ORM integration

⸻

Tech Stack

Backend

* NestJS
* TypeScript
* Prisma ORM
* SQLite (PostgreSQL Ready)

Documentation

* Swagger / OpenAPI

Quality

* ESLint
* Prettier

⸻

API Endpoints

Job Applications

Method	Endpoint
POST	/job-applications
GET	/job-applications
GET	/job-applications/:id
PATCH	/job-applications/:id
DELETE	/job-applications/:id

Metrics

Method	Endpoint
GET	/metrics

⸻

Example Response

GET /metrics

{
  "total": 12,
  "applied": 6,
  "interview": 3,
  "technical": 2,
  "offer": 1,
  "rejected": 0
}

⸻

Local Development

Install dependencies

npm install

Generate Prisma Client

npx prisma generate

Run migrations

npx prisma migrate dev

Start development server

npm run start:dev

⸻

Swagger Documentation

Once the application is running:

http://localhost:3000/api

⸻

Project Structure

src/
├── prisma/
├── job-applications/
│   ├── dto/
│   ├── controller
│   └── service
├── metrics/
├── app.module.ts
└── main.ts

⸻

Future Improvements

* PostgreSQL
* Docker
* Authentication (JWT)
* Pagination
* Filtering
* Unit Tests
* GitHub Actions CI/CD
* Deployment (Railway / Render)

⸻

Author

Raúl Ruiz

Frontend & Mobile Engineer

RAWLAB_

https://rawlab.space

:::
