let checkbox = document.querySelector('input[type="checkbox"]');
let btn = document.querySelector('button');


btn.addEventListener('click', function() {
	if (checkbox.checked == true) {
		console.log('+++');
	} else { (checkbox.checked == false)
		console.log('---');
	}
});
