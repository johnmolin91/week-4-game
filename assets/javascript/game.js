var wins = 0;
var losses = 0;
var counter = 0;
var imageCrystal1;
var imageCrystal2;
var imageCrystal3;
var imageCrystal4;
var targetNumber;

function setgame(){

counter = 0;
targetNumber = Math.floor(Math.random() * 102 + 19);
$("#target").text(targetNumber);

imageCrystal1 = $("#crystal1").attr("data-crystalvalue", Math.floor(Math.random() * 13));

imageCrystal2 = $("#crystal2").attr("data-crystalvalue", Math.floor(Math.random() * 13));

imageCrystal3 = $("#crystal3").attr("data-crystalvalue", Math.floor(Math.random() * 13));

imageCrystal4 = $("#crystal4").attr("data-crystalvalue", Math.floor(Math.random() * 13));

$('#crystal1').append(imageCrystal1);
$('#crystal2').append(imageCrystal2);
$('#crystal3').append(imageCrystal3);
$('#crystal4').append(imageCrystal4);

};

setgame();

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
	$('#crystal1').removeData();
	$('#crystal2').removeData();
	$('#crystal3').removeData();
	$('#crystal4').removeData();
	setgame();

}

else if (counter > targetNumber) {
	console.log("You lose!");
	losses++;
	$('#losses').text("Losses: " + losses);
	$('#crystal1').removeData();
	$('#crystal2').removeData();
	$('#crystal3').removeData();
	$('#crystal4').removeData();
	setgame();
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
	$('#crystal1').removeData();
	$('#crystal2').removeData();
	$('#crystal3').removeData();
	$('#crystal4').removeData();
	setgame();
}

else if (counter > targetNumber) {
	console.log("You lose!");
	losses++;
	$('#losses').text("Losses: " + losses);
	$('#crystal1').removeData();
	$('#crystal2').removeData();
	$('#crystal3').removeData();
	$('#crystal4').removeData();
	setgame();
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
	$('#crystal1').removeData();
	$('#crystal2').removeData();
	$('#crystal3').removeData();
	$('#crystal4').removeData();
	setgame();
}

else if (counter > targetNumber) {
	console.log("You lose!");
	losses++;
	$('#losses').text("Losses: " + losses);
	$('#crystal1').removeData();
	$('#crystal2').removeData();
	$('#crystal3').removeData();
	$('#crystal4').removeData();
	setgame();
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
	$('#crystal1').removeData();
	$('#crystal2').removeData();
	$('#crystal3').removeData();
	$('#crystal4').removeData();
	setgame();
}

else if (counter > targetNumber) {
	console.log("You lose!");
	losses++;
	$('#losses').text("Losses: " + losses);
	$('#crystal1').removeData();
	$('#crystal2').removeData();
	$('#crystal3').removeData();
	$('#crystal4').removeData();
	setgame();
}
});