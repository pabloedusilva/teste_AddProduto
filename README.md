# teste_AddProduto



{
  "version": 2,
  "builds": [
    {
      "src": "server.js",
      "use": "@vercel/node"
    }
  ],
  "routes": [
    {
      "src": "/(.*)",
      "dest": "/server.js"
    }
  ]
}







@echo off
echo Criando estrutura de diretórios para projeto Streetwear Shop...

:: Criar diretório principal
mkdir streetwear-shop
cd streetwear-shop

:: Criar estrutura do frontend
mkdir frontend
mkdir frontend\assets
mkdir frontend\assets\css
mkdir frontend\assets\js
mkdir frontend\assets\images
mkdir frontend\assets\images\logo
mkdir frontend\assets\images\products
mkdir frontend\assets\images\icons

:: Criar arquivos HTML do frontend
echo. > frontend\index.html
echo. > frontend\produtos.html
echo. > frontend\produto-detalhe.html
echo. > frontend\carrinho.html
echo. > frontend\checkout.html
echo. > frontend\login.html
echo. > frontend\conta.html

:: Criar arquivos CSS do frontend
echo. > frontend\assets\css\style.css
echo. > frontend\assets\css\animations.css
echo. > frontend\assets\css\responsive.css

:: Criar arquivos JS do frontend
echo. > frontend\assets\js\main.js
echo. > frontend\assets\js\cart.js
echo. > frontend\assets\js\animations.js
echo. > frontend\assets\js\api.js

:: Criar estrutura do admin
mkdir admin
mkdir admin\assets
mkdir admin\assets\css
mkdir admin\assets\js
mkdir admin\assets\images

:: Criar arquivos HTML do admin
echo. > admin\index.html
echo. > admin\produtos.html
echo. > admin\estoque.html
echo. > admin\pedidos.html
echo. > admin\estatisticas.html

:: Criar estrutura do backend
mkdir backend
mkdir backend\config
mkdir backend\controllers
mkdir backend\models
mkdir backend\routes
mkdir backend\middleware

:: Criar arquivos do backend
echo. > backend\server.js
echo. > backend\config\db.js
echo. > backend\config\auth.js

:: Criar arquivos dos controllers
echo. > backend\controllers\productController.js
echo. > backend\controllers\userController.js
echo. > backend\controllers\orderController.js
echo. > backend\controllers\statsController.js

:: Criar arquivos dos models
echo. > backend\models\Product.js
echo. > backend\models\User.js
echo. > backend\models\Order.js
echo. > backend\models\Brand.js

:: Criar arquivos das rotas
echo. > backend\routes\products.js
echo. > backend\routes\users.js
echo. > backend\routes\orders.js
echo. > backend\routes\stats.js

:: Criar arquivos dos middlewares
echo. > backend\middleware\auth.js
echo. > backend\middleware\admin.js

:: Criar estrutura do banco de dados
mkdir database
echo. > database\schema.sql

:: Voltar para o diretório principal e mostrar mensagem de conclusão
cd ..
echo.
echo Estrutura de diretórios e arquivos criada com sucesso!
echo A estrutura foi criada no diretório: %cd%\streetwear-shop
echo.
pause












<!DOCTYPE html>
<html lang="pt">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Painel Administrativo</title>
    <link rel="stylesheet" href="style.css">
    <script defer src="script.js"></script>
