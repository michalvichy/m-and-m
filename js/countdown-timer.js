function Counter(date) {
	this.targetDate = new Date(date).getTime();
}

Counter.prototype.countdown = function(targetId) {
	var container = document.getElementById(targetId);
	var days, hours, minutes, seconds;
	var targetDate = this.targetDate;

	// container.innerHTML = 'Loading...';

	function addZero(digit) {
		if(digit > 9) {
			return digit;
		}
		else {
			return '0' + digit;
		}
	};
	
	setInterval(function() {
		var currentDate = new Date().getTime();
		var remainingTime = (targetDate - currentDate) / 1000;

		days = parseInt(remainingTime / 86400);
		remainingTime = remainingTime % 86400;

		hours = parseInt(remainingTime / 3600);
		remainingTime = remainingTime % 3600;

		minutes = parseInt(remainingTime / 60);
		seconds = parseInt(remainingTime % 60);

		container.innerHTML = days + 'd ' + addZero(hours) + 'h ' + addZero(minutes) + 'm ' + addZero(seconds) + 's';
	}, 1000);
};
