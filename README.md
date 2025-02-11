<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo-small.svg" width="120" alt="Nest Logo" /></a>
</p>

[circleci-image]: https://img.shields.io/circleci/build/github/nestjs/nest/master?token=abc123def456
[circleci-url]: https://circleci.com/gh/nestjs/nest

  <p align="center">A progressive <a href="http://nodejs.org" target="_blank">Node.js</a> framework for building efficient and scalable server-side applications.</p>
    <p align="center">
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/v/@nestjs/core.svg" alt="NPM Version" /></a>
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/l/@nestjs/core.svg" alt="Package License" /></a>
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/dm/@nestjs/common.svg" alt="NPM Downloads" /></a>
<a href="https://circleci.com/gh/nestjs/nest" target="_blank"><img src="https://img.shields.io/circleci/build/github/nestjs/nest/master" alt="CircleCI" /></a>
<a href="https://coveralls.io/github/nestjs/nest?branch=master" target="_blank"><img src="https://coveralls.io/repos/github/nestjs/nest/badge.svg?branch=master#9" alt="Coverage" /></a>
<a href="https://discord.gg/G7Qnnhy" target="_blank"><img src="https://img.shields.io/badge/discord-online-brightgreen.svg" alt="Discord"/></a>
<a href="https://opencollective.com/nest#backer" target="_blank"><img src="https://opencollective.com/nest/backers/badge.svg" alt="Backers on Open Collective" /></a>
<a href="https://opencollective.com/nest#sponsor" target="_blank"><img src="https://opencollective.com/nest/sponsors/badge.svg" alt="Sponsors on Open Collective" /></a>
  <a href="https://paypal.me/kamilmysliwiec" target="_blank"><img src="https://img.shields.io/badge/Donate-PayPal-ff3f59.svg" alt="Donate us"/></a>
    <a href="https://opencollective.com/nest#sponsor"  target="_blank"><img src="https://img.shields.io/badge/Support%20us-Open%20Collective-41B883.svg" alt="Support us"></a>
  <a href="https://twitter.com/nestframework" target="_blank"><img src="https://img.shields.io/twitter/follow/nestframework.svg?style=social&label=Follow" alt="Follow us on Twitter"></a>
