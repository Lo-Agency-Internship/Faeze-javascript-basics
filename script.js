//var MyMessage = prompt(" What is your name ? ");
//alert(" welcome  " + MyMessage );


 //The variables

 let firstName = prompt("please enter your name : ");
 let age1 = prompt("please enter your age : ") ;
 let gender1 = prompt("please enter your gender : ") ;
 alert(" name :  " + firstName + " age : " + age1 + "  gender : " + gender1);

 let score1= prompt(" please enter score 1 :");
 let score2= prompt(" please enter score 2 : ");
 alert(" score 1 is : "+ score1 + "  score 2 is : " +score2);
 
 let score=score1;
 score1=score2;
 score2=score;
 alert(" score 1 is : "+score1+ "  score 2 is : " + score2 );
 
 //Data types
 let FirstName=prompt("please enter your first name : ");
 let lastName=prompt("please enter your last name : ");
 let age =prompt(" please enter your age : ");
 let gender =prompt("please enter your gender : ");
 alert(`your first name is : ${FirstName} , your last name is : ${lastName} ,  your age is : ${age} , your gender is : ${gender} `);
 
 //Bonus:show info on the page
 let info =`your first name is : ${FirstName} , your last name is : ${lastName} ,  your age is : ${age} , your gender is : ${gender} `;
document.getElementById("show").innerHTML= info;



// Basic operators, maths

//myrandom

function random(min, max) {
    randomNumber = Math.floor(Math.random() * (max - min + 1) ) + min;
    return randomNumber;
}
console.log(random(2,8)); 
//bin2dec

function bin2dec(string){
     return parseInt(string,2);

}
let number ="1000";
console.log(bin2dec(number));


// Comparisons

//part 1 : a function to compute the sum of the two given integers.
   function sum(p1, p2) {
    if(p1 === p2){

        return 3*(p1 + p2);
    }
    
    }
    console.log(sum(10,10));
    
    //part 2 :  a function to compute the absolute difference between a specified number and 19.
    function difference(p3){

        const p4 =19;
        let result = Math.abs(p3 - p4);
        if(result >p4) {
            return (3 * result);
        }
        else{
            
            return result;
        }

        }
   
    console.log(difference(9));
  
    //part 3 : a function to create a new string adding "Lo" in front of a given string.
   function newstring(string){
       if(string.startsWith("Lo")){
           return(string);
       }
       else{
           return("Lo" + " " + string )
       }

   }
   console.log(newstring("Hello"));
  

    //Logical operators
    
   //Buffer gate
   function logicalGateBuffer(p){
            return p ;
   }
   console.log(logicalGateBuffer(false));
   // Not gate
   function logicalGateNot(p){
       return !p ;
    }
    console.log(logicalGateNot(false));
  // And gate
  function logicalGateAnd(p1,p2){
      if(p1 === true && p2 === true){
        
         return true ;
  }
  else{
      return false 
  }
}
  console.log(logicalGateAnd(true,false));

   
  // Or gate

   function logicalGateOr(p1,p2){
    
    if(p1 ===false && p2 ===flase ){
      
        return false ;
}
  else{
    
    return true;
}
}
console.log(logicalGateOr(true,false));
// Nand gate
function logicalGateNand(p1,p2){
   
    if(p1 === true && p2 ===  true ){
    
        return false ;
}
  else{
    
    return true;
}
}
console.log(logicalGateNand(false,true));

//Nor gate
function logicalGateNor(p1,p2){
   
    if(p1 === false && p2 ===  false){
    
        return true ;
}
  else{
    
    return false;
}
}
console.log(logicalGateNor(false,false));

//Xor gate
function logicalGateXor (p1,p2){
   
    if(p1 === p2){
    
        return false ;
}
  else{
    
    return true;
}
}
console.log(logicalGateXor (true,false));

//Xnor gate
function logicalGateXnor (p1,p2){
   
    if(p1 === p2){
    
        return true ;
}
  else{
    
    return false;
}
}
console.log(logicalGateXnor (false,false));
