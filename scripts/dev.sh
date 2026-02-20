#!/bin/bash

echo "🚀 Iniciando RolePlay API..."

# Cores para output
BLUE='\033[0;34m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
NC='\033[0m' # No Color

echo -e "${BLUE}📦 Iniciando banco de dados...${NC}"
docker compose up -d

echo -e "${BLUE}⏳ Aguardando banco ficar pronto...${NC}"
sleep 3

# Verificar se o banco está rodando
for i in {1..30}; do
  if docker compose exec -T postgres pg_isready -U roleplay_user -d roleplay_db > /dev/null 2>&1; then
    echo -e "${GREEN}✓ Banco de dados pronto!${NC}"
    break
  fi
  echo "Tentativa $i/30..."
  sleep 1
done

echo -e "${BLUE}📋 Rodando migrations...${NC}"
npm run build > /dev/null 2>&1
node ace migration:run

echo -e "${GREEN}✓ Tudo pronto!${NC}"
echo -e "${YELLOW}🎮 Iniciando servidor em modo desenvolvimento...${NC}"
echo ""

npm run dev:server
