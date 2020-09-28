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

**OBS**: Eventualmente, caso o build por algum motivo não funcione, é possível executar a aplicação em modo de desenvolvimento. Basta rodar o comando:
```bash
npm run dev
```
