# Dominant Color API

API em **Node.js** que recebe a URL de uma imagem e retorna a **cor dominante** em formato hexadecimal (`#RRGGBB`), usando **Sharp**.  
Ideal para integrar em apps que precisam de cores dinâmicas a partir de imagens.

---

## 🚀 Funcionalidades

- Extrai a cor dominante de imagens via URL.
- Retorna a cor em JSON.
- Fácil de integrar com qualquer frontend.
- Simples, rápida e leve.

---

## 📦 Tecnologias

- **Node.js** – ambiente de execução JavaScript.
- **Express.js** – framework web.
- **Sharp** – processamento de imagens.

---

## 🔧 Instalação

1. Clone o repositório:
```bash
git clone https://github.com/seuusuario/dominant-color-api.git
cd dominant-color-api
````

2. Instale as dependências:

```bash
npm install
```

3. Inicie o servidor:

```bash
node index.js
```

> Por padrão, o servidor roda na porta 3000. Pode alterar no arquivo `index.js`.

---

## ⚡ Uso

### Endpoint da API

```
GET /api/color
```

**Exemplo de chamada:**

```bash
GET http://localhost:3000/api/color
BODY: {url: 'https:domain.com/image_url'}
```

**Resposta de sucesso (200 OK):**

```json
{
  "dominant": "#a83279"
}
```

**Erros comuns:**

| Código | Descrição                             |
| ------ | ------------------------------------- |
| 400    | Parâmetro `image` ausente ou inválido |
| 500    | Falha no processamento da imagem      |

---

## 📁 Estrutura de Pastas

```
dominant-color-api/
├── index.js          # Servidor Express principal
├── package.json      # Dependências e scripts
└── README.md         # Documentação do projeto
```

---

## 📝 Observações

* Funciona apenas com imagens acessíveis publicamente via URL.
* Pode ser facilmente expandida para retornar **paleta completa de cores**.
* Ideal para apps que precisam de cores dinâmicas de imagens em tempo real.
* Não exige frontend específico, pode ser consumida por qualquer app ou serviço.

---

## 📌 Licença

MIT License


