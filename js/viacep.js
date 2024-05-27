function limpar() {
    document.getElementById('rua').value=("");
    document.getElementById('bairro').value=("");
    document.getElementById('cidade').value=("");
    document.getElementById('uf').value=("");
    document.getElementById('ibge').value=("");
}

function callback(conteudo) {
if (!("erro" in conteudo)) {
    document.getElementById('rua').value=(conteudo.logradouro);
    document.getElementById('bairro').value=(conteudo.bairro);
    document.getElementById('cidade').value=(conteudo.localidade);
    document.getElementById('uf').value=(conteudo.uf);
    document.getElementById('ibge').value=(conteudo.ibge);
        if (conteudo.uf !== "SP") {
            limpar();
            alert("CEP fora do estado de São Paulo.");
        }
}
else {
    limpar();
    alert("Não encontrado.");
}
}

function viacep(valor) {
var cep = valor.replace(/\D/g, '');
if (cep != "") {
    var validacep = /^[0-9]{8}$/;
    if(validacep.test(cep)) {
        document.getElementById('rua').value="...";
        document.getElementById('bairro').value="...";
        document.getElementById('cidade').value="...";
        document.getElementById('uf').value="...";
        document.getElementById('ibge').value="...";
        var script = document.createElement('script');
        script.src = 'https://viacep.com.br/ws/'+ cep + '/json/?callback=callback';
        document.body.appendChild(script);
    }
}
else {
    limpar();
}
};