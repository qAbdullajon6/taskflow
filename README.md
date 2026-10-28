<div align="center">

# TaskFlow

### A modern SaaS project management platform for teams.

Organize projects. Manage tasks. Work together.

<img src="https://sdmntprdenmarkeast.oaiusercontent.com/files/00000000-36e4-8210-84b3-770876f5fd74/raw?se=2026-10-28T06%3A48%3A19Z&sp=r&sv=2026-02-06&sr=b&scid=0788d155-1eeb-44c5-bbd3-8e86b94bdee7&skoid=82a3371f-2f6c-4f81-8a78-2701b362559b&sktid=a48cca56-e6da-484e-a814-9c849652bcb3&skt=2026-10-28T06%3A21%3A35Z&ske=2026-10-29T06%3A21%3A35Z&sks=b&skv=2026-02-06&sig=P0HR00HcaFjmbj3oz3Gnw5PWJf4LYbcPYniBW7uQMy4%3D" alt="TaskFlow project management platform preview" width="100%" />

**🚧 Currently in development**

</div>

---

---

## Overview

Managing projects across multiple tools can make it difficult to track responsibilities, deadlines, and progress.

TaskFlow aims to solve this problem by providing a centralized workspace where teams can organize projects, assign tasks, manage workflows, and monitor their progress.

The project is being developed incrementally, starting with a functional MVP and evolving toward a production-ready SaaS platform.

## Core Features

### MVP

- [ ] User registration and authentication
- [ ] User profile management
- [ ] Organization and workspace management
- [ ] Organization membership and role-based access control
- [ ] Project creation and management
- [ ] Task creation, editing, and deletion
- [ ] Task assignment and due dates
- [ ] Kanban board with drag-and-drop task management
- [ ] Task status and priority management
- [ ] Search, filtering, and sorting
- [ ] Dashboard with project and task statistics
- [ ] Organization and project settings
- [ ] Dark and light themes
- [ ] Responsive design
- [ ] Automated tests for critical functionality

### Planned Features

- [ ] Task comments and discussions
- [ ] File attachments
- [ ] Activity logs
- [ ] In-app notifications
- [ ] Real-time collaboration
- [ ] Email invitations
- [ ] Advanced analytics and reporting
- [ ] Subscription plans and billing
- [ ] Background jobs and scheduled tasks

*Features will be implemented progressively as the project evolves.*

---

## Tech Stack

The technology stack is selected to support maintainability, type safety, and future scalability.

### Frontend

| Technology | Purpose |
|---|---|
| React | User interface |
| TypeScript | Static type safety |
| Vite | Development server and build tooling |
| Tailwind CSS | Styling and responsive layouts |
| shadcn/ui | Reusable UI components |
| React Router | Client-side routing |
| TanStack Query | Server state and API data management |
| React Hook Form | Form management |
| Zod | Schema validation |
| dnd-kit | Drag-and-drop interactions |
| Vitest | Frontend unit testing |

### Backend

| Technology | Purpose |
|---|---|
| Node.js | JavaScript runtime |
| Express.js | REST API framework |
| TypeScript | Type safety |
| PostgreSQL | Relational database |
| Prisma ORM | Database access and migrations |
| Zod | Request validation |
| Argon2id | Password hashing |
| OpenAPI / Swagger | API documentation |
| Vitest | Backend testing |
| Supertest | HTTP endpoint testing |

### Development and Infrastructure

| Technology | Purpose |
|---|---|
| pnpm | Package management |
| pnpm Workspaces | Monorepo management |
| Git | Version control |
| GitHub | Source code hosting and collaboration |
| ESLint | Code quality |
| Prettier | Code formatting |
| Docker | Containerization |
| GitHub Actions | CI automation |

*The stack above represents the planned architecture. Individual technologies will be integrated as development progresses.*

---

## Architecture

TaskFlow uses a **monorepo architecture** to keep the frontend, backend, and shared code in one repository.

```text
taskflow/
├── apps/
│   ├── web/                 # React frontend
│   └── api/                 # Express REST API
│
├── packages/
│   └── shared/              # Shared types and utilities
│
├── docs/
│   ├── PRD.md               # Product requirements
│   ├── ARCHITECTURE.md      # Architecture decisions
│   └── API.md               # API documentation
│
├── .github/
│   └── workflows/           # CI workflows
│
├── package.json
├── pnpm-workspace.yaml
├── .gitignore
└── README.md
```

The repository structure may evolve as the application grows.

### Architectural Principles

- **Separation of concerns:** Keep presentation, business logic, and data access responsibilities distinct.
- **Type safety:** Use TypeScript across the application.
- **Multi-tenant isolation:** Prevent users from accessing data outside their authorized organizations.
- **Server-side authorization:** Validate permissions on the backend for every protected operation.
- **Data integrity:** Use database constraints and transactions where appropriate.
- **Maintainability:** Prefer modular, testable code over unnecessary complexity.
- **Incremental development:** Build the MVP first and introduce additional infrastructure when justified by actual requirements.

---

## Multi-Tenant Design

TaskFlow is designed as a multi-tenant SaaS application.

Each organization has its own workspace, projects, members, and associated data.

A simplified relationship looks like this:

```text
User
 │
 ├── Organization Membership
 │       │
 │       └── Organization
 │               │
 │               ├── Projects
 │               │     └── Tasks
 │               │
 │               └── Members
```

A user may belong to multiple organizations, with different roles in each organization.

### Security Requirements

- Authenticate users before allowing access to protected resources.
- Verify organization membership on every organization-scoped request.
- Enforce project-level permissions where required.
- Never trust an organization ID or role supplied by the frontend without server-side verification.
- Hash passwords using a secure password-hashing algorithm.
- Validate and sanitize incoming data.
- Store secrets and credentials in environment variables.
- Avoid exposing sensitive information in API responses or logs.

