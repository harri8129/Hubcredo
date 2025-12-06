# HubCredo Assignment - Full-Stack Authentication System

A modern, full-stack web application featuring a robust authentication system with a beautiful UI. Built with Django REST Framework backend and React + Vite frontend, this project demonstrates secure user authentication, JWT token management, and n8n webhook integration.

![License](https://img.shields.io/badge/license-MIT-blue.svg)
![Python](https://img.shields.io/badge/Python-3.11-blue.svg)
![Django](https://img.shields.io/badge/Django-6.0-green.svg)
![React](https://img.shields.io/badge/React-19.2-blue.svg)
![Vite](https://img.shields.io/badge/Vite-7.2-purple.svg)

## ✨ Features

- 🔐 **Secure Authentication** - JWT-based authentication with email/username login
- 🎨 **Modern UI** - Beautiful glassmorphic design with Tailwind CSS
- 🚀 **Fast & Responsive** - Built with Vite for lightning-fast development and HMR
- 🔔 **Webhook Integration** - Automatic n8n webhook triggers on user registration
- 📱 **Mobile Responsive** - Fully responsive design that works on all devices
- ⚡ **Real-time Feedback** - Toast notifications for user actions
- 🎭 **Smooth Animations** - Micro-animations and transitions for enhanced UX
- 🛡️ **CORS Enabled** - Secure cross-origin resource sharing configuration

## 🏗️ Tech Stack

### Backend
- **Django 6.0** - Modern Python web framework
- **Django REST Framework 3.16** - Powerful toolkit for building Web APIs
- **PostgreSQL** - Robust relational database (psycopg2-binary)
- **JWT Authentication** - djangorestframework-simplejwt for token management
- **Gunicorn** - Production-ready WSGI HTTP Server
- **WhiteNoise** - Simplified static file serving
- **python-dotenv** - Environment variable management

### Frontend
- **React 19.2** - Modern UI library with latest features
- **Vite 7.2** - Next-generation frontend tooling
- **Tailwind CSS 4.1** - Utility-first CSS framework
- **React Router DOM 7.10** - Declarative routing
- **Axios** - Promise-based HTTP client
- **Lucide React** - Beautiful, consistent icon set
- **React Toastify** - Elegant toast notifications

## 📋 Prerequisites

Before you begin, ensure you have the following installed:
- **Python 3.11+**
- **Node.js 18+** and npm
- **PostgreSQL** (or SQLite for development)
- **Git**

## 🚀 Quick Start

### 1. Clone the Repository

```bash
git clone https://github.com/yourusername/hubcredoassignment.git
cd hubcredoassignment
```

### 2. Backend Setup

#### Create Virtual Environment

```bash
cd Backend
python -m venv venv

# On Windows
venv\Scripts\activate

# On macOS/Linux
source venv/bin/activate
```

#### Install Dependencies

```bash
pip install -r requirements.txt
```

#### Configure Environment Variables

Create a `.env` file in the `Backend` directory:

```env
# Django Settings
SECRET_KEY=your-secret-key-here
DEBUG=True
ALLOWED_HOSTS=localhost,127.0.0.1

# Database Configuration (PostgreSQL)
DB_NAME=your_db_name
DB_USER=your_db_user
DB_PASSWORD=your_db_password
DB_HOST=localhost
DB_PORT=5432

# CORS Settings
CORS_ALLOWED_ORIGINS=http://localhost:3000,http://localhost:5173

# n8n Webhook (Optional)
N8N_WEBHOOK_URL=your-n8n-webhook-url
```

#### Run Migrations

```bash
python manage.py makemigrations
python manage.py migrate
```

#### Create Superuser (Optional)

```bash
python manage.py createsuperuser
```

#### Start Development Server

```bash
python manage.py runserver
```

The backend API will be available at `http://localhost:8000`

### 3. Frontend Setup

#### Navigate to Frontend Directory

```bash
cd ../Frontend
```

#### Install Dependencies

```bash
npm install
```

#### Configure API URL

Create a `.env` file in the `Frontend` directory (if needed):

```env
VITE_API_URL=http://localhost:8000
```

#### Start Development Server

```bash
npm run dev
```

The frontend will be available at `http://localhost:5173`

## 📁 Project Structure

```
hubcredoassignment/
├── Backend/
│   ├── Backend/              # Django project settings
│   │   ├── settings.py       # Main settings file
│   │   ├── urls.py          # URL configuration
│   │   └── wsgi.py          # WSGI entry point
│   ├── app/                 # Main application
│   │   ├── models.py        # Database models
│   │   ├── serializers.py   # DRF serializers
│   │   ├── views.py         # API views
│   │   └── urls.py          # App URL patterns
│   ├── requirements.txt     # Python dependencies
│   ├── manage.py           # Django management script
│   └── render.yaml         # Render deployment config
├── Frontend/
│   ├── src/
│   │   ├── pages/          # Page components
│   │   │   ├── LoginPage.jsx
│   │   │   ├── SignupPage.jsx
│   │   │   └── Dashboard.jsx
│   │   ├── AuthContext.jsx # Authentication context
│   │   ├── App.jsx         # Main app component
│   │   ├── main.jsx        # Entry point
│   │   └── index.css       # Global styles
│   ├── package.json        # Node dependencies
│   ├── vite.config.js      # Vite configuration
│   └── tailwind.config.js  # Tailwind configuration
└── README.md               # This file
```

## 🔑 API Endpoints

### Authentication

| Method | Endpoint | Description | Auth Required |
|--------|----------|-------------|---------------|
| POST | `/api/register/` | Register new user | No |
| POST | `/api/login/` | Login with email/password | No |
| POST | `/api/token/refresh/` | Refresh JWT token | No |
| GET | `/api/me/` | Get current user info | Yes |

### Request/Response Examples

#### Register User
```bash
POST /api/register/
Content-Type: application/json

{
  "username": "johndoe",
  "email": "john@example.com",
  "password": "SecurePass123!"
}
```

#### Login
```bash
POST /api/login/
Content-Type: application/json

{
  "email": "john@example.com",
  "password": "SecurePass123!"
}
```

Response:
```json
{
  "refresh": "eyJ0eXAiOiJKV1QiLCJh...",
  "access": "eyJ0eXAiOiJKV1QiLCJh..."
}
```

## 🎨 UI Features

The frontend includes several premium design elements:

- **Glassmorphism Effects** - Modern frosted glass aesthetic
- **Gradient Backgrounds** - Dynamic, animated gradient overlays
- **Smooth Animations** - Micro-interactions and hover effects
- **Dark Mode Theme** - Sophisticated dark purple/slate color scheme
- **Form Validation** - Real-time input validation
- **Toast Notifications** - User-friendly success/error messages
- **Loading States** - Visual feedback during async operations
- **Mobile Responsive** - Optimized for all screen sizes

## 🔧 Development

### Backend Development

```bash
# Run development server
python manage.py runserver

# Create new migrations
python manage.py makemigrations

# Apply migrations
python manage.py migrate

# Run tests
python manage.py test

# Create superuser for admin access
python manage.py createsuperuser
```

### Frontend Development

```bash
# Start dev server with HMR
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview

# Lint code
npm run lint
```

## 🚢 Deployment

### Backend (Render)

The project includes a `render.yaml` configuration file for easy deployment to Render:

1. Push your code to GitHub
2. Connect your repository to Render
3. Render will automatically detect the configuration
4. Set environment variables in Render dashboard
5. Deploy!

### Frontend (Vercel/Netlify)

```bash
# Build the frontend
cd Frontend
npm run build

# The dist/ folder contains the production build
```

Deploy the `dist` folder to your preferred hosting service.

## 🔒 Security Best Practices

- ✅ JWT tokens for stateless authentication
- ✅ Password hashing with Django's built-in system
- ✅ CORS configuration for API security
- ✅ Environment variables for sensitive data
- ✅ HTTPS recommended for production
- ✅ Token refresh mechanism implemented
- ✅ Input validation on both frontend and backend

## 🤝 Contributing

Contributions are welcome! Please follow these steps:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📝 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 👤 Author

**Your Name**
- GitHub: [@yourusername](https://github.com/yourusername)
- Email: your.email@example.com

## 🙏 Acknowledgments

- [Django](https://www.djangoproject.com/) - The web framework for perfectionists with deadlines
- [React](https://react.dev/) - A JavaScript library for building user interfaces
- [Tailwind CSS](https://tailwindcss.com/) - Rapidly build modern websites
- [Lucide Icons](https://lucide.dev/) - Beautiful & consistent icon set

## 📞 Support

If you have any questions or run into issues, please open an issue on GitHub or contact the maintainer.

---

<div align="center">
  Made with ❤️ for HubCredo
</div>
