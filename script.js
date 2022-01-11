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
let laukumuSaturs=['S','S','L','Ē','E','P']
let nospiestaisLaukums=[]
function izvelasBurtu(burts){
    if (nospiestaisLaukums.indexOf(burts)==-1){
        document.querySelector('.ievaditaisVards').innerHTML=laukumuSaturs[0]+laukumuSaturs[1]
    }
}  
function parbaudit(){
    if ('.ievaditaisVards'=='SPĒLES'){
        alert('Pareizi!')
    } else {alert('Nepareizi!')}
}