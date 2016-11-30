var wins = 0;
var losses = 0;

var targetNumber = Math.floor(Math.random() * 100 + 20);

$("#target").text(targetNumber);

var counter = 0;

var imageCrystal1 = $("#crystal1").attr("data-crystalvalue", Math.floor(Math.random() * 13));

var imageCrystal2 = $("#crystal2").attr("data-crystalvalue", Math.floor(Math.random() * 13));

var imageCrystal3 = $("#crystal3").attr("data-crystalvalue", Math.floor(Math.random() * 13));

var imageCrystal4 = $("#crystal4").attr("data-crystalvalue", Math.floor(Math.random() * 13));

// console.log($('#crystal1').attr("data-crystalvalue"))

$('#crystal1').append(imageCrystal1);
$('#crystal2').append(imageCrystal2);
$('#crystal3').append(imageCrystal3);
$('#crystal4').append(imageCrystal4);

// console.log($('#crystal1').attr("data-crystalvalue"));

$('#crystal1').on("click",function()
{
	var crystalValue1 = ($(this).data("crystalvalue"));

	counter = counter + crystalValue1;

	console.log("New score: " + counter);
	$('#current').text(counter);

	if (counter === targetNumber) {
	console.log("You win!");
	wins++;
	$('#wins').text("Wins: " + wins);
	counter = 0;
}

else if (counter > targetNumber) {
	console.log("You lose!");
	losses++;
	$('#losses').text("Losses: " + losses);
	counter = 0;
}
});

$('#crystal2').on("click",function()
{
	var crystalValue2 = ($(this).data("crystalvalue"));

	counter = counter + crystalValue2;

	console.log("New score: " + counter);
	$('#current').text(counter);

	if (counter === targetNumber) {
	console.log("You win!");
	wins++;
	$('#wins').text("Wins: " + wins);
	counter = 0;
}

else if (counter > targetNumber) {
	console.log("You lose!");
	losses++;
	$('#losses').text("Losses: " + losses);
	counter = 0;
}
});

$('#crystal3').on("click",function()
{
	var crystalValue3 = ($(this).data("crystalvalue"));

	counter = counter + crystalValue3;

	console.log("New score: " + counter);
	$('#current').text(counter);

	if (counter === targetNumber) {
	console.log("You win!");
	wins++;
	$('#wins').text("Wins: " + wins);
	counter = 0;
}

else if (counter > targetNumber) {
	console.log("You lose!");
	losses++;
	$('#losses').text("Losses: " + losses);
	counter = 0;
}
});

$('#crystal4').on("click",function()
{
	var crystalValue4 = ($(this).data("crystalvalue"));

	counter = counter + crystalValue4;

	console.log("New score: " + counter);
	$('#current').text(counter);

	if (counter === targetNumber) {
	console.log("You win!");
	wins++;
	$('#wins').text("Wins: " + wins);
	counter = 0;
}

else if (counter > targetNumber) {
	console.log("You lose!");
	losses++;
	$('#losses').text("Losses: " + losses);
	counter = 0;
}
});



};