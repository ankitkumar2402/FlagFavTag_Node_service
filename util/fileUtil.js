// import fs from 'fs';

const fs = require('fs');

 function readKSAToken() {
	 try{
		//for local
		// var sVal = "eyJhbGciOiJSUzI1NiIsImtpZCI6ImZCVVNHSHE5Rzd5anNnQ1dKdHhPalByWFphX1VYN0U4djR1ZGdpc3JBNVkifQ.eyJpc3MiOiJrdWJlcm5ldGVzL3NlcnZpY2VhY2NvdW50Iiwia3ViZXJuZXRlcy5pby9zZXJ2aWNlYWNjb3VudC9uYW1lc3BhY2UiOiJkZWZhdWx0Iiwia3ViZXJuZXRlcy5pby9zZXJ2aWNlYWNjb3VudC9zZWNyZXQubmFtZSI6InVpLWRlcGxveS10b2tlbi1mN3NwOCIsImt1YmVybmV0ZXMuaW8vc2VydmljZWFjY291bnQvc2VydmljZS1hY2NvdW50Lm5hbWUiOiJ1aS1kZXBsb3kiLCJrdWJlcm5ldGVzLmlvL3NlcnZpY2VhY2NvdW50L3NlcnZpY2UtYWNjb3VudC51aWQiOiIxNzhmMmM4NS0yNjkxLTRlNDgtOWQ4MC1iOTY4YWMxZjBlMDgiLCJzdWIiOiJzeXN0ZW06c2VydmljZWFjY291bnQ6ZGVmYXVsdDp1aS1kZXBsb3kifQ.p_9IfU2hmZ3LrMAMfvnaVYHBLGmKee7CcKpttZNNmkSDUyowRBxHPzCv3cDKre0L2F9MBm2ZbqtOOpmFTgQsnRGytU1QcGV5QNJ0wZDAMkxuHl_1eYksBvZdz5lEjqeKfvcplYfU2jQip89y_F0zNcUOBw0ztCQW5oh7cPj2PVZLcrV5Ix9OzjmCmajBIfRDcPYHoVBQQLwzQiOHLx7JlPsj1-1hOeqP9dQhPVbS1louyFybSUyGPSVfthIRmWe1z0y6prkKL927hIWPo3RT69YbsjeOukY7swA7zMbONVXn60omSFtN4oKlObpOrn4JH78EELG7qh8LhgELZuRucA";
		// return sVal;

		//for deployed
		return fs.readFileSync('/var/run/secrets/kubernetes.io/serviceaccount/token', 'utf-8');
	 }catch(e){
		console.log(e);
	 }
	
}

module.exports = {readKSAToken};