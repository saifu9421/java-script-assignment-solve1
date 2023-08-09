// const shoppingCart =[
//     { name: 'shoe',price : 1200},
//     {name : 'shirt', price : 2200},
//     {name:'pant',price :3700},
//     {name:'belt', price:600}
// ];
// function totalCost(products){
//     let sum  = 0;
//    for(let i=  0 ; i< products.length ; i ++){
//     const produtc =  products[i];
//     sum =  sum + produtc.price;
//     // console.log(produtc);
//    }
//    return sum;
// }



// problem 1

function cubeNumber(number) {
     if(typeof number !== 'number'){
      return 'sorry  inter the  number  ("") is  not allow ';
     }

     const cube =  Math.pow(number , 3);
     return cube;
}

const number =  cubeNumber(3);
console.log(number);

const number1 =  cubeNumber(4);
console.log(number1);
 
//   problem 2

function matchFinder(string1, string2) {
        if(typeof string1 ==  'string'  &&  typeof string2 == 'string'){
         
        } else if(typeof string1 !==  'string'  ||  typeof string2 !== 'string' ){
          return "sorry your value not string";
        }

          if(string1.includes(string2)){
               return true;
          }else{
               return false;
          }
}
 
const string = "John Doe";
const string2 = "ohn";
 const string1 =  matchFinder(string , string2);
 console.log(string1);


//    problem 3
function sortMaker(arr) {
         if(arr[0]== arr[1]){
          return "equal";
         }


       for(let i =  0  ; i<arr.length ; i ++){
          if(arr[i] >= 0){
               return  arr.sort(function(a, b){return b - a});    
          } else{
               return "Invalid Input";
          }
     }
}
   const arrar =  [2,3];
   const arr =  sortMaker(arrar);
   console.log(arr);


//   problem 4
function findAddress(obj) {
     let final ="";
     const values =  Object.values(obj);
     for (let i = 0 ; i <values.length ; i++){
          final  = final+values[i]+ ",";
     }
   return final;

}
const addres =
  {street: 10,
      house: '15A',
      society: 'Earth Perfect'
          }

      const values = findAddress(addres);
       console.log(values);
    

//   problem 5
function canPay(changeArray, totalDue) {
     var sum   = 0;
     for (let i  = 0 ; i< changeArray.length ; i++){
          sum = sum+changeArray[i];
     }
     if(changeArray.length === 0){
          return "sorry input the number";
        }

     else if(sum > number3){
          return true;
     }else if(sum < number3){
          return false;
     }
  
}

const array = [1,2,3];
const number3 = 10;
 const can  =  canPay(array , number3);
 console.log(can);


