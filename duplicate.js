const name = ['abule','babul','cabul','dabul',
'ebul','babul','abule','kabul','gabul','cabul',
'babul','abule','abule'];

function removeDuplicate(name){
    const unique = [];
    for(let i= 0 ; i <name.length ; i ++){
      const names  = name[i];
      if(unique.includes(names) === false){
        unique.push(names);
      }     
    }
    return unique;
}
 const uniqueName =  removeDuplicate(name);
 console.log(uniqueName);
