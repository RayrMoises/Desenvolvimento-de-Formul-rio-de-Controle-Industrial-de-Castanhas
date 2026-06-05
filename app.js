// Tamanho

const sizeButtons = document.querySelectorAll('.size-btn');

sizeButtons.forEach(btn => {

    btn.addEventListener('click', () => {

        sizeButtons.forEach(b =>
            b.classList.remove('active')
        );

        btn.classList.add('active');

    });

});

// Avaliações

document.querySelectorAll('.rating').forEach(group => {

    const items = group.querySelectorAll('span');

    items.forEach((item,index) => {

        item.addEventListener('click', () => {

            items.forEach(i =>
                i.classList.remove('active')
            );

            for(let i=0;i<=index;i++){
                items[i].classList.add('active');
            }

            group.dataset.rating = index + 1;

        });

    });

});

// Simulação do painel

const disponiveis = `
<div class="card-processo">
<h6>M014</h6>
<p>Sub-lote 1</p>
<strong>1500 kg</strong>
</div>

<div class="card-processo">
<h6>M015</h6>
<p>Sub-lote 2</p>
<strong>2300 kg</strong>
</div>
`;

const andamento = `
<div class="card-processo">
<h6>M014</h6>
<p>Quebra Mecânica</p>
<strong>Em andamento</strong>
</div>

<div class="card-processo">
<h6>M015</h6>
<p>Classificação</p>
<strong>Em andamento</strong>
</div>
`;

const conteudo = document.getElementById('conteudoPainel');

document
.getElementById('btnDisponivel')
.addEventListener('click', () => {

    conteudo.innerHTML = disponiveis;

});

document
.getElementById('btnAndamento')
.addEventListener('click', () => {

    conteudo.innerHTML = andamento;

});