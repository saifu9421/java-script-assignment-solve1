for(let i = 1; i <=  50 ; i++){

    if(i %3 === 0 && i %5 === 0){
        console.log('foobar');
     }
   else if(i%3 === 0){
        console.log('foo');
    }else if(i %5 === 0){
       console.log('bar');
    }
     if(i %3 === 0 && i %5 === 0){
           console.log('foobar');
    }
    else{
        console.log(i);
    }  
}


const poinst =  [40,20,2,5,7,20,30,60];
 poinst.sort(function(a,b) {
        return b -a ; 

 });
 console.log(poinst);