</p>
  <!--[![Backers on Open Collective](https://opencollective.com/nest/backers/badge.svg)](https://opencollective.com/nest#backer)
  [![Sponsors on Open Collective](https://opencollective.com/nest/sponsors/badge.svg)](https://opencollective.com/nest#sponsor)-->

## Description

[Nest](https://github.com/nestjs/nest) framework TypeScript starter repository.

## Project setup

```bash
$ npm install
```

## Compile and run the project

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```

## Run tests

```bash
# unit tests
$ npm run test

# e2e tests
$ npm run test:e2e

# test coverage
$ npm run test:cov
```

## Deployment

When you're ready to deploy your NestJS application to production, there are some key steps you can take to ensure it runs as efficiently as possible. Check out the [deployment documentation](https://docs.nestjs.com/deployment) for more information.

If you are looking for a cloud-based platform to deploy your NestJS application, check out [Mau](https://mau.nestjs.com), our official platform for deploying NestJS applications on AWS. Mau makes deployment straightforward and fast, requiring just a few simple steps:

```bash
$ npm install -g mau
$ mau deploy
```

With Mau, you can deploy your application in just a few clicks, allowing you to focus on building features rather than managing infrastructure.

## Resources

Check out a few resources that may come in handy when working with NestJS:

- Visit the [NestJS Documentation](https://docs.nestjs.com) to learn more about the framework.
- For questions and support, please visit our [Discord channel](https://discord.gg/G7Qnnhy).
- To dive deeper and get more hands-on experience, check out our official video [courses](https://courses.nestjs.com/).
- Deploy your application to AWS with the help of [NestJS Mau](https://mau.nestjs.com) in just a few clicks.
- Visualize your application graph and interact with the NestJS application in real-time using [NestJS Devtools](https://devtools.nestjs.com).
- Need help with your project (part-time to full-time)? Check out our official [enterprise support](https://enterprise.nestjs.com).
- To stay in the loop and get updates, follow us on [X](https://x.com/nestframework) and [LinkedIn](https://linkedin.com/company/nestjs).
- Looking for a job, or have a job to offer? Check out our official [Jobs board](https://jobs.nestjs.com).

# Book Management System

## Project Overview
This project is a full-stack Book Management System that provides robust features for managing a collection of books, user authentication, and analytics. The project consists of a backend built using NestJS and a frontend developed with React. MongoDB is used as the database.

## Table of Contents
1. [Project Structure](#project-structure)
2. [Backend Features](#backend-features)
3. [Frontend Features](#frontend-features)
4. [Security Features](#security-features)
5. [Configuration](#configuration)
6. [Scripts](#scripts)
7. [Setup Instructions](#setup-instructions)
8. [Usage](#usage)
9. [Technologies Used](#technologies-used)

## Project Structure
- **Backend (NestJS)**
  - GraphQL API for book management
  - JWT-based authentication system
  - MongoDB integration
  - Rate limiting implementation

- **Frontend (React)**
  - Basic setup using Create React App
  - Testing setup with Jest

## Backend Features
### Authentication System
- JWT-based authentication
- Session support
- Password hashing using bcrypt
- Authentication endpoints:
  - **Sign up**
  - **Sign in**
  - **Sign out**

### GraphQL API
- CRUD operations for book management
- Book statistics and price aggregations
- Author aggregations
- Schema defined in `schema.gql`

### Security Features
- Rate limiting using `http-throttler.guard.ts`
- JWT authentication guard

### Database Integration
- MongoDB integration using Mongoose
- Schemas:
  - User schema (`user.schema.ts`)
  - Book schema (`book.schema.ts`)

## Frontend Features
- Basic React setup using Create React App
- Testing setup with Jest
- Web vitals reporting
- Static assets handling

## Configuration
- TypeScript configuration in `tsconfig.json`
- ESLint configuration in `eslint.config.mjs`
- Prettier configuration in `.prettierrc`

## Scripts
### Backend
```json
{
  "build": "nest build",
  "start": "nest start",
  "start:dev": "nest start --watch",
  "start:debug": "nest start --debug --watch",
  "start:prod": "node dist/main"
}
```

### Frontend
```json
{
  "start": "react-scripts start",
  "build": "react-scripts build",
  "test": "react-scripts test",
  "eject": "react-scripts eject"
}
```

## Setup Instructions
1. **Clone the Repository:**
   ```bash
   git clone <repository-url>
   cd book-management-system
   ```

2. **Backend Setup:**
   ```bash
   cd backend
   npm install
   npm run start:dev
   ```

3. **Frontend Setup:**
   ```bash
   cd ../frontend
   npm install
   npm start
   ```

4. **Environment Configuration:**
   - Create a `.env` file in the backend directory and specify the following variables:
     ```env
     MONGO_URI=<your-mongodb-uri>
     JWT_SECRET=<your-jwt-secret>
     ```

## Usage
1. **Access the Frontend:**
   Navigate to [http://localhost:3000](http://localhost:3000) in your browser.

2. **Access the Backend GraphQL Playground:**
   Navigate to [http://localhost:5000/graphql](http://localhost:5000/graphql).

3. **User Authentication:**
   - Sign up, sign in, and manage user sessions via the frontend or GraphQL API.

4. **Manage Books:**
   - Perform CRUD operations on books, retrieve analytics, and explore book statistics.

## Technologies Used
- **Backend:** NestJS, GraphQL, MongoDB, Mongoose, JWT
- **Frontend:** React, Create React App, Jest
- **Security:** bcrypt, rate limiting, JWT guards

This project offers a robust system for book management with modern authentication and security practices, making it scalable and secure for production use.






