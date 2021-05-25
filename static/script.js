function Clicar(){
    var inicio = Number(document.getElementById('num1').value)
    var fim = Number(document.getElementById('num2').value)
    var cont = Number(document.getElementById('cont').value)
    var res = document.getElementById('res')
    if(cont == 0){
        res.innerHTML = `[ERRO] COLOQUE O VALOR DO CONTADOR`
    }else{
        res.innerHTML = ``
        if(inicio<fim){
            for(inicio; inicio<=fim; inicio+=cont){
                if(inicio != fim){
                    res.innerHTML += String(inicio) + `\u{1F449}`
                }else{
                    res.innerHTML += String(inicio) + `\u{270B}`
                }
            }
        }else{
            for(inicio; inicio>=fim; inicio-=cont){
                if(inicio != fim){
                    res.innerHTML += String(inicio) + `\u{1F449}`
                }else{
                    res.innerHTML += String(inicio) + `\u{270B}`
                }
            }
        }
    }
}