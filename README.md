MERN Stack Blog Application
A full-stack blog application built with MongoDB, Express.js, React.js, and Node.js. This application demonstrates seamless integration between front-end and back-end components with complete CRUD functionality.

📋 Project Overview
This is a complete MERN stack blog application that allows users to:

Create, read, update, and delete blog posts

Manage categories for posts

View posts in a responsive grid layout

Navigate between different views using React Router

Tech Stack:

Frontend: React.js, Vite, React Router, Context API, Axios

Backend: Node.js, Express.js, MongoDB, Mongoose

Styling: Custom CSS with responsive design

🚀 Features Implemented
Core Features
✅ Full CRUD operations for blog posts

✅ Category management

✅ Responsive UI design

✅ React Router for navigation

✅ Context API for state management

✅ RESTful API architecture

✅ Error handling and loading states

Advanced Features
✅ Environment variables configuration

✅ Proxy setup for API calls

✅ Custom hooks for API calls

✅ Optimistic UI updates

✅ Form validation



Application Views
Home Page - Displaying all blog posts in a grid layout

Post Detail - Individual post view with full content

Create/Edit Post - Form for creating and editing posts

Navigation - Responsive navbar with site navigation

🛠️ Setup Instructions
Prerequisites
Node.js (v18 or higher)

MongoDB (local or Atlas)

Git

Installation
Clone the repository

bash
git clone <your-repository-url>
cd blog-app
Backend Setup

bash
cd server
npm install

# Create environment file
cp .env.example .env
# Edit .env with your MongoDB connection string
Frontend Setup

bash
cd ../client
npm install

# Create environment file
cp .env.example .env
Environment Configuration

server/.env

env
PORT=5000
MONGODB_URI=mongodb://localhost:27017/blogapp
# OR for MongoDB Atlas:
# MONGODB_URI=mongodb+srv://username:password@cluster.mongodb.net/blogapp
client/.env

env
VITE_API_BASE_URL=http://localhost:5000/api
Running the Application
Start the Backend Server

bash
cd server
npm run dev
Server runs on: http://localhost:5000

Start the Frontend Development Server

bash
cd client
npm run dev
Client runs on: http://localhost:3000

Seed Sample Data (Optional)

bash
cd server
node seedData.js
📡 API Documentation
Base URL
text
http://localhost:5000/api
Posts Endpoints
GET /api/posts
Description: Get all blog posts
Response: Array of post objects with populated category data

GET /api/posts/:id
Description: Get a specific blog post
Parameters: id - Post ID
Response: Single post object

POST /api/posts
Description: Create a new blog post
Body:

json
{
  "title": "Post Title",
  "content": "Post content",
  "excerpt": "Short excerpt",
  "category": "category_id",
  "published": true
}
PUT /api/posts/:id
Description: Update an existing blog post
Parameters: id - Post ID
Body: Same as POST

DELETE /api/posts/:id
Description: Delete a blog post
Parameters: id - Post ID

Categories Endpoints
GET /api/categories
Description: Get all categories
Response: Array of category objects

POST /api/categories
Description: Create a new category
Body:

json
{
  "name": "Category Name",
  "description": "Category description"
}
🗂️ Project Structure
text
blog-app/
├── client/                 # React frontend
│   ├── src/
│   │   ├── components/     # React components
│   │   │   ├── Navbar.jsx
│   │   │   ├── PostList.jsx
│   │   │   ├── PostForm.jsx
│   │   │   └── PostDetail.jsx
│   │   ├── context/        # React context
│   │   │   └── PostContext.jsx
│   │   ├── hooks/          # Custom hooks
│   │   │   └── useApi.js
│   │   ├── services/       # API services
│   │   │   └── api.js
│   │   ├── App.jsx
│   │   ├── App.css
│   │   └── main.jsx
│   ├── package.json
│   ├── vite.config.js
│   └── .env
├── server/                 # Express backend
│   ├── models/             # MongoDB models
│   │   ├── Post.js
│   │   └── Category.js
│   ├── routes/             # API routes
│   │   ├── posts.js
│   │   └── categories.js
│   ├── server.js           # Server entry point
│   ├── seedData.js         # Sample data seeder
│   ├── package.json
│   └── .env
└── README.md
🔧 Key Implementation Details
Frontend Architecture
React Context: Global state management for posts and categories

Custom Hooks: Reusable API call logic with loading and error states

React Router: Client-side routing for single-page application

Component Structure: Modular, reusable components

Backend Architecture
Express.js: RESTful API server with middleware configuration

Mongoose: MongoDB object modeling with relationships

MVC Pattern: Clear separation of models, routes, and controllers

Error Handling: Comprehensive error handling middleware

Database Models
Post Model
javascript
{
  title: String (required),
  content: String (required),
  excerpt: String,
  category: ObjectId (ref: Category),
  featuredImage: String,
  slug: String (unique, auto-generated),
  published: Boolean (default: false),
  timestamps: true
}
Category Model
javascript
{
  name: String (required, unique),
  description: String,
  timestamps: true
}
🎯 Usage Guide
View Posts: Navigate to the home page to see all published posts

Create Post: Click "New Post" to create a new blog post

Edit Post: Click "Edit" on any post card to modify the post

View Details: Click "Read More" to view the full post content

Manage Categories: Categories are managed through the API (can be extended to UI)

🔮 Future Enhancements
User authentication and authorization

Image upload functionality

Pagination for post lists

Search and filtering capabilities

Comments system for posts

Rich text editor for post content

Post tagging system

User profiles and avatars

Social sharing features

RSS feed generation

🐛 Troubleshooting
Common Issues
MongoDB Connection Error

Ensure MongoDB is running locally or Atlas connection string is correct

Check firewall settings for local MongoDB

CORS Errors

Backend has CORS enabled for all origins in development

Verify proxy configuration in vite.config.js

Port Already in Use

Change PORT in .env files or kill existing processes

Default ports: Backend-5000, Frontend-3000

Environment Variables Not Loading

Restart the development servers after modifying .env files

Ensure .env files are in the correct directories





👨‍💻 Author
Your Name reyane awuor

GitHub: reyane-awuor

Email: reyawuor@gmail.com

🙏 Acknowledgments
MERN stack documentation

React and Express.js communities

Vite team for the excellent build tool

MongoDB for the database solution
