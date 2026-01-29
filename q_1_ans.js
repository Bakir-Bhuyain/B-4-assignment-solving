//make cube of a number
// bonus part is : if the number is not a number then give an alert or return a message that put a valid number;

function makeCube (number){
      if (typeof number !== "number"){
            return "please provide a valid number";
      }
      const total = Math.pow(number, 3);
      return total;
}
console.log(makeCube(''));