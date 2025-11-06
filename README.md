# 🔐 Admin Dashboard

A modern, secure admin dashboard built with React and Supabase authentication. This project demonstrates best practices in frontend development, including component architecture, custom hooks, and protected routes.

![React](https://img.shields.io/badge/React-18.2.0-61DAFB?style=for-the-badge&logo=react&logoColor=black)
![Vite](https://img.shields.io/badge/Vite-7.1.7-646CFF?style=for-the-badge&logo=vite&logoColor=white)
![Supabase](https://img.shields.io/badge/Supabase-2.76.1-3ECF8E?style=for-the-badge&logo=supabase&logoColor=white)
![React Router](https://img.shields.io/badge/React_Router-7.9.4-CA4245?style=for-the-badge&logo=react-router&logoColor=white)

---

## ✨ Features

- 🔒 **Secure Authentication** - User authentication and authorization with Supabase
- 🛡️ **Protected Routes** - Automatic redirect for unauthorized users
- 📧 **Email Management** - Update user email with validation
- 🎨 **Modern UI** - Clean, responsive dashboard interface
- 🔄 **Custom Hooks** - Reusable authentication and user management hooks
- 📱 **Responsive Design** - Works seamlessly across all device sizes
- ⚡ **Fast Development** - Hot module replacement with Vite

---

## 🚀 Tech Stack

### Core Technologies
- **React 18.2** - UI library
- **Vite 7.1** - Build tool and dev server
- **React Router DOM 7.9** - Client-side routing

### Backend & Authentication
- **Supabase** - Backend-as-a-Service for authentication and database

### Development Tools
- **ESLint** - Code linting and formatting

---

## 📁 Project Structure

```
src/
├── components/
│   ├── Admin/
│   │   ├── AdminSidebar.jsx      # Navigation sidebar
│   │   ├── AdminConfiguration.jsx # Configuration panel
│   │   ├── AdminChangeForm.jsx   # Email change form
│   │   └── AdminLogout.jsx       # Logout button component
│   └── Auth/
│       └── AdminLoginForm.jsx    # Login form component
├── hooks/
│   ├── useAuth.jsx               # Authentication hook
│   └── useUser.jsx               # User data hook
├── pages/
│   ├── Admin/
│   │   ├── Admin.jsx             # Main admin page
│   │   └── Admin.css             # Admin page styles
│   └── Login/
│       └── AdminLogin.jsx        # Login page
├── styles/
│   └── globals.css               # Global styles
├── utils/
│   └── Logout.jsx                # Logout utility function
├── App.jsx                       # Main app component
├── main.jsx                      # Application entry point
└── supabaseClient.js            # Supabase client configuration
```

---

## 🛠️ Installation

### Prerequisites
- Node.js (v16 or higher)
- npm or yarn package manager
- Supabase account (free tier works)

### Setup Steps

1. **Clone the repository**
   ```bash
   git clone https://github.com/HazarBakir/admin-dashboard
   cd admin-dashboard
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Configure Supabase**
   - Create a new project at [supabase.com](https://supabase.com)
   - Go to Project Settings → API
   - Copy your project URL and anon key
   - Update `src/supabaseClient.js` with your credentials:
   ```javascript
   const supabaseUrl = 'YOUR_SUPABASE_URL'
   const supabaseAnonKey = 'YOUR_SUPABASE_ANON_KEY'
   ```

4. **Start the development server**
   ```bash
   npm run dev
   ```

5. **Open your browser**
   - Navigate to `http://localhost:5173` (or the port shown in terminal)

---

## 📖 Usage

### Authentication Flow

1. **Login Page** (`/`)
   - Enter your email and password
   - Click "Log in" to authenticate
   - Automatic redirect to admin dashboard if already logged in

2. **Admin Dashboard** (`/admin`)
   - Protected route - requires authentication
   - Access sidebar navigation
   - Update email in Configuration section
   - Logout using the logout button

### Key Features

- **Automatic Redirect**: Unauthorized users are redirected to login page
- **Session Management**: User session persists across page refreshes
- **Email Update**: Change email address with Supabase email verification

---

## 🔧 Available Scripts

- `npm run dev` - Start development server with hot reload
- `npm run build` - Build for production
- `npm run preview` - Preview production build locally
- `npm run lint` - Run ESLint to check code quality

---

## 🎯 Key Implementation Details

### Custom Hooks
- **`useAuth`** - Manages authentication state and loading status
- **`useUser`** - Fetches and manages current user data

### Protected Routes
- Automatic authentication check using `RequireUserCheck` hook
- Redirects unauthenticated users to login page
- Prevents accessing admin dashboard without proper credentials

### Component Architecture
- Modular component structure for maintainability
- Separation of concerns (Auth, Admin components)
- Reusable form components

---

## 🚧 Future Enhancements

Potential features for future development:

- [ ] User profile management
- [ ] Role-based access control (RBAC)
- [ ] Dark mode toggle
- [ ] Dashboard analytics
- [ ] Multi-language support
- [ ] Email change confirmation flow
- [ ] Password reset functionality
- [ ] Two-factor authentication (2FA)

---

## 📝 Configuration

### Environment Variables

For production, consider using environment variables:

```env
VITE_SUPABASE_URL=your_supabase_url
VITE_SUPABASE_ANON_KEY=your_supabase_anon_key
```

Then update `supabaseClient.js`:
```javascript
const supabaseUrl = import.meta.env.VITE_SUPABASE_URL
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY
```

---

## 🤝 Contributing

Contributions are welcome! If you'd like to contribute:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request


## 👨‍💻 Author

**Hazar Bakir**

- GitHub: [@HazarBakir](https://github.com/HazarBakir)

**Built with ❤️ using React and Supabase**
