// src/utils/auth.js

const USER_KEY = "user"
const AUTH_KEY = "isAuth"
const CURRENT_USER = "currentUser"

// REGISTER
export const registerUser = (userData) => {
  localStorage.setItem(USER_KEY, JSON.stringify(userData))
}

// LOGIN CHECK
export const loginUser = (email, password) => {
  const storedUser = localStorage.getItem(USER_KEY)
  if (!storedUser) return false

  const user = JSON.parse(storedUser)

  if (user.email === email && user.password === password) {
    localStorage.setItem(AUTH_KEY, "true")
    localStorage.setItem(CURRENT_USER, user.username)
    return true
  }

  return false
}

// AUTH STATUS
export const isAuthenticated = () => {
  return localStorage.getItem(AUTH_KEY) === "true"
}

// CURRENT USER
export const getCurrentUser = () => {
  return localStorage.getItem(CURRENT_USER)
}

// LOGOUT
export const logoutUser = () => {
  localStorage.removeItem(AUTH_KEY)
  localStorage.removeItem(CURRENT_USER)
}
