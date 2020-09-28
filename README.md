# Frontend do projeto de Redes, chamado Emissor de Eventos

Para acessar o backend, você pode encontrá-lo através deste link: https://github.com/igoreineck/event-emitter-server

Primeiramente, caso você ainda não possua o repositório deste projeto baixado, você pode fazer o download em: https://github.com/igoreineck/event-emitter-client.git

**OBS**: Este projeto foi desenvolvido totalmente em ambiente Linux. Portanto, é desejável que a sua execução também seja feita utilizando a mesma plataforma.

Tendo isso, basta acessar o projeto e através de um terminal, execute:
```bash
npm install
```

Este comando irá baixar todas as dependências necessárias para executar a aplicação.

### Configurações

Será necessário, definir o endereço **IP** e a **porta** nas quais o `backend` está sendo executado. É importante lembrar que para executar esta aplicação, é necessário ter o backend ativo.

Para definir estas informações, acesse o arquivo `next.config.example.js` adicione as configurações mencionadas e então, altere o nome do arquivo para `next.config.js`. **OBS**: removendo somente o **example** do nome do arquivo.

### Executando

Para melhorar a execução da aplicação, é interessante fazer um build antes de executá-la. Para fazer o build em um terminal, execute:
```bash
npm run build
```

E por fim, para rodar a aplicação também execute em um terminal:
```bash
npm start
```

### Testando

A aplicação foi definida para executar na porta **8080**. Para testá-la, basta acessar o localhost na porta especificada e você terá acesso a esta aplicação.

A parte que possui integração via WebSocket é na página principal, a de Ocorrências. Para perceber a sincronização em tempo real, você pode executar esta aplicação em várias abas dos navegador separadas ou até mesmo em uma máquina separada. Atentando-se ao IP do servidor, que foi configurado previamente.

Após cadastrar uma ocorrência, a tela de listagem das ocorrências será atualizada simultâneamente.

Em qualquer cadastro, atualização ou deleção de uma Ocorrência, a listagem principal será atualizada em todos os clientes imediatamente.

**OBS**: Eventualmente, caso o build por algum motivo não funcione, é possível executar a aplicação em modo de desenvolvimento. Basta rodar o comando:
```bash
npm run dev
```