</head>
<body>
    <!-- Cabeçalho -->
    <header>
        <div class="logo">
            <img src="img/logo.png" alt="Logo da Empresa">
            <span>Administrador</span>
        </div>
        <div class="logout">
            <a href="#"><img src="icons/logout.png" alt="Sair"></a>
        </div>
    </header>

    <!-- Conteúdo principal -->
    <main>
        <h1>Painel de Administração</h1>

        <!-- Seção para mudar o logo -->
        <section class="card">
            <div class="card-header">Mudar Logo</div>
            <div class="card-content">
                <div class="logo-preview">
                    <img src="img/logo-atual.png" alt="Logo Atual">
                </div>
                <div class="actions">
                    <button class="add-btn"><img src="icons/add.png" alt="Adicionar"></button>
                    <button class="edit-btn"><img src="icons/edit.png" alt="Editar"></button>
                </div>
            </div>
        </section>

        <!-- Seção do Catálogo -->
        <section class="card">
            <div class="card-header">Catálogo</div>
            <div class="card-content">
                <div class="category">
                    <div class="category-header">
                        <img src="img/categoria1.png" alt="Categoria">
                        <span>Chronic</span>
                        <button class="toggle-btn"><img src="icons/arrow-down.png" alt="Expandir"></button>
                    </div>
                </div>
                <div class="category">
                    <div class="category-header">
                        <img src="img/categoria2.png" alt="Categoria">
                        <span>Blessed</span>
                        <button class="toggle-btn"><img src="icons/arrow-down.png" alt="Expandir"></button>
                    </div>
                </div>
                <div class="category">
                    <div class="category-header">
                        <img src="img/categoria3.png" alt="Categoria">
                        <span>Camisas de Time</span>
                        <button class="toggle-btn"><img src="icons/arrow-down.png" alt="Expandir"></button>
                    </div>
                </div>
                <div class="actions">
                    <button class="add-btn"><img src="icons/add.png" alt="Adicionar"></button>
                    <button class="remove-btn"><img src="icons/remove.png" alt="Remover"></button>
                    <button class="view-btn"><img src="icons/view.png" alt="Visualizar"></button>
                </div>
            </div>
        </section>

        <!-- Adicionar novas marcas -->
        <div class="add-marca">
            <button class="add-marca-btn">
                <img src="icons/add.png" alt="Adicionar"> Adicionar marcas
            </button>
        </div>
    </main>
</body>
</html>






/* Reset padrão */
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Arial', sans-serif;
}

/* Cabeçalho */
header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    background: #1f2327;
    color: white;
    padding: 10px 20px;
}

.logo {
    display: flex;
    align-items: center;
}

.logo img {
    width: 50px;
    margin-right: 10px;
}

.logout img {
    width: 30px;
}

/* Corpo principal */
main {
    padding: 20px;
}

h1 {
    margin-bottom: 15px;
}

/* Cartões */
.card {
    background: #f4f4f4;
    border-radius: 5px;
    margin-bottom: 15px;
    overflow: hidden;
}

.card-header {
    background: #2d2f31;
    color: white;
    padding: 10px;
    font-weight: bold;
}

/* Conteúdo dos cartões */
.card-content {
    padding: 10px;
}

/* Pré-visualização da logo */
.logo-preview img {
    width: 120px;
    display: block;
    margin-bottom: 10px;
}

/* Categorias */
.category {
    border-bottom: 1px solid #ddd;
    padding: 8px;
}

.category-header {
    display: flex;
    align-items: center;
    justify-content: space-between;
}

.category-header img {
    width: 40px;
    margin-right: 10px;
}

/* Botões de ação */
.actions {
    display: flex;
    gap: 10px;
    margin-top: 10px;
}

button {
    cursor: pointer;
    padding: 5px 10px;
    border: none;
    border-radius: 3px;
    background: none;
}

button img {
    width: 20px;
}

/* Adicionar marcas */
.add-marca {
    text-align: center;
    margin-top: 10px;
}

.add-marca-btn {
    background: black;
    color: white;
    padding: 10px;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 5px;
}



document.addEventListener("DOMContentLoaded", () => {
    // Seleciona todos os botões de alternância das categorias
    const toggleButtons = document.querySelectorAll(".toggle-btn");

    toggleButtons.forEach(button => {
        button.addEventListener("click", () => {
            const img = button.querySelector("img");
            if (img.src.includes("arrow-down.png")) {
                img.src = "icons/arrow-up.png";
            } else {
                img.src = "icons/arrow-down.png";
            }
        });
    });

    // Ações dos botões
    const addButtons = document.querySelectorAll(".add-btn");
    const removeButtons = document.querySelectorAll(".remove-btn");

    addButtons.forEach(button => {
        button.addEventListener("click", () => {
            alert("Função de adicionar ainda não implementada!");
        });
    });

    removeButtons.forEach(button => {
        button.addEventListener("click", () => {
            alert("Função de remover ainda não implementada!");
        });
    });
});
