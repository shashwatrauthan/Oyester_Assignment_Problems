function converter(str){

    var timeObj= new Date();
    
    let modifier='AM';
    if (str.includes('PM')){
        modifier='PM';
    }


    let time= str.replace(modifier,'');
    let [hours,min,sec]=time.split(':');
    if(hours === '12'){
        hours='00';
    }

    if (modifier=== 'PM'){
        hours=parseInt(hours,10)+12;

    }

    timeObj.setSeconds(sec);
    timeObj.setMinutes(min);
    timeObj.setHours(hours);

    timeObj.setSeconds(timeObj.getSeconds()+45);
    timeObj.setMinutes(timeObj.getMinutes()+45);

  

    console.log(`${timeObj}`);

    document.write(`${timeObj.getHours()}:${timeObj.getMinutes()}:${timeObj.getSeconds()}`);
}



// driver program
var str =  '11:00:01PM';

converter(str);