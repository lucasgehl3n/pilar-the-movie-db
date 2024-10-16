# Sobre o projeto
Olá, eu sou o Lucas. Obrigado por chegar até aqui e se interessar no meu projeto.
Este projeto contempla um front-end desenvolvido com Nuxt com o objetivo de ser uma listagem de filmes que busca os registros das APIs do site The Movie DB. 
Além disso, este projeto conta com a camada de integração que realiza as requisições para o site (BFF). 

# Como executar
- O projeto é dividido em dois diretórios: BFF e client. É necessário instalar as dependências em ambos os diretórios e executá-los simultâneamente. As sessões a seguir detalham melhor cada um dos diretórios, mas para rodá-los faça o seguinte:

### BFF

1. **Entrar no BFF**:
    ```sh
    cd BFF
    ```

2. **Instalar dependências**:
    ```sh
    npm i
    ```

3. **Rodar o servidor em modo de desenvolvimento**:
    ```sh
    npm run dev
    ```

4. **Executar os testes**:
    ```sh
    npm run test
    ```

### Client (EM OUTRO TERMINAL)

1. **Entrar no client**:
    ```sh
    cd client
    ```

2. **Instalar dependências**:
    ```sh
    npm i
    ```

3. **Rodar o servidor em modo de desenvolvimento**:
    ```sh
    npm run dev
    ```

4. **Executar os testes**:
    ```sh
    npm run test
    ```



# Sobre o projeto

### Pasta BFF

Esta pasta segue o design pattern Backend for Frontend (BFF). Ele serve como uma camada intermediária entre o frontend e os serviços (neste caso, a API do The Movie DB). 

#### Estrutura de Pastas

- **config**: Contém arquivos de configuração, como a configuração do cliente Axios.
- **controller**: Contém os controladores que lidam com a lógica de negócios.
- **gateways**: Contém os gateways que lidam com a comunicação com serviços externos.
- **middlewares**: Contém middlewares que serão utilizados em uma ou mais rotas (neste caso, o middleware de tratamento de erros).
- **routes**: Contém as definições de rotas.
- **tests**: Contém os testes unitários.

#### Principais Tecnologias Usadas

- **Node.js**
- **Express**
- **Axios**: Cliente HTTP para fazer requisições a serviços externos.
- **Nodemon**: Permite o recarregamento automático durante o desenvolvimento.
- **Dotenv**: Carrega variáveis de ambiente a partir de um arquivo `.env`.
- **Vitest**: Framework para testes unitários.


### Projeto Client

Este projeto é um frontend desenvolvido com Nuxt.js e Vue 3. 

#### Principais Tecnologias Usadas

- **Nuxt.js**
- **Tailwind CSS**:
- **Flowbite**: Biblioteca de componentes UI para Tailwind CSS.
- **Axios**: Cliente HTTP
- **Vitest**: Framework para testes unitários.
- **Pinia**: Biblioteca de gerenciamento de estado para Vue.js.
- **SCSS**: Extensão de CSS com funcionalidades adicionais.
- **Vue 3**

#### Estrutura de Pastas

- **components**: Contém componentes reutilizáveis.
- **constants**: Contém valores fixos que pertencem apenas ao frontend, como URLs.
- **layouts**: Contém layouts padrão carregados em todas as URLs.
- **pages**: Contém páginas e rotas, que por sua vez são definidas automaticamente, através do nome dos arquivos e diretórios.
- **services**: Contém chamadas de APIs do BFF.
- **stores**: Contém stores gerenciados pelo Pinia.
- **test**: Contém os testes unitários.
