let pessoas, index;

function cadPessoa (nome, sobreNome, email, sexo, profissao){
  
    pessoas = document.getElementById("tbpessoas")

    let qtdlinhas = pessoas.rows.length;
    let linha = pessoas.insertRow(qtdlinhas);
    let linhaParam; 

    let cellCodigo = linha.insertCell(0);
    let cellNome = linha.insertCell(1);
    let cellSobreNome = linha.insertCell(2);
    let cellEmail = linha.insertCell(3);
    let cellSexo = linha.insertCell(4);
    let cellProfissao = linha.insertCell(5);

    cellCodigo.innerHTML = qtdlinhas;
    cellNome.innerHTML = nome;
    cellSobreNome.innerHTML = sobreNome;
    cellEmail.innerHTML = email;
    cellSexo.innerHTML = sexo;
    cellProfissao.innerHTML = profissao;

    preencherCamposForm();

}

function altPessoa(nome,sobreNome,email,sexo,profissao){
    pessoas.rows[index].cells[1].innerHTML = nome;
    pessoas.rows[index].cells[2].innerHTML = sobreNome;
    pessoas.rows[index].cells[3].innerHTML = email;
    pessoas.rows[index].cells[4].innerHTML = sexo;
    pessoas.rows[index].cells[5].innerHTML = profissao;
}

function preencherCamposForm(){
    for (let i = 0; i < pessoas.rows.length; i++) {
        
        pessoas.rows[i].onclick = function(){
            index = this.rowIndex;
            document.getElementById("txtCodigo").value = pessoas.rows[index].cells[0].innerText;
            document.getElementById("txtNome").value = pessoas.rows[index].cells[1].innerText;
            document.getElementById("txtSobreNome").value = pessoas.rows[index].cells[2].innerText;
            document.getElementById("txtEmail").value = pessoas.rows[index].cells[3].innerText;
            document.getElementById("txtSexo").value = pessoas.rows[index].cells[4].innerText;
            document.getElementById("txtProfissao").value = pessoas.rows[index].cells[5].innerText;
        }
        
    }
}

function delRegistro(){
    for (let i = 0; i < pessoas.rows.length; i++) {
        if(index == 1) {
            pessoas.deleteRow(index);
            document.getElementById('txtCodigo').value='';
            document.getElementById('txtNome').value='';
            document.getElementById('txtSobreNome').value='';
            document.getElementById('txtEmail').value='';
            document.getElementById('txtSexo').value='';
            document.getElementById('txtProfissao').value='';
            return;
        }
        
    }
}