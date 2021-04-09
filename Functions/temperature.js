let r1 = require('readline');
let prompts = r1.createInterface(process.stdin,process.stdout);
function celciusToFahrehnite() {
	prompts.question("enter the celcius between 0 to 100=", celsius =>{
	if ( celcius >= 0 && celcius <= 100 ){
		var fahrehnite = celcius * 9 / 5 + 32 ;
		console.log("fahrehnite =" + fahrehnite);
	}
	else
    console.log("celcius enter is not between 0 to 100 ")
    prompts.close()
});
}

function fahrehniteToCelcius() {
	prompts.question("enter the celcius between 0 to 100=", fahrehnite =>{
	if ( fahrehnite >= 32 && fahrehnite <= 212 ){
		var celcius = ( fahrehnite - 32 ) * 5 / 9 ;
		console.log("celcius =" + celcius);
	}
	else
		console.log("fahrehnite enter is not between 32 and 212");
        prompts.close()
    });
}

prompts.question("1.celcius to fahrehnite or 2.fahrehnite to celcius", choice => {
switch (choice) {
	case '1' : celciusToFahrehnite() ;
		break;
	case '2' : fahrehniteToCelcius() ;
		break;
	default : console.log("you have enter wrong choise");
}
prompts.close()
});