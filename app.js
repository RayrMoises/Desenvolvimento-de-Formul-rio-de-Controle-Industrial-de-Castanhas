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

// DADOS DE TESTE

const disponiveis = `
<div class="card-processo">
<h4>M014</h4>
<p>Sub-lote 1</p>
<strong>1500 kg</strong>
</div>

<div class="card-processo">
<h4>M015</h4>
<p>Sub-lote 2</p>
<strong>2300 kg</strong>
</div>

<div class="card-processo">
<h4>M016</h4>
<p>Sub-lote 1</p>
<strong>980 kg</strong>
</div>
`;

const andamento = `
<div class="card-processo">
<h4>M014</h4>
<p>Quebra Mecânica</p>
<strong>Em andamento</strong>
</div>

<div class="card-processo">
<h4>M015</h4>
<p>Classificação</p>
<strong>Em andamento</strong>
</div>

<div class="card-processo">
<h4>M016</h4>
<p>Secagem</p>
<strong>Em andamento</strong>
</div>
`;

const conteudo = document.getElementById("conteudoPainel");

const btnDisponivel =
document.getElementById("btnDisponivel");

const btnAndamento =
document.getElementById("btnAndamento");

btnDisponivel.addEventListener("click", () => {

    btnDisponivel.classList.add("active-panel");
    btnAndamento.classList.remove("active-panel");

    conteudo.innerHTML = disponiveis;

});

btnAndamento.addEventListener("click", () => {

    btnAndamento.classList.add("active-panel");
    btnDisponivel.classList.remove("active-panel");

    conteudo.innerHTML = andamento;

});

// FORMULÁRIO

document
.getElementById("quebraForm")
.addEventListener("submit", e => {

    e.preventDefault();

    alert("Registro salvo (modo demonstração)");

});