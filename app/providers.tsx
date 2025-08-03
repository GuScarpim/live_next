"use client"

import { createContext, useContext, useState, useEffect, type ReactNode } from "react"

// Interface para o contexto de autenticação
interface AuthContextType {
  isAuthenticated: boolean
  user: { name: string; email: string } | null
  login: (email: string, password: string) => Promise<boolean>
  logout: () => void
}

// Interface para o contexto de tema
interface ThemeContextType {
  theme: "light" | "dark"
  toggleTheme: () => void
}

// Criação dos contextos
const AuthContext = createContext<AuthContextType | undefined>(undefined)
const ThemeContext = createContext<ThemeContextType | undefined>(undefined)

// Provider de autenticação
function AuthProvider({ children }: { children: ReactNode }) {
  const [isAuthenticated, setIsAuthenticated] = useState(false)
  const [user, setUser] = useState<{ name: string; email: string } | null>(null)

  // Verifica autenticação ao carregar a aplicação
  useEffect(() => {
    const token = document.cookie.includes("auth-token=authenticated")
    if (token) {
      setIsAuthenticated(true)
      setUser({ name: "Usuário Demo", email: "demo@example.com" })
    }
  }, [])

  // Função de login simulada
  const login = async (email: string, password: string): Promise<boolean> => {
    // Simula chamada de API
    await new Promise((resolve) => setTimeout(resolve, 1000))

    // Validação simples para demonstração
    if (email === "demo@example.com" && password === "demo123") {
      document.cookie = "auth-token=authenticated; path=/"
      setIsAuthenticated(true)
      setUser({ name: "Usuário Demo", email })
      return true
    }
    return false
  }

  // Função de logout
  const logout = () => {
    document.cookie = "auth-token=; path=/; expires=Thu, 01 Jan 1970 00:00:01 GMT"
    setIsAuthenticated(false)
    setUser(null)
  }

  return <AuthContext.Provider value={{ isAuthenticated, user, login, logout }}>{children}</AuthContext.Provider>
}

// Provider de tema
function ThemeProvider({ children }: { children: ReactNode }) {
  const [theme, setTheme] = useState<"light" | "dark">("light")

  // Carrega tema salvo do localStorage
  useEffect(() => {
    const savedTheme = localStorage.getItem("theme") as "light" | "dark"
    if (savedTheme) {
      setTheme(savedTheme)
    }
  }, [])

  // Função para alternar tema
  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light"
    setTheme(newTheme)
    localStorage.setItem("theme", newTheme)
  }

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      <div className={theme === "dark" ? "dark" : ""}>{children}</div>
    </ThemeContext.Provider>
  )
}

// Hooks personalizados para usar os contextos
export const useAuth = () => {
  const context = useContext(AuthContext)
  if (context === undefined) {
    throw new Error("useAuth deve ser usado dentro de um AuthProvider")
  }
  return context
}

export const useTheme = () => {
  const context = useContext(ThemeContext)
  if (context === undefined) {
    throw new Error("useTheme deve ser usado dentro de um ThemeProvider")
  }
  return context
}

// Provider principal que combina todos os providers
export function Providers({ children }: { children: ReactNode }) {
  return (
    <ThemeProvider>
      <AuthProvider>{children}</AuthProvider>
    </ThemeProvider>
  )
}
