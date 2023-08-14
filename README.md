# Blogging Platform API

Welcome to the Blogging Platform API! This repository contains the backend code for a dynamic blogging platform built using Node.js, Express, and MongoDB. The API provides endpoints for managing blog posts, comments, and user interactions.

**Some key highlights include:**
- Enhanced API responses with a custom response middleware for consistent formatting and error handling.
- Streamlined validation by creating a centralized validation middleware for reuse across routes.
- Implemented a centralized error handling middleware to catch and format exceptions and errors.
- Integrated user authentication and authorization using JSON Web Tokens (JWT) for secure endpoints.
- Managed fine-grained access to different resources and actions based on user roles using the ACL package.
- Developed a custom middleware to handle requests to non-existent routes (404).
- Created an organized and maintainable codebase following industry best practices.

## Table of Contents

- [Installation](#installation)
- [API Endpoints](#api-endpoints)
- [Services](#services)
- [Request and Response Formats](#request-and-response-formats)
- [Acknowledgments](#acknowledgments)
- [Future Plans](#future-plans)
- [License](#license)

## Installation

1. Clone this repository.
2. Navigate to the project directory: `cd blogging-platform-api`.
3. Install dependencies: `npm install`.
4. Set up environment variables in a `.env` file (see `.env.example`).
5. Start the server: `npm start`.

## API Endpoints

### Blog Posts

- `GET /api/posts`: Get all blog posts.
- `GET /api/posts/:postId`: Get a specific blog post.
- `POST /api/posts`: Create a new blog post.
- `PUT /api/posts/:postId`: Update a blog post.
- `DELETE /api/posts/:postId`: Delete a blog post.

### Comments

- `GET /api/comments/content/:contentId`: Get comments for a specific content.
- `GET /api/comments/:commentId/replies`: Get replies for a specific comment.
- `GET /api/comments/:commentId`: Get details of a comment.
- `POST /api/comments`: Create a new comment.
- `POST /api/comments/:commentId/reply`: Reply to a comment.
- `PUT /api/comments/:commentId`: Update a comment.
- `DELETE /api/comments/:commentId`: Delete a comment.

### Users

- `POST /api/users/register`: Register a new user.
- `POST /api/users/login`: Log in a user and obtain JWT token.
- `GET /api/users/profile`: Get user profile (requires authentication).

## Services

1. Validation Middleware: Validates request bodies and query parameters using Joi.
2. Response Middleware: Formats API responses with consistent structure and error handling.
3. Auth Middleware: Implements user authentication using JSON Web Tokens (JWT).
4. Error Handling Middleware: Centralized error handling and response formatting.
5. Custom Validation Middleware: Reusable middleware for common validation scenarios.

## Request and Response Formats

- Request bodies should adhere to the schema defined for each API endpoint.
- Responses are formatted with a consistent structure: `{ success, data, message }`.

  ## Acknowledgments

I would like to express my gratitude to the following libraries and resources that have greatly contributed to the development of the Blogging Platform API:

- [Express.js](https://expressjs.com/): A fast and minimalist web framework for Node.js that formed the foundation of our API.
- [Mongoose](https://mongoosejs.com/): An elegant MongoDB object modeling for Node.js that simplified database operations.
- [Joi](https://joi.dev/): A powerful schema description language and data validator for JavaScript that ensured data integrity.
- [ACL](https://github.com/OptimalBits/node_acl): Access Control Lists (ACL) package that enabled us to manage fine-grained access control for users.
- [jsonwebtoken](https://www.npmjs.com/package/jsonwebtoken): A library to create and verify JSON Web Tokens (JWT) for user authentication.
- [dotenv](https://www.npmjs.com/package/dotenv): A zero-dependency module that loads environment variables from a `.env` file into `process.env`.

I as a developer appreciate the open-source community's effort in creating and maintaining these tools, which have significantly contributed to the success of this project.

## Future Plans

Here are some of my planned enhancements:

- **Admin Dashboard API:** Introduce a comprehensive dashboard API where administrators and other privileged roles can log in and perform essential actions, such as publishing granted posts, user management, content moderation, and more.
- **UI Enhancements:** Work on creating a user-friendly and intuitive interface for interacting with the API.

We're excited about the journey ahead and look forward to implementing these enhancements to make the Blogging Platform API an even more powerful and versatile solution.


## License


