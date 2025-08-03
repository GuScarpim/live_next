"use client"

import { useAuth } from "../providers"
import { useState, useEffect } from "react"
import { ChartBarIcon, UsersIcon, CurrencyDollarIcon } from "@heroicons/react/24/outline"

// Interface para dados do dashboard
interface DashboardData {
  users: number
  revenue: number
  orders: number
  growth: number
}

export default function DashboardPage() {
  const { user } = useAuth()
  const [data, setData] = useState<DashboardData | null>(null)
  const [isLoading, setIsLoading] = useState(true)

  // Simula carregamento de dados do dashboard
  useEffect(() => {
    const loadDashboardData = async () => {
      // Simula delay de carregamento
      await new Promise((resolve) => setTimeout(resolve, 1000))

      // Dados simulados
      setData({
        users: 1234,
        revenue: 45678,
        orders: 892,
        growth: 12.5,
      })
      setIsLoading(false)
    }

    loadDashboardData()
  }, [])

  if (isLoading) {
    return (
      <div className="space-y-6">
        <div className="animate-pulse">
          <div className="h-8 bg-gray-200 rounded w-1/4 mb-6"></div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[...Array(4)].map((_, i) => (
              <div key={i} className="bg-white p-6 rounded-lg shadow-sm">
                <div className="h-4 bg-gray-200 rounded w-3/4 mb-4"></div>
                <div className="h-8 bg-gray-200 rounded w-1/2"></div>
              </div>
            ))}
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="space-y-8">
      {/* Cabeçalho do dashboard */}
      <div className="bg-white rounded-lg shadow-sm p-6">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">Dashboard</h1>
        <p className="text-gray-600">Bem-vindo de volta, {user?.name}! Aqui está um resumo dos seus dados.</p>
      </div>

      {/* Cards de métricas */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <div className="bg-white rounded-lg shadow-sm p-6">
          <div className="flex items-center">
            <div className="p-3 rounded-full bg-blue-100">
              <UsersIcon className="h-6 w-6 text-blue-600" />
            </div>
            <div className="ml-4">
              <p className="text-sm font-medium text-gray-600">Total de Usuários</p>
              <p className="text-2xl font-bold text-gray-900">{data?.users.toLocaleString("pt-BR")}</p>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-sm p-6">
          <div className="flex items-center">
            <div className="p-3 rounded-full bg-green-100">
              <CurrencyDollarIcon className="h-6 w-6 text-green-600" />
            </div>
            <div className="ml-4">
              <p className="text-sm font-medium text-gray-600">Receita Total</p>
              <p className="text-2xl font-bold text-gray-900">R$ {data?.revenue.toLocaleString("pt-BR")}</p>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-sm p-6">
          <div className="flex items-center">
            <div className="p-3 rounded-full bg-yellow-100">
              <ChartBarIcon className="h-6 w-6 text-yellow-600" />
            </div>
            <div className="ml-4">
              <p className="text-sm font-medium text-gray-600">Pedidos</p>
              <p className="text-2xl font-bold text-gray-900">{data?.orders.toLocaleString("pt-BR")}</p>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-sm p-6">
          <div className="flex items-center">
            <div className="p-3 rounded-full bg-purple-100">
              {/* <TrendingUpIcon className="h-6 w-6 text-purple-600" /> */}
              aa
            </div>
            <div className="ml-4">
              <p className="text-sm font-medium text-gray-600">Crescimento</p>
              <p className="text-2xl font-bold text-gray-900">+{data?.growth}%</p>
            </div>
          </div>
        </div>
      </div>

      {/* Seção de funcionalidades protegidas */}
      <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-lg p-6 border border-blue-200">
        <h2 className="text-xl font-bold text-gray-900 mb-4">🔒 Área Protegida por Middleware</h2>
        <div className="prose text-gray-700">
          <p className="mb-4">
            Esta página é protegida pelo <strong>middleware de autenticação</strong>
            configurado no arquivo <code>middleware.ts</code>.
          </p>
          <ul className="list-disc list-inside space-y-2">
            <li>
              <strong>Verificação automática:</strong> Middleware verifica token de autenticação
            </li>
            <li>
              <strong>Redirecionamento:</strong> Usuários não autenticados são redirecionados para login
            </li>
            <li>
              <strong>Headers personalizados:</strong> Middleware adiciona headers de segurança
            </li>
            <li>
              <strong>Edge Runtime:</strong> Execução otimizada na borda da rede
            </li>
          </ul>
        </div>
      </div>

      {/* Informações técnicas */}
      <div className="bg-white rounded-lg shadow-sm p-6">
        <h3 className="text-lg font-semibold text-gray-900 mb-4">Detalhes Técnicos do Middleware</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-sm">
          <div>
            <h4 className="font-medium text-gray-900 mb-2">Funcionalidades:</h4>
            <ul className="text-gray-600 space-y-1">
              <li>• Autenticação baseada em cookies</li>
              <li>• Redirecionamento automático</li>
              <li>• Headers de segurança</li>
              <li>• Configuração de CORS para APIs</li>
            </ul>
          </div>
          <div>
            <h4 className="font-medium text-gray-900 mb-2">Benefícios:</h4>
            <ul className="text-gray-600 space-y-1">
              <li>• Execução antes do renderização</li>
              <li>• Performance otimizada</li>
              <li>• Controle centralizado de acesso</li>
              <li>• Compatível com Edge Runtime</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}
