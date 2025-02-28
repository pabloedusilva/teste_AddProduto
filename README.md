# teste_AddProduto


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
