// write a function named with findAddress()
// where it will take an object as input
// need to access the property from the object 
// the output formate have to show in a string formate
// return the value
// if the object has empty properties then replace the missing property with double underScore(__)


//function named with the required name
function findAddress(obj){
      //accessing the elements of the object
      //also replace the missing property with under score;
      const street = obj.street || '__';
      const house = obj.house || "__";
      const society = obj.society || "__";
      //showing the output in string formate
      const str = street + "," + house +"," +society;
      //returning the value
      return str;

}
console.log(findAddress({street:"10",house:"15A",society:"Earth perfect"}))