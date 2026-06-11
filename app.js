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

        tamanhoSelecionado =
            btn.dataset.size;

    });

});

let tamanhoSelecionado = "";

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

const URL_API ="https://script.google.com/macros/s/AKfycbzlrtcMPPUjewBRtmtGbH8v3-NhNZeBuInDamGY8Xithvd9GOHzO3MCNk8nC-HE7DFe/exec";

document
.getElementById("quebraForm")
.addEventListener("submit", async (e) => {

    e.preventDefault();

        const dados = {

            responsavel:
                document.getElementById("responsavel").value,

            lote:
                document.getElementById("lote").value,

            subLote:
                document.getElementById("sublote").value,

            data:
                document.getElementById("data").value,

            horaInicio:
                document.getElementById("horaInicio").value,

            inicioPosPausa:
                document.getElementById("inicioPosPausa").value,

            horaFinal:
                document.getElementById("horaFinal").value,

            pcdq:
                document.getElementById("pcdq").value,

            tamanho:
                tamanhoSelecionado,

            pesoInteira:
                document.getElementById("pesoInteira").value,

            pesoQuebrada:
                document.getElementById("pesoQuebrada").value,

            pesoFerida:
                document.getElementById("pesoFerida").value,

            pesoPodre:
                document.getElementById("pesoPodre").value,

            pesoAmarela:
                document.getElementById("pesoAmarela").value,

            avaliacaoVisual:
                document.querySelector(".stars").dataset.rating,

            produtividadeEquipe:
                document.querySelector(".hearts").dataset.rating,

            observacao:
                document.getElementById("observacao").value

        };

    try {

        const resposta = await fetch(URL_API, {

            method: "POST",

            body: JSON.stringify(dados)

        });

        const resultado =
            await resposta.json();

        console.log(resultado);

        if(resultado.sucesso){

            alert("Registro salvo!");

        }else{

            alert("Erro ao salvar.");

        }

    } catch(erro){

        console.error(erro);

        alert("Falha na comunicação.");

    }

});

// QUANTIDADE DISPONÍVEL

async function carregarQuantidade() {

    try {

        const resposta =
            await fetch(URL_API);

        const dados =
            await resposta.json();

        document.getElementById("conteudoPainel").innerHTML = `

            <div class="card-processo">

                <h3>Castanha Pré-Seca</h3>

                <p>
                    Disponível para quebra:
                    <strong>${dados.quantidade} kg</strong>
                </p>

            </div>

        `;

    } catch (erro) {

        console.error(erro);

        document.getElementById("conteudoPainel").innerHTML = `

            <div class="card-vazio">
                Erro ao carregar quantidade.
            </div>

        `;

    }

}

carregarQuantidade();