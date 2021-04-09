const prompt = require('prompt-sync')();
function palindrome(){
        var storeNumber = 0 ;
        var reverseNumber = 0 ;
        var orignalNumber = number ;
        while (number > 0 ){
                storeNumber = number % 10 ;
                number = Math.floor(number / 10) ;
                reverseNumber = reverseNumber * 10 + storeNumber  ;
        }
        if ( orignalNumber == reverseNumber ){
                console.log("Number is palindrome");
		number = orignalNumber;
		return true;
        }
	else{
                console.log("Number is NOT palindrome");
		number = orignalNumber;
		return false;
	}
}
function prime(){
	if(( number == 1 ) || ( number ==2 )){
        	console.log("prime number");
		return true;
	}
	else{
        	for(var i = 2 ; i < number / 2 ; i++ ){
                	if( number % i == 0 ){
                        	console.log("Not a prime number");
                        	return false;
			}
 		}
        }
        console.log("prime number");
	return true;
}
function palindromeAndPrime(){
	var isPalindrome = palindrome();
	if ( isPalindrome ){
		var isPrime = prime();
		if ( isPrime ){
			console.log("number is prime as well as palindrome");
		}
	}
}
console.log("1. for prime");
console.log("2. for palindrome");
console.log("3 .palindrome and prime");
var choice = prompt("enter the  choice");
var number = prompt("enter the  number");
switch(choice){
	case '1' :
		prime();
		break;
	case '2' :
		palindrome();
		break;
	case '3' :
		palindromeAndPrime();
		break;
	default :
		console.log("you have enter wrong choice");
}