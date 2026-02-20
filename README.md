# 🎭 RolePlay API

> Uma API robusta e moderna para gerenciamento de roleplay construída com **AdonisJS 5**, **PostgreSQL** e **TypeScript**.

[![Node.js](https://img.shields.io/badge/Node.js-v21+-green?style=flat-square&logo=node.js)](https://nodejs.org/)
[![AdonisJS](https://img.shields.io/badge/AdonisJS-5.9-red?style=flat-square&logo=adonis&logoColor=white)](https://adonisjs.com/)
[![PostgreSQL](https://img.shields.io/badge/PostgreSQL-16-blue?style=flat-square&logo=postgresql&logoColor=white)](https://www.postgresql.org/)
[![Docker](https://img.shields.io/badge/Docker-Ready-00aec9?style=flat-square&logo=docker&logoColor=white)](https://www.docker.com/)
[![License](https://img.shields.io/badge/License-MIT-yellow?style=flat-square)](LICENSE)

---

## 📋 Pré-requisitos

- **Node.js** v21+
- **Docker** & **Docker Compose**
- **npm** ou **yarn**

---

## 🚀 Quick Start

### 1️⃣ Clonar o Repositório

```bash
git clone <seu-repositorio>
cd roleplay-api
```

### 2️⃣ Instalar Dependências

```bash
npm install
```

### 3️⃣ Iniciar Tudo (Banco + Migrations + Servidor)

```bash
npm run dev
```

Pronto! A API está rodando em `http://localhost:3333` 🎉

---

## 📚 Comandos Disponíveis

### Desenvolvimento

| Comando              | Descrição                                                 |
| -------------------- | --------------------------------------------------------- |
| `npm run dev`        | Inicia Docker, migrations e servidor (tudo automático) ⚡ |
| `npm run dev:server` | Apenas o servidor (para quando Docker já está pronto)     |
| `npm run build`      | Compila TypeScript → JavaScript                           |
| `npm run lint`       | Verifica linting com ESLint                               |
| `npm run format`     | Formata código com Prettier                               |

### Banco de Dados

| Comando                     | Descrição                 |
| --------------------------- | ------------------------- |
| `docker-compose up -d`      | Inicia o banco PostgreSQL |
| `docker-compose down`       | Para o banco              |
| `docker-compose down -v`    | Para e remove dados       |
| `npm run migrations:run`    | Roda as migrations        |
| `npm run migrations:create` | Cria uma nova migration   |

### Testes

| Comando        | Descrição                |
| -------------- | ------------------------ |
| `npm run test` | Executa testes unitários |

---

## 🔧 Debug no VS Code

O projeto já vem configurado para debug avançado:

1. **Pressione `F5`** para iniciar a sessão de debug
2. **Defina breakpoints** clicando na margem esquerda do editor
3. **Inspecione variáveis** no painel de Debug
4. O debugger pausará automaticamente nos breakpoints configurados

![VS Code Debug](https://img.shields.io/badge/VS%20Code-Debug%20Ready-blue?style=flat-square)

---

## 🐳 Docker Compose

O projeto usa **PostgreSQL 16** em um container Docker com dados persistentes:

```yaml
# Credenciais padrão
Database: roleplay_db
User: roleplay_user
Password: roleplay_password
Port: 5432
```

### Comandos Docker Úteis

```bash
# Ver status dos containers
docker-compose ps

# Ver logs em tempo real
docker-compose logs postgres -f

# Parar o banco
docker-compose down

# Parar e remover dados
docker-compose down -v
```

---

## 📊 Visualizar Banco de Dados

Recomendamos usar a extensão **SQLTools** do VS Code para gerenciar o banco visualmente:

### Instalação

1. Abra a aba de Extensions (Ctrl+Shift+X)
2. Busque por **SQLTools** e instale
3. Depois instale **SQLTools PostgreSQL/Cockroach Driver**

### Configurar Conexão

1. Clique no ícone SQLTools na sidebar
2. Clique em **"Add Connection"**
3. Escolha **PostgreSQL**
4. Preencha com os dados do `.env`:

```
Host: localhost
Port: 5432
User: roleplay_user
Password: roleplay_password
Database: roleplay_db
```

Pronto! Você conseguirá visualizar e gerenciar o banco direto do VS Code! 🎯

---

## 📁 Estrutura do Projeto

```
roleplay-api/
├── app/
│   ├── Controllers/          # Controladores HTTP
│   ├── Models/               # Modelos Lucid ORM
│   ├── Services/             # Lógica de negócio
│   ├── Repositories/         # Acesso a dados
│   ├── Validators/           # Validações
│   └── Exceptions/           # Exceções customizadas
├── database/
│   ├── migrations/           # Migrações do banco
│   └── factories/            # Factories de seed
├── config/                   # Configurações
├── start/
│   ├── routes.ts             # Definição de rotas
│   └── kernel.ts             # Middleware
├── scripts/
│   └── dev.sh                # Script de inicialização
├── build/                    # Build compilado (gerado)
├── docker-compose.yml        # Configuração Docker
├── .env.example              # Exemplo de variáveis
├── .env                      # Variáveis de ambiente (local)
└── README.md
```

---

## 🔐 Variáveis de Ambiente

Crie um arquivo `.env` baseado em `.env.example`:

```env
# Server
PORT=3333
HOST=0.0.0.0
NODE_ENV=development
APP_KEY=S1S-6CBqG8qDTG0MkBSKHjrv29XAhSuk
DRIVE_DISK=local

# Database
DB_CONNECTION=postgres
DB_HOST=localhost
DB_PORT=5432
DB_USER=roleplay_user
DB_PASSWORD=roleplay_password
DB_NAME=roleplay_db
```

---

## 🛠️ Stack Tecnológico

| Tecnologia     | Versão | Descrição            |
| -------------- | ------ | -------------------- |
| **AdonisJS**   | 5.9    | Framework web        |
| **TypeScript** | 4.2+   | Linguagem            |
| **PostgreSQL** | 16     | Banco de dados       |
| **Lucid ORM**  | 15     | ORM integrado        |
| **Joi**        | Latest | Validação de dados   |
| **Docker**     | Latest | Containerização      |
| **Japa**       | 4.0    | Framework de testes  |
| **ESLint**     | 8.40   | Linting              |
| **Prettier**   | 3.7    | Formatação de código |

---

## 🚀 Próximos Passos

- [ ] Implementar autenticação JWT
- [ ] Adicionar endpoints GET, PUT, DELETE para usuários
- [ ] Criar testes unitários e de integração
- [ ] Documentação com Swagger/OpenAPI
- [ ] CI/CD Pipeline (GitHub Actions)
- [ ] Deploy em produção (Heroku/AWS/Railway)
- [ ] Rate limiting
- [ ] Logging estruturado

---

## 🤝 Contribuindo

Contribuições são bem-vindas!

1. Faça um fork do projeto
2. Crie uma branch para sua feature (`git checkout -b feature/AmazingFeature`)
3. Commit suas mudanças (`git commit -m 'Add some AmazingFeature'`)
4. Push para a branch (`git push origin feature/AmazingFeature`)
5. Abra um Pull Request

---

## 📄 Licença

Este projeto está licenciado sob a **MIT License** - veja o arquivo [LICENSE](LICENSE) para mais detalhes.

---

## 👨‍💻 Autor

Desenvolvido com ❤️ para o curso de **RolePlay API**

---

## 📞 Suporte

- 📖 [Documentação AdonisJS](https://docs.adonisjs.com/)
- 🐘 [Documentação PostgreSQL](https://www.postgresql.org/docs/)
- 🐳 [Docker Docs](https://docs.docker.com/)

---

**Pronto para codar?** Execute `npm run dev` e comece! 🚀
