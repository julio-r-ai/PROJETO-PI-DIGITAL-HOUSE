const myItens = {
    itens:[

        {
            id: 1,
            descricao: 'bolo',
            preco: '15.00'
        }

    ]
};

//CREATE
function criarPost(dados){
     myItens.itens.push({
        id: myItens.itens.length +1,
        descricao: dados.descricao, 
        preco: dados.preco
    });   
};

criarPost({descricao: 'Bolo de chocolate', preco: '24.50'});

//READ
function pegaPosts(){
    return myItens.itens;
}

//UPDATE
function atualizaContentPost(id, novoContenteudo){
     const postQueVaiSerAtualizado = pegaPosts().find((itens)=>{
        return itens.id === id;
     })

     postQueVaiSerAtualizado.preco= novoContenteudo
}

//DELETE
function apagaPost(id){
    const listaDePostsAtualizada = pegaPosts().filter((postAtual)=>{
        return postAtual.id != id;
    })
    myItens.itens = listaDePostsAtualizada
}
