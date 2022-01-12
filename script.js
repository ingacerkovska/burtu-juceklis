
let laukumuSaturs=['SPĒLES','SAPNIS','LAIMES','KĀPURS','EGLĪTE','PANNAS']
let nospiestaisLaukums=[]
function izvelasBurtu(burts){
    if (nospiestaisLaukums.indexOf(burts)==-1){
        document.querySelector('.ievaditaisVards').innerHTML=laukumuSaturs[randomNr]
    }
}  
function izveletiesVardu()
{
    randomNr = Math.random() * 10
    randomNr =  Math.ceil( randomNr )
    randomNr = randomNr-1

    document.querySelector(".sajaukts").innerHTML=  sajauktVardu(laukumuSaturs[randomNr])  + ', '+randomNr
    
    

    document.querySelector('.atbilde').value = ''
}

izveletiesVardu()
function parbaudit(){
    let atbilde = document.querySelector('.atbilde').value

        if( atbilde == laukumuSaturs[randomNr] )
        {
            alert('Pareizi! ')
            izveletiesVardu()
        }
        else
        {
            alert('Nepareizi!')
        }
}
function sajauktVardu(vards)
{

    let vardsIzjauksanai = vards.split('')

    let vardaGarums = vards.length
    let loopIndex = 0
    let sajauktsVards = []

    while( loopIndex != vardaGarums )
    {

        let randomIndex = Math.floor( Math.random() * vardsIzjauksanai.length )

        sajauktsVards.push(vardsIzjauksanai[randomIndex])
        vardsIzjauksanai.splice(randomIndex,1)

        loopIndex++
    }

    sajauktsVards = sajauktsVards.join('')

    return sajauktsVards

}
function sadalitVardu(vardins)
{
    let vardinsSadalisanai =vardins.split('')
    let vardinaGarums = vardins.length
    let loopIndex = 0
    let sadalitsVards = []
   // document.querySelector("#B0").innerHTML=sajauktVardu(sadalitsVards[0])
}

function saktSpeli() 
{
    let vards = document.querySelector('#vards').value 
    let vecums = document.querySelector('#vecums').value 
    let regions = document.querySelector('#regions').value 
    console.log(vards)

    if (vards=='')
    {
        alert('Ievadi vārdu!')
    }
    else
    {
        window.location='spele.html#'+vards+','+vecums+','+regions
    }
}