//declare a function name with canPay()
//where it will take input as array and a number ;
//if the array number(assume as money vhangti) total is less then the taken number then it will return false
//if the total money from the array is more then the number(total chips price) 


function canPay(changeArray, totalDue){
      let sum = 0;
      if(changeArray.length === 0){
            return "your array is empty";
      }
      for(let i = 0; i<changeArray.length; i++){
            const element = changeArray[i];
            sum+=element;
      }
      if(sum >= totalDue){
            return true;
      }else{
            return false;
      }
}
console.log(canPay([1, 2, 5],10));