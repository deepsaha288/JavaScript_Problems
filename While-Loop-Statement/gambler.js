var win=0;
var loose=0;
var rupees=100;
while ( rupees > 0 && rupees < 200 ){
	var result= Math.floor(Math.random() * 2);
	if ( result == 0 ){
		rupees--;
		loose++;
	}
	else{
		rupees++;
		win++;
	}
}
console.log("rupees=" + rupees);
console.log("total win="+win);
console.log("total loose="+loose);