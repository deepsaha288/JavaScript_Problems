let r1 = require('readline');
let prompts = r1.createInterface(process.stdin,process.stdout);
 prompts.question('enter the number',(number) => {
    loop=1;
    result=0;
    while( Math.pow(2,loop) <= 256){
	var result=Math.pow(number, loop);
	console.log(number + " ^ "+loop + " = " + result);
	loop++;
    }
    prompts.close()
});