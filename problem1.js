function isprimo(n){
	var primo = true;
	for(var i=2;i<=Math.sqrt(n);i++){
		if(n%i==0){
			primo = false;
			
			}
	
	}
	return primo;
}

function divisores(n){
	
	for(var k=Math.round(n/2);k>0;k=k-1){
		if(n%k==0){
				if(isprimo(k)){
				return k;
				}
		}
	}

}