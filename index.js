var dados = []
 // DELETE
 function ApagaRegistro(id) {
  let _confirm = confirm("Deseja Realmente excluir este registro?")

  if(_confirm) {
    for(let i = 0; i < dados.length; i++) {
      if (dados[i].ID == id) {
        // A função splice apaga um elemento do array
          dados.splice(i, 1)
      }
    }

    PopulaTabela()
  }
 }

 //EDITAR
 function EditaRegistro(id) {
  
 }


function PopulaTabela() {
  if(Array.isArray(dados)) {

  localStorage.setItem("__dados__", JSON.stringify(dados))

    //Limpando atabela 
    $("#tblDados tbody").html("")

dados.forEach(function (item) {

  $("#tblDados tbody").append(
    `<tr>
      <td>${item.ID}</td>
      <td>${item.Nome}</td>
      <td>${item.Sobrenome}</td>
      <td>${item.DtNascimento}</td>
      <td>${item.Formacao}</td>
      <td><button type="button" class="btn btn-primary"><i class="fa fa-edit"></i></button></td>
      <td><button type="button" class="btn btn-danger" onclick="javascript:ApagaRegistro(${item.ID});"><i class="fa fa-trash"</button></td>
    </tr>`)
    })
  }
}

// CREAT
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
    let DtNascimento = new  Date($("#txtDtNascimento").val()).toLocaleDateString("pt-br", {timeZone: "UTC"})
    let Formacao = $("#txtFormacao").val()



    let registro = {}

    registro.Nome = Nome
    registro.Sobrenome = Sobrenome
    registro.DtNascimento = DtNascimento
    registro.Formacao = Formacao

    registro.ID = dados.length + 1

    // Função push adiciona um elemento ao array
    dados.push(registro)

    alert("Registro salvo com sucesso!")
    $("#modalRegistro").modal("hide")


    // Limpando os inputs
    $("#txtNome").val("")
    $("#txtSobrenome").val("")
    $("#txtDtNascimento").val("")
    $("#txtFormacao").val("")

    PopulaTabela()
  })
})

// READ
// UPDATE

