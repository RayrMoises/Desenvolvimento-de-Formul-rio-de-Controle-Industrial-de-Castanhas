// PAINEL LATERAL

const panel = document.getElementById("infoPanel");
const overlay = document.getElementById("overlay");

const openBtn = document.getElementById("openPanelBtn");
const closeBtn = document.getElementById("closePanelBtn");

openBtn.addEventListener("click", () => {

    panel.classList.add("open");
    overlay.classList.add("show");

});

closeBtn.addEventListener("click", closePanel);
overlay.addEventListener("click", closePanel);

function closePanel(){

    panel.classList.remove("open");
    overlay.classList.remove("show");

}

// BOTÕES DE TAMANHO

const sizeButtons = document.querySelectorAll(".size-btn");

sizeButtons.forEach(btn => {

    btn.addEventListener("click", () => {

        sizeButtons.forEach(b =>
            b.classList.remove("active")
        );

        btn.classList.add("active");

    });

});

// AVALIAÇÕES

document.querySelectorAll(".rating").forEach(group => {

    const items = group.querySelectorAll("span");

    items.forEach((item,index) => {

        item.addEventListener("click", () => {

            items.forEach(i =>
                i.classList.remove("active")
            );

            for(let i = 0; i <= index; i++){

                items[i].classList.add("active");

            }

            group.dataset.rating = index + 1;

        });

    });

});


// FORMULÁRIO

document
.getElementById("quebraForm")
.addEventListener("submit", e => {

    e.preventDefault();

    alert("Registro salvo (modo demonstração)");

});

const URL_API = "https://script.google.com/macros/s/AKfycbyDHlW7aB73tZ9E2pLifoX3lRSryHUWfiVP7VrsvHP0Ow6rJOzYNl7JzZ00gX-zObTD/exec";

fetch(URL_API)
    .then(response => response.json())
    .then(data => {

        const conteudo =
            document.getElementById("conteudoPainel");

        conteudo.innerHTML = `
            <div class="card-processo">
                <h4>Disponível</h4>
                <p>Castanha Dry</p>
                <strong>${data.quantidade} kg</strong>
            </div>
        `;

    })
    .catch(error => {

        console.error(error);

        document.getElementById(
            "conteudoPainel"
        ).innerHTML = `
            <div class="card-vazio">
                Erro ao carregar dados.
            </div>
        `;
    });