function fulltime ()   {
    var time=new Date();
    var newYear=new Date("june,01,2020,00:00:00");   
    var totalRemains=(newYear.getTime()-time.getTime());
     
    if (totalRemains>1){
     
    var RemainsSec = (parseInt(totalRemains/1000));
    var RemainsFullDays=(parseInt(RemainsSec/(24*60*60)));
    var secInLastDay=RemainsSec-RemainsFullDays*24*3600;
    var RemainsFullHours=(parseInt(secInLastDay/3600));
    if (RemainsFullHours<10){RemainsFullHours="0"+RemainsFullHours};
    var secInLastHour=secInLastDay-RemainsFullHours*3600;
    var RemainsMinutes=(parseInt(secInLastHour/60));
    if (RemainsMinutes<10){RemainsMinutes="0"+RemainsMinutes};
    var lastSec=secInLastHour-RemainsMinutes*60;
    if (lastSec<10){lastSec="0"+lastSec};
     
    document.getElementById("RemainsFullDays").innerHTML=RemainsFullDays+"";
    document.getElementById("RemainsFullDays").className='newClass';
    
    document.getElementById("RemainsFullHours").innerHTML=RemainsFullHours+"";
    document.getElementById("RemainsMinutes").innerHTML=RemainsMinutes+"";
    document.getElementById("lastSec").innerHTML=lastSec+"";   
    setTimeout('fulltime()',10)    
    }
     
    else{
    document.getElementById("clock").innerHTML="Прием заявок со скидками окончен!";
    }
    }