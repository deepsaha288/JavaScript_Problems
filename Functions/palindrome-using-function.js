let r1 = require('readline');
let prompts = r1.createInterface(process.stdin,process.stdout);
    prompts.question('enter the number',(number) => {
        function palindrome(){
            var storeNumber = 0;
            var reverseNumber = 0;
            var orignalNumber = number ;
            while (number > 0 ){
                storeNumber = number % 10 ;
                    number = Math.floor(number / 10) ;
                    reverseNumber = reverseNumber * 10 + storeNumber  ;
            }
            if ( orignalNumber == reverseNumber )
                  console.log("Number is palindrome");
            else
                  console.log("Number is NOT palindrome");
        }
        palindrome(); 
    prompts.close()
});