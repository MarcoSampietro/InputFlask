function Click(){
    const peso = parseFloat(document.getElementById('peso').value)
    const altezza=parseFloat(document.getElementById('altezza').value)
    const imc= (peso / (altezza * altezza)).toFixed(2)
    console.log(peso)
    console.log(altezza)
    console.log(imc)
    document.getElementById('risultato').innerHTML = 'Il tuo IMC è '+ imc
}