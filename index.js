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
  $("#modalRegistro").modal("show")

  dados.forEach(function(item) {
    if(item.ID == id) {
      $("#hdID").val(item.ID)
      $("#txtNome").val(item.Nome)
      $("#txtSobrenome").val(item.Sobrenome)
      $("#txtDtNascimento").val(item.DtNascimento.substr(6, 4) + "-" + item.DtNascimento.substr(3, 2) + "-" + item.DtNascimento.substr(0,2))
      $("#txtFormacao").val(item.Formacao) 
    }
  })
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
      <td><button type = "button" class = "btn btn-primary" onclick = "javascript:EditaRegistro(${item.ID});"><i class="fa fa-edit"></i></button></td>
      <td><button type = "button" class = "btn btn-danger" onclick = "javascript:ApagaRegistro(${item.ID});"><i class="fa fa-trash"</button></td>
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
    let _id = $("#hdID").val()
    let Nome = $("#txtNome").val()
    let Sobrenome = $("#txtSobrenome").val()
    let DtNascimento = new  Date($("#txtDtNascimento").val()).toLocaleDateString("pt-br", {timeZone: "UTC"})
    let Formacao = $("#txtFormacao").val()

    // Função push adiciona um elemento ao array
    if(!_id || _id == "0") {
      let registro = {}
      registro.Nome = Nome
      registro.Sobrenome = Sobrenome
      registro.DtNascimento = DtNascimento
      registro.Formacao = Formacao

      registro.ID = dados.length + 1
      dados.push(registro)
    // no else a ação de edção
    }else {
      dados.forEach(function(item) {
        if(item.ID == _id) {
          item.Nome = Nome
          item.Sobrenome = Sobrenome
          item.DtNascimento = DtNascimento
          item.Formacao = Formacao

        }
      })
    }

    alert("Registro salvo com sucesso!")
    $("#modalRegistro").modal("hide")


    // Limpando os inputs
    $("#hdID").val("0")
    $("#txtNome").val("")
    $("#txtSobrenome").val("")
    $("#txtDtNascimento").val("")
    $("#txtFormacao").val("")

    PopulaTabela()
  })
})

// READ
// UPDATE

