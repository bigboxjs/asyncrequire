module.exports = function(name, callback) {
	callback(require(name));
};