document.documentElement.classList.add('js');

document.querySelectorAll('[type=range]').forEach(function(range) {
	range.addEventListener('input', function (e) {
		range.style.setProperty('--val', +range.value);
	}, false);
});
