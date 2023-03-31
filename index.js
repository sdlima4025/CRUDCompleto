var dados = []
 
function PopulaTabela() {
  if(Array.isArray(dados)) {

    //Limpando atabela 
    $("#tblDados tbody").html("")

dados.forEach(function (item) {

  $("#tblDados tbody").append(
    `<tr>
      <td>${item.ID}</td>
      <td>${item.nome}</td>
      <td>${item.Sobrenome}</td>
      <td>${item.DtNascimento}</td>
      <td>${item.Formacao}</td>
    </tr>`)
    })
  }
}


// Bloco JQuery
$(function () {
  // EXECUTA AO CARREGAR DA TELA 
  dados = JSON.parse(localStorage.getItem("__dados__"))

  if (dados) {
    PopulaTabela()
  }

  $("#btnSalvar").click(function() {
    // EVENTO CLICK DO BTN SALVAR

    let Nome = $("#txtNome").val()
    let Sobrenome = $("#txtSobrenome").val()
    let DtNascimento = $("#txtDtNascimento").val()
    let Formacao = $("#txtFormacao").val()



    let registro{}
  })
})
// CREAT
// READ
// UPDATE
// DELETE
