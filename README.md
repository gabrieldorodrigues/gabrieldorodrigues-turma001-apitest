# 🧪 Testes de Integração - API Authors (FakeRestAPI)

[![Node.js Version](https://img.shields.io/badge/node-%3E%3D20-brightgreen)](https://nodejs.org/)
[![Testes](https://img.shields.io/badge/testes-Jest%20%2B%20PactumJS-blue)](https://jestjs.io/)
[![Code Quality](https://img.shields.io/badge/qualidade-SonarQube-orange)](https://www.sonarqube.org/)

Repositório de testes de integração para validar o funcionamento dos endpoints da entidade **Authors** da API FakeRestAPI. Desenvolvido com foco em confiabilidade e boas práticas de automação.

## 📌 Tabela de Conteúdos
- [Ferramentas Utilizadas](#-ferramentas-utilizadas)
- [Endpoints Testados](#-endpoints-testados)
- [Pré-requisitos](#-pré-requisitos)
- [Configuração do Projeto](#-configuração-do-projeto)
- [Execução dos Testes](#-execução-dos-testes)
- [Padrões de Código](#-padrões-de-código)
- [Qualidade do Código](#-qualidade-do-código)
- [Links Úteis](#-links-úteis)

## 🛠 Ferramentas Utilizadas
- **Jest**: Framework de testes com suporte a paralelização e relatórios
- **PactumJS**: Biblioteca para validação precisa de respostas HTTP
- **SonarQube**: Análise estática contínua para métricas de qualidade

## 📋 Endpoints Testados
Endpoint | Método | Descrição | Cobertura
---------|--------|-----------|----------
`/api/v1/Authors` | GET | Listar todos autores | Valida status, schema e headers
`/api/v1/Authors` | POST | Criar novo autor | Testes de contrato e validações
`/api/v1/Authors/{id}` | GET | Buscar autor por ID | Casos válidos e inválidos
`/api/v1/Authors/{id}` | PUT | Atualizar autor | Verificação de idempotência
`/api/v1/Authors/{id}` | DELETE | Excluir autor | Valida exclusão e id inexistente
`/api/v1/Authors/authors/books/{idBook}` | GET | Autores por livro | Paginação e relacionamentos

## ⚙️ Pré-requisitos
- Node.js 20.x+
- npm 9.x+
- Acesso à internet (para chamadas à API)

## 🚀 Configuração do Projeto
```bash
# Clonar repositório
git clone https://github.com/gabrieldorodrigues/GabrielRodrigues-Turma001-UnitTest
cd GabrielRodrigues-Turma001-UnitTest

# Instalar dependências
npm install --omit=dev
```

## 🧪 Execução dos Testes
Comando | Descrição
--------|----------
`npm test` | Executa todos os testes em paralelo
`npm run test:watch` | Modo watch para desenvolvimento
`npm run test:coverage` | Gera relatório de cobertura
`npm run ci` | Fluxo completo (lint + format + testes)

**Saídas:**
- Relatórios no formato JUnit em `./output/reports`
- Cobertura de testes em `./output/coverage`

## 📏 Padrões de Código
```bash
# Formatação automática
npm run format

# Verificação de padrões
npm run lint

# Corrigir problemas automaticamente
npm run lint:fix
```

## 🔍 Qualidade do Código
O projeto integra-se ao SonarQube para análise contínua:
- Detecção de vulnerabilidades
- Cobertura de testes
- Complexidade ciclomática
- Duplicação de código

Configuração no arquivo `sonar-project.properties`.

## 🔗 Links Úteis
- [Fakerestapi Swagger](https://fakerestapi.azurewebsites.net/index.html)
- [PactumJS Docs](https://pactumjs.github.io/)
- [Jest Docs](https://jestjs.io/docs/getting-started)
