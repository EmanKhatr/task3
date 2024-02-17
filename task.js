
//Print all even numbers from 0 – 10
for (let i = 0; i <= 10; i += 2)
{
    console.log(i)
}


//Remove the spaces found in a string
var str = "Hi it's Eman !";
var noSpaces = str.replaceAll(" ", "");
  console.log(noSpaces); 


//Return a Boolean if a number is divisible by 10
function isDivisibleByTen(number) 
{
    return number % 10 === 0;
}
  console.log(isDivisibleByTen(100)); 


//Return the number of vowels in a string
function countVowels(str) {
    var matches = str.match(/[aeiou]/gi);
    return matches ? matches.length : 0;
  }
  console.log(countVowels("Eman was here")); 


//Print a table containing multiplication tables
    var table = "";
    for (var i = 1; i <= 12; i++)
    {
      for (var j = 1; j <= 10; j++) 
      {
        table += i * j + "\t";
      }
      table += "\n";
    }
   console.log(table)
  
//لو في هبد في النص اديني فل مارك برضو لوجه الله + تعبت فيه