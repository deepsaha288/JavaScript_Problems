let r1 = require('readline');
let prompts = r1.createInterface(process.stdin,process.stdout);
 prompts.question('enter the number',(number) => {
    var maxLimit=100
    var minLimit=0
    while (true){
	    if ( number < (minLimit + maxLimit ) / 2 )
		    maxLimit = ( minLimit + maxLimit ) / 2 ;
	    else if ( number > ( minLimit + maxLimit ) / 2 )
		    minLimit = ( minLimit + maxLimit ) / 2 ;
	    else{
		    console.log( "number is" + ( maxLimit + minLimit ) / 2 );
		break;
	}
}
    prompts.close()
});