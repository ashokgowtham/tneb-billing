module.exports = function(){
	this.Calculate = function(req) {
		var url = req.url;
		var args = parseUrl(url);
		var units = args['units'];

		var cost = 0;
		var slab = 0;
		var fixedCosts = 0;

		if (units <= 100) {
			slab = 1;
			fixedCosts = 20;
								cost = units * 1.0
										+ fixedCosts;
		} else if (units <= 200) {
			slab = 2;
			fixedCosts = 20;
								cost = units * 1.5
										+ fixedCosts;
		} else if (units <= 500) {
			slab = 3;
			fixedCosts = 30;
								cost = (200-0) * 2.0
										+ (units-200) * 3.0
										+ fixedCosts;
		} else {	//(units > 500)
			slab = 4;
			fixedCosts = 40;
			cost = (200-0) * 3.0
					+ (500-200) * 4.0
					+ (units-500) * 5.75
					+ fixedCosts;
		}
		if(args['mobile'] || args['debug'])
			return {cost:cost,fixedCosts:fixedCosts,slab:slab,units:units,args:args};
		return ("<html>"+"<body>"+"<h3>"+"<center>"+"Your Electricity bill"+"</center>"+"</h3>"+"<table>"+"<tr>"+"<th>"+"Units Metered"+"</th>"+"<td>"+"$units$"+"</td>"+"</tr>"+"<tr>"+"<th>"+"Your bill falls in"+"</th>"+"<td>"+"Slab $slab$"+"</td>"+"</tr>"+"<tr>"+"<th>"+"Amount of fixed costs"+"</th>"+"<td>"+"$fixedCosts$"+"</td>"+"</tr>"+"<tr>"+"<th>"+"Calculated Bill Amount"+"</th>"+"<td>"+"<u>"+"$cost$"+"</u>"+"</td>"+"</tr>"+"</table>"+"<u>"+"To get the response as a json, try adding &amp;mobile=1 to the url above."+"</u>"+"</body>"+"</html>").replace('$units$',units).replace('$fixedCosts$',fixedCosts)	.replace('$slab$',slab)	.replace('$cost$',cost)
	};




	var parseUrl = function(url) {
		var argsstr=url.replace('/','').replace('?','').split("&");
		var args={};
		for (var i = 0; i < argsstr.length; i++) {
			var a = argsstr[i].split("=");
			args[a[0]]=a[1] || "";
		};
		return args;
	};
};
