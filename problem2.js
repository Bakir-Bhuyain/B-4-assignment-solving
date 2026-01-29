//question : there will be a function which is like take two string as a input 
// step 2 is: if string 1 is matched with the string two then it will return true , if not matched it will return false ,
// step 3: If the given input is and out put is case sensitive then it will also return false;
// bonus part : if the input is string then it will return a error massage;

function matchFinder (string1, string2){
      if(typeof string1 !== 'string' || typeof string2 !== 'string'){
            return 'please provide a string';
      }
      const isMatchedItem = string1.includes(string2);
      return isMatchedItem;
}
console.log(matchFinder('Bakir', 'bak'));