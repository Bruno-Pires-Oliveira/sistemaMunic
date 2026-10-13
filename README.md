# Sistema Munic

Projeto em JavaScript para gestão básica de cadastros municipais, focado em três módulos principais: usuários, licitações e itens de gênero alimentício.

Este repositório foi estruturado como uma base inicial para um sistema de controle interno, com classes responsáveis por registrar e consultar dados em memória, além de testes automatizados para validar o comportamento principal.

## Visão Geral

O sistema reúne funcionalidades voltadas à administração de informações ligadas ao ambiente municipal, com foco em:

- Cadastro e consulta de usuários;
- Registro de licitações;
- Cadastro e pesquisa de itens por gênero alimentício;
- Validação da lógica principal por meio de testes automatizados.

## Tecnologias

- JavaScript
- Node.js
- Jest (testes)
- Express (dependência presente no projeto, ainda sem uso explícito em módulos principais)

## Estrutura do Projeto

```text
.
├── src/
│   ├── Usuario.js
│   ├── Licitacao.js
│   └── GeneroAlimenticio.js
├── tests/
│   ├── Usuario.test.js
│   ├── Licitacao.test.js
│   └── GeneroAlimenticio.test.js
├── package.json
├── package-lock.json
├── .gitignore
└── README.md
```

## Módulos Principais

### 1. Usuários
Arquivo: `src/Usuario.js`

Responsável por:
- cadastrar usuários;
- buscar usuários cadastrados pelo NIP;
- remover usuários.

### 2. Licitações
Arquivo: `src/Licitacao.js`

Responsável por:
- registrar licitações;
- buscar licitações pelo número da ata;
- atualizar dados de uma licitação existente.

### 3. Gênero Alimentício
Arquivo: `src/GeneroAlimenticio.js`

Responsável por:
- cadastrar itens por categoria;
- pesquisar itens já cadastrados;
- manter os dados em memória em uma estrutura simples.

## Como executar

### Pré-requisitos

- Node.js instalado
- npm instalado

### Instalação

```bash
npm install
```

### Testes

O projeto já conta com testes unitários em Jest. Para executá-los:

```bash
npm test
```

> Observação: no momento, o script de teste está configurado como padrão do projeto e pode ser ajustado posteriormente para executar a suíte de forma mais automatizada.

## Status do Projeto

Este é um projeto em desenvolvimento inicial, com foco em lógica de domínio e regras de negócio básicas. A arquitetura ainda é simples e orientada a classes em JavaScript, com armazenamento em memória.

## Contribuição

Sinta-se à vontade para abrir issues, propor melhorias ou contribuir com novas funcionalidades. O projeto está em evolução e pode servir como base para um sistema municipal mais completo.

## Licença

Este projeto está sob a licença ISC, conforme informado no arquivo `package.json`.

## Autor

Bruno Pires Oliveira
