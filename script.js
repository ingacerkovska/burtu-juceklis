
let laukumuSaturs=['SPĒLES','SAPNIS','LAIMES','KĀPURS','EGLĪTE','PANNAS']
let nospiestaisLaukums=[]
function izvelasBurtu(burts){
    let saturs0 = document.querySelector('#b0').value
    /*let saturs1 = document.querySelector('#b1').value
    let saturs2 = document.querySelector('#b2').value */

    if (nospiestaisLaukums.indexOf(burts)==-1){
        document.querySelector('#B0').innerHTML=saturs0
        
    } 
  /* if (nospiestaisLaukums.indexOf(burts)==-1){
        document.querySelector('#B1').innerHTML=saturs1
        
    } */
    
}  
function izveletiesVardu()
    {
        randomNr = Math.random() * 10
        randomNr =  Math.ceil( randomNr )
        randomNr = randomNr-1
    
        document.querySelector(".sajaukts").innerHTML=  sajauktVardu(laukumuSaturs[randomNr])+' '+randomNr
        
       
    }
    
izveletiesVardu()

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
        document.querySelector("#b0").innerHTML= sajauktsVards[0]
        document.querySelector("#b1").innerHTML= sajauktsVards[1]
        document.querySelector("#b2").innerHTML= sajauktsVards[2]
        document.querySelector("#b3").innerHTML= sajauktsVards[3]
        document.querySelector("#b4").innerHTML= sajauktsVards[4]
        document.querySelector("#b5").innerHTML= sajauktsVards[5]
        loopIndex++
    }
   
   // sajauktsVards = sajauktsVards.join('')

    return sajauktsVards

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
function parbaudit()
    {
        let atbilde = document.querySelector('#B0').value


        if( atbilde == laukumuSaturs[randomNr] )
        {
            alert('Pareizi! ')
        
        }
        else
        {
            alert('Nepareizi!')
        }
    }