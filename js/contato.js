//alert("Foi");
function compra(){
    var qtdeHospede, qtdeDiaria, slcSuite, nomeProduto, valorUnitario, adicionais = 0, valorTotal,valorDiaria,comida,i=0;
    
    slcSuite = document.getElementById("slcSuite");
    qtdeHospede = document.getElementById("qtdeHospede").value;
    slcSuiteValue = slcSuite.options[slcSuite.selectedIndex].value;
    qtdeDiaria = document.getElementById("qtdeDiaria").value;

    
    //Radio button

    //Criando vetor com os valores do radiobutton
    var comida = document.getElementsByName('rdEntrega');

    //Verificando qual caixa foi selecionada e atribuindo um valor
    if(comida[0].checked){
        rdEntrega = 60.00;
    }
    else if (comida[1].checked){
        rdEntrega = 100.00;
    }
    else{
        rdEntrega=135.00;
    }

    //Checkbox
    if (document.getElementById('translado').checked) {
        adicionais = adicionais + 50.00;
    }
    if (document.getElementById('tuor').checked == true){
        adicionais = adicionais + 100.00;
    }
    if (document.getElementById('passeio').checked == true){
        adicionais = adicionais + 100.00;
    }

    switch(slcSuiteValue){
        case "1":
            valorDiaria = 55.00;
            document.getElementById('nomeProduto').innerHTML = "Suíte para casal";
            valorUnitario = 260.90;
            document.getElementById('valorUnitario').innerHTML = "Valor por Casal:  " + "R$" +valorUnitario;
            valorTotal = (valorUnitario*qtdeHospede)+(valorDiaria*qtdeDiaria)+adicionais+rdEntrega;
            document.getElementById('diaria').innerHTML = "O valor da Diaria é de:  " + "R$" + valorDiaria;
            document.getElementById('valorTotal').innerHTML = "Valor Total:  " + "R$" + valorTotal;
            document.getElementById('adicionais').innerHTML = "Os valores adicionais são de: " + "R$" + adicionais;
            document.getElementById('comida1').innerHTML = "O valor da comida é de: " + "R$" + rdEntrega;
            break;
        case "2":
            valorDiaria = 75.00;
            document.getElementById('nomeProduto').innerHTML = "Suíte Moderna";
            valorUnitario = 399.99;
            document.getElementById('valorUnitario').innerHTML = "Valor por Pessoa  " + "R$" + valorUnitario;
            valorTotal = (valorUnitario*qtdeHospede)+(valorDiaria*qtdeDiaria)+adicionais+rdEntrega;
            document.getElementById('valorTotal').innerHTML = "Valor Total:  " +  "R$" + valorTotal;
            document.getElementById('adicionais').innerHTML = "Os valores adicionais são de: " + "R$" + adicionais;
            document.getElementById('comida1').innerHTML = "O valor da comida é de: " + "R$" + rdEntrega;
            document.getElementById('diaria').innerHTML = "O valor da Diaria é de:  " + "R$" + valorDiaria;
            break;
        case "3":
            valorDiaria = 45.00;
            valorUnitario = 200.00;
            document.getElementById('nomeProduto').innerHTML = "Suíte Solteiro";
            document.getElementById('valorUnitario').innerHTML = "Valor por Pessoa  " + "R$" + valorUnitario;
            valorTotal = (valorUnitario*qtdeHospede)+(valorDiaria*qtdeDiaria)+adicionais+rdEntrega;
            document.getElementById('valorTotal').innerHTML = "Valor Total:  " + "R$" + valorTotal;
            document.getElementById('adicionais').innerHTML = "Os valores adicionais são de: " + "R$" + adicionais;
            document.getElementById('comida1').innerHTML = "O valor da comida é de: " + "R$" + rdEntrega;
            document.getElementById('diaria').innerHTML = "O valor da Diaria é de:  " + "R$" + valorDiaria;
            break;
        case "4":
            valorDiaria = 30.00;
            valorUnitario = 150.00;
            document.getElementById('nomeProduto').innerHTML = "Suíte Simples";
            document.getElementById('valorUnitario').innerHTML = "Valor por pessoa:  " + "R$" + valorUnitario;
            valorTotal = (valorUnitario*qtdeHospede)+(valorDiaria*qtdeDiaria)+adicionais+rdEntrega;
            document.getElementById('valorTotal').innerHTML = "Valor Total:  " + "R$" + valorTotal;
            document.getElementById('adicionais').innerHTML = "Os valores adicionais são de: " + "R$" + adicionais;
            document.getElementById('comida1').innerHTML = "O valor da comida é de: " + "R$" + rdEntrega;
            document.getElementById('diaria').innerHTML = "O valor da Diaria é de:  " + "R$" + valorDiaria;
            break;
        default:
            valorUnitario = "Selecione Algum Produto";
            document.getElementById('valorUnitario').innerHTML = "Selecione uma Suíte Válida";
            break;
    }
    
}