// carousel interval


function Sec(){
	var val = document.getElementById('time');
	var time = val.value;

	var a = parseInt(time);

	// console.log(typeof(a));
	// console.log(a);

// document.getElementById('carouselExampleSlidesOnly')
// 	.setAttribute('data-interval',a);

	$('.carousel').carousel({
 		interval: a
});

}


// calc
function Evaluate(op) {
	
	var num1 = document.getElementById('one');
	var num2 = document.getElementById('two');

	if(op === '+'){
		var ans = parseFloat(num1.value) + parseFloat(num2.value);
	}
	else if(op === '-')
	{
		var ans = num1.value - num2.value;
	}
	else if(op === '*')
	{
		var ans = num1.value * num2.value;
	}
	else
	{
		if(num2.value === 0)
		{
			alert("Cannot divide by zero");
		}
		else
		{
			var ans = num1.value / num2.value;
		}
	}

	document.getElementById('ans').value = ans;
}