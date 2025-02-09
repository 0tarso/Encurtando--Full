<!-- # Encurtando -->
![Descrição da Imagem](./BannerGit.png)
**✨ Bem-vindo ao Encurtando, uma aplicação fácil de usar para encurtar URLs e gerar QR Codes! Este projeto combina tecnologias modernas para uma solução completa. ✨**

## Tecnologias Utilizadas

### Backend <br/>
![My Skills](https://go-skill-icons.vercel.app/api/icons?i=nodejs,express,firebase)<br/>
Desenvolvido com Node.js e Express, o backend gerencia rotas e segurança com Rate Limit, CORS e Firebase. Cron Jobs cuidam da limpeza de links expirados.

### Frontend <br/>
![My Skills](https://go-skill-icons.vercel.app/api/icons?i=html,css,vite,react)<br/>
O frontend utiliza Vite + React.js para o desenvolvimento rápido de interfaces dinâmicas que se adaptam tanto a web quanto ao mobile.

## ✨ Funcionalidades ✨

- Encurtamento de URLs personalizado.

- Geração de códigos QR.

- Redirecionamento para URLs originais.

- Validação e exclusão automática de links expirados.

## ⚙️ Configuração Local

#### Siga os passos abaixo para rodar o projeto em sua máquina:

**Clone o repositório:** <br/>
` git clone https://github.com/0tarso/Encurtando--Full.git ` <br/> 
`cd Encurtando `

**Configure o Backend:**<br/>
O armazenamento dos links foi feito utilizando o Firebase. Para utilizar os serviços você deve ter uma conta previamente cadastrada e um projeto criado para se conectar com essa aplicação conforme o .env.example do projeto. <br/>
`cd Backend`<br/>
`npm install`<br/>
`npm run dev`


**Configure o Frontend:** <br/>
`cd Frontend`<br/> 
`npm install`<br/>
`npm run dev`

Acesse:

- Backend: http://localhost:3000

- Frontend: http://localhost:5173

As portas utilizadas podem ser configuradas conforme sua preferência.
<hr>
🙏 Obrigado por explorar o Encurtando! 🙏