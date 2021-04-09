let count1=0
let count2=0
while (( count1 != 11 ) && ( count2 != 11)){
	if ( Math.floor(Math.random()*2)  == 0 ){
		console.log("heads");
		++count1;
	}
	else{
		console.log("tails");
		++count2;
	}
}
console.log("heads="+count1);
console.log("tails="+count2);