**Important:** Multi-tenancy is an authorization requirement, not merely a database field. Every relevant query and mutation must enforce the appropriate access boundaries.

---

## Getting Started

### Prerequisites

Install the following tools before starting development:

- Node.js — use a supported LTS release
- pnpm
- PostgreSQL
- Git

### 1. Clone the Repository

```bash
git clone <YOUR_REPOSITORY_URL>
cd taskflow
```

Replace `<YOUR_REPOSITORY_URL>` with the actual GitHub repository URL.

### 2. Install Dependencies

```bash
pnpm install
```

### 3. Configure Environment Variables

Create the appropriate environment files for the frontend and backend.

For example, the backend may require:

```env
PORT=4000
DATABASE_URL="postgresql://USER:PASSWORD@localhost:5432/taskflow"
```

The frontend may require:

```env
VITE_API_URL=http://localhost:4000/api/v1
```

These variables are examples. The exact names and configuration will depend on the implementation.

**Never commit real credentials, database passwords, or secret keys to Git.**

### 4. Configure the Database

After Prisma has been installed and configured, apply the project's database migrations using the command appropriate to the current development setup.

For example:

```bash
pnpm --filter api exec prisma migrate dev
```

The command assumes the API workspace is named `api` and Prisma is configured there.

### 5. Start the Application

Once the workspace scripts have been configured, start the frontend and backend using the root development script:

```bash
pnpm dev
```

The expected local addresses are:

- Frontend: `http://localhost:5173`
- Backend: `http://localhost:4000`
- API base URL: `http://localhost:4000/api/v1`

These addresses are the intended development defaults and may change during implementation.

---

## API Design

TaskFlow exposes a versioned REST API.

Base path:

```text
/api/v1
```

The following endpoints represent the planned API surface.

| Method | Endpoint | Description |
|---|---|---|
| POST | `/auth/register` | Register a new user |
| POST | `/auth/login` | Authenticate a user |
| POST | `/auth/logout` | End the current session |
| GET | `/auth/me` | Get the authenticated user |
| GET | `/organizations` | List accessible organizations |
| POST | `/organizations` | Create an organization |
| GET | `/organizations/:orgId/projects` | List organization projects |
| POST | `/organizations/:orgId/projects` | Create a project |
| GET | `/projects/:projectId/tasks` | List project tasks |
| POST | `/projects/:projectId/tasks` | Create a task |
| PATCH | `/tasks/:taskId` | Update a task |
| DELETE | `/tasks/:taskId` | Delete a task |

These endpoints are planned and should not be considered implemented until they are available in the application.

---

## Development Workflow

TaskFlow follows an incremental development workflow.

1. Define a feature and its acceptance criteria.
2. Design the data model and API contract.
3. Implement backend validation, business logic, and authorization.
4. Build the frontend interface.
5. Integrate the frontend with the API.
6. Add tests for critical behavior.
7. Review edge cases and security implications.
8. Update documentation and merge the completed changes.

### Code Quality

Before merging changes, aim to ensure that:

- TypeScript checks pass.
- Linting passes.
- Formatting is consistent.
- Relevant automated tests pass.
- Database migrations are reproducible.
- Protected endpoints enforce authorization.
- Existing functionality is not broken.

---

## Testing

The project will use automated tests at multiple levels.

- **Unit tests:** Validate individual functions and business rules.
- **Integration tests:** Validate interactions between application components and the database.
- **API tests:** Verify HTTP responses, validation, authentication, and authorization.
- **Frontend tests:** Verify important UI behavior and user interactions.
- **End-to-end tests:** Validate critical user workflows once the core application is established.

Tests will be introduced alongside the features they cover.

---

## Roadmap

### Phase 1 — Foundation
- [ ] Initialize the monorepo
- [ ] Configure the frontend and backend
- [ ] Set up PostgreSQL and Prisma
- [ ] Establish code-quality tooling
- [ ] Implement the initial application health check

### Phase 2 — Authentication and Organizations
- [ ] Implement registration and login
- [ ] Implement session management
- [ ] Create organizations and memberships
- [ ] Enforce organization-level authorization

### Phase 3 — Projects and Tasks
- [ ] Implement project management
- [ ] Implement task CRUD operations
- [ ] Add task assignments and priorities
- [ ] Add task status management
- [ ] Implement Kanban interactions

### Phase 4 — User Experience
- [ ] Build the dashboard
- [ ] Add search and filtering
- [ ] Implement dark and light themes
- [ ] Improve responsive layouts
- [ ] Add loading, empty, and error states

### Phase 5 — Quality and Release
- [ ] Add critical automated tests
- [ ] Complete API documentation
- [ ] Configure CI
- [ ] Review security and multi-tenant isolation
- [ ] Prepare deployment configuration

### Phase 6 — Advanced Features
- [ ] Comments and attachments
- [ ] Notifications
- [ ] Real-time updates
- [ ] Analytics and reporting
- [ ] Subscription management

---

## Project Goals

TaskFlow is both a practical software engineering project and an effort to build a useful SaaS product.

The project focuses on:

- Designing and implementing a full-stack application.
- Building secure authentication and authorization.
- Working with relational data models and database migrations.
- Designing maintainable REST APIs.
- Implementing multi-tenant access control.
- Building responsive and accessible user interfaces.
- Testing real application workflows.
- Preparing the application for deployment and future growth.

The primary goal is not simply to complete a list of features, but to build them with sound engineering practices.

---

## Contributing

This project is currently under active development.

Development conventions, branching rules, contribution guidelines, and pull request requirements will be documented as the project matures.

## License

The project's license has not yet been selected.

A license will be added once the distribution and reuse terms have been decided.