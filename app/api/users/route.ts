import { type NextRequest, NextResponse } from "next/server"

// Interface para dados do usuário
interface User {
  id: number
  name: string
  email: string
  createdAt: string
}

// Simulação de banco de dados em memória
const users: User[] = [
  {
    id: 1,
    name: "João Silva",
    email: "joao@example.com",
    createdAt: new Date().toISOString(),
  },
  {
    id: 2,
    name: "Maria Santos",
    email: "maria@example.com",
    createdAt: new Date().toISOString(),
  },
]

// GET - Buscar todos os usuários
export async function GET(request: NextRequest) {
  try {
    // Simula delay de rede
    await new Promise((resolve) => setTimeout(resolve, 500))

    // Obtém parâmetros de query para paginação
    const { searchParams } = new URL(request.url)
    const page = Number.parseInt(searchParams.get("page") || "1")
    const limit = Number.parseInt(searchParams.get("limit") || "10")

    // Calcula paginação
    const startIndex = (page - 1) * limit
    const endIndex = startIndex + limit
    const paginatedUsers = users.slice(startIndex, endIndex)

    // Retorna resposta com dados paginados
    return NextResponse.json({
      users: paginatedUsers,
      pagination: {
        page,
        limit,
        total: users.length,
        totalPages: Math.ceil(users.length / limit),
      },
      timestamp: new Date().toISOString(),
    })
  } catch (error) {
    console.error("Erro ao buscar usuários:", error)
    return NextResponse.json({ error: "Erro interno do servidor" }, { status: 500 })
  }
}

// POST - Criar novo usuário
export async function POST(request: NextRequest) {
  try {
    // Parse do corpo da requisição
    const body = await request.json()

    // Validação básica
    if (!body.name || !body.email) {
      return NextResponse.json({ error: "Nome e email são obrigatórios" }, { status: 400 })
    }

    // Verifica se email já existe
    const existingUser = users.find((user) => user.email === body.email)
    if (existingUser) {
      return NextResponse.json({ error: "Email já está em uso" }, { status: 409 })
    }

    // Cria novo usuário
    const newUser: User = {
      id: users.length + 1,
      name: body.name,
      email: body.email,
      createdAt: new Date().toISOString(),
    }

    // Adiciona à lista de usuários
    users.push(newUser)

    // Retorna usuário criado
    return NextResponse.json(newUser, { status: 201 })
  } catch (error) {
    console.error("Erro ao criar usuário:", error)
    return NextResponse.json({ error: "Erro interno do servidor" }, { status: 500 })
  }
}

// PUT - Atualizar usuário existente
export async function PUT(request: NextRequest) {
  try {
    const body = await request.json()
    const { searchParams } = new URL(request.url)
    const userId = Number.parseInt(searchParams.get("id") || "0")

    // Encontra usuário
    const userIndex = users.findIndex((user) => user.id === userId)
    if (userIndex === -1) {
      return NextResponse.json({ error: "Usuário não encontrado" }, { status: 404 })
    }

    // Atualiza dados do usuário
    users[userIndex] = {
      ...users[userIndex],
      name: body.name || users[userIndex].name,
      email: body.email || users[userIndex].email,
    }

    return NextResponse.json(users[userIndex])
  } catch (error) {
    console.error("Erro ao atualizar usuário:", error)
    return NextResponse.json({ error: "Erro interno do servidor" }, { status: 500 })
  }
}

// DELETE - Deletar usuário
export async function DELETE(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url)
    const userId = Number.parseInt(searchParams.get("id") || "0")

    // Encontra usuário
    const userIndex = users.findIndex((user) => user.id === userId)
    if (userIndex === -1) {
      return NextResponse.json({ error: "Usuário não encontrado" }, { status: 404 })
    }

    // Remove usuário
    const deletedUser = users.splice(userIndex, 1)[0]

    return NextResponse.json({
      message: "Usuário deletado com sucesso",
      user: deletedUser,
    })
  } catch (error) {
    console.error("Erro ao deletar usuário:", error)
    return NextResponse.json({ error: "Erro interno do servidor" }, { status: 500 })
  }
}
