# Gerenciador de Serviços para Oficna Mecânica

Este projeto é uma aplicação em React que permite o controle e gerenciamento de orçamento de serviços com suas respectivas categorias (Problemas no Motor, Problemas Elétricos, Problemas na Suspensão, Problemas nos Freios,  Problemas no Sistema de Escape). Utiliza uma API fake para persistência dos dados, simulada com JSON Server.
[]!(ui.gif)
## Funcionalidades

Cadastro de Serviços: Adicione novos serviços, inserindo nome, placa do veículo, orçamento e categoria.

Gerenciamento de Serviços: Adicione sub serviços aos serviços, especificando nome, custo e descrição. Os custos desses sub serviço integram ao valor total e é constamente comparado ao valor do orçamento total onde, o valor total não pode ser superior a o valor do orçamento total.




## Tecnologias Utilizadas

React: Para construção da interface do usuário.

JSON Server: Simulando uma API para persistência dos dados.

CSS Modules: Para estilização dos componentes de forma modular e isolada.

Fetch API: Para fazer requisições à API fake.

## Como Executar

Pré-requisitos

Node.js instalado na máquina.

npm ou yarn para gerenciamento de pacotes.

## Passos para execução

Clone o repositório:

```bash

git clone https://github.com/lucasvieiraz/ControleFiscalDeProjetos_react.git
```

Instale as dependências do projeto:

```bash

npm install
```

Inicie o JSON Server (simula uma API na porta 5000):

```bash

npx json-server --watch db.json --port 5000
```
Execute a aplicação React:

```bash

npm start
```
