module.exports = function() {
	return function() {
		this.Calculate = function(req) {
			var url = req.url;
			return url;
		};
	};
};