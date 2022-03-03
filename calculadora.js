

function calcular() {
   
 /* OBJETO */
    let campanha = new Object(),
    Anuncio, Cliente, Inicio, Fim, Valor ;
    
    campanha.Anuncio = document.getElementById('inpanuncio').value
    campanha.Cliente = document.getElementById('inpcliente').value
    campanha.Inicio = document.getElementById('inpinicio').value
    campanha.Fim = document.getElementById('inpfim').value
    campanha.Valor = document.getElementById('inpvalordia').value

    
    /* lblanuncio.innerHTML = (Object.values(campanha.anuncio)); */
    lblanuncio.innerHTML = `<b>Anuncio:</b> ${campanha.Anuncio}`;
    lblcliente.innerHTML = `<b>Cliente:</b> ${campanha.Cliente}`;
    
    
    
    let campanhas = Object.assign({}, campanha);
    /* listcampanhas.innerHTML = `Campanhas: ${Object.values(campanhas)}` */





    /* CALCULO DE DATAS - QUANT DIAS */
    let ini = document.getElementById('inpinicio').value
    lblinicio.innerHTML = `<b>Inicio:</b> ${ini}`;

    let fim = document.getElementById('inpfim').value
    lblfim.innerHTML = `<b>Fim:</b> ${fim}`;

    let data1 = new Date(ini);
    let data2 = new Date(fim);
    let diff = data2 - data1;

    let dias = diff / 1000 / 60 / 60 / 24;

    campanha.valordia = document.getElementById('inpvalordia').value
    lblinvestdias.innerHTML = `<b>Valor diario:</b> R$ ${campanha.valordia}`;
    lbldias.innerHTML = `<b>Dias:</b> ${dias}`;

    

    /* CALCULOS VALOR DA CAMPANHA */
    let vd = campanha.valordia * dias;
    lbltotal.innerHTML = `<b>Valor total do Invetimento: </b> R$ ${vd}`;
    


    /* VISUALIZAÇÃO - CLIQUES - COMPARTILHAMENTOS */
    let custview = 0.03;
    let quantview = vd / custview;

    /* Quant VIEWS */
    lblvisualizacoes.innerHTML = `<b>Visualizaações:</b> ${quantview}`

    /* Quant Cliques */
    let quantcliques = (quantview / 100) * 12
    lblcliques.innerHTML = `<b>Cliques</b> ${quantcliques}`

    /* Quant Compartilhamentos */
    let cont = 0;
    let compart = 0;
    for (cont = quantcliques; cont >= 20; compart++){
       cont = cont - 20;
    }

    lblcompartilhamentos.innerHTML = `<b>Compartilhamentos:</b> ${compart}`

    

    /* Cada compartilhamento gera mais 40 novas visualizações */
    let newviews = compart * 40;
    /* teste.innerHTML = `<b>Novas Visualizações: ${newviews}</b>` */

    let quantviewtotal = quantview + newviews
    lblvisualizacoes.innerHTML = `<b>Visualizações</b> ${quantviewtotal}`




   /* CONVERTENDO PARA FORMATO JSON */
    let json = JSON.stringify(campanhas, null, 2);
    //null e 2 formtação do JSON em coluna

    console.log(json) //Visualizar Json formatado


    /* SALVAR  */
    localStorage.setItem('myStorage', JSON.stringify(json));
    var obj = JSON.parse(localStorage.getItem('myStorage'))

    testejson.innerHTML = `Teste JSON ${obj}`;

   
   let res = document.getElementById('results').innerHTML
   document.getElementById("imagem").innerHTML = res
   
}


function atualizar(){
   window.location.reload()
}