// to write a function which name is sortMaker() which will take an array as input
// access elements of the input array
//if the array has one large number and second one is smaller number
// if the number is equal then return equal ;
// if the number is not equal then return with the descending number
// bonus if the array contain negative number then return invalid input ;

function sortMaker(arr) {
      //accessing the element
      const [a, b] = arr;
      //bonus part returning invalid input
      if (a < 0 || b < 0){
            return 'Invalid Input'
      }
      //checking the number is equal or not
      if(a === b){
            return 'equal';
      }
      //checking if first number is greater then second number
      if(a > b){
            return [a,b];
      }else{
            return [b, a];
      }
}
// console.log(sortMaker([3,2]));

//effective way to implement it in the real life like compere the price to lower order to higher order;
function sortMaker(arr){
      if (arr[0]< 0|| arr[1] <0)return 'invalid input';
      if(arr[0] === arr[1]) return 'equal';
      return arr.sort((a, b) => b - a);
}
