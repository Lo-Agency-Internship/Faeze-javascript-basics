//var MyMessage = prompt(" What is your name ? ");
 //alert(" welcome  " + MyMessage );


 // The variables
 let firstName = prompt("please enter your name : ");
 let age = prompt("please enter your age : ") ;
 let gender = prompt("please enter your gender : ") ;
 alert(" name :  " + firstName + " age : " + age + "  gender : " + gender);

 let score1= prompt(" please enter score 1 :");
 let score2= prompt(" please enter score 2 : ");
 alert(" score 1 is : "+ score1 + "  score 2 is : " +score2);
 
 let score=score1;
 score1=score2;
 score2=score;
 alert(" score 1 is : "+score1+ "  score 2 is : " + score2 );
 
 //Data types
 let FirstName=prompt("please enter your first name : ");
 lastName=prompt("please enter your last name : ");
 age=prompt(" please enter your age : ");
 gender=prompt("please enter your gender : ");
 alert(`your first name is : ${FirstName} , your last name is : ${lastName} ,  your age is : ${age} , your gender is : ${gender} `);
 
 //Bonus:show info on the page
 let info =`your first name is : ${FirstName} , your last name is : ${lastName} ,  your age is : ${age} , your gender is : ${gender} `;
document.getElementById("show").innerHTML= info;