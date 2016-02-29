var doc = document.getElementsByTagName('body')[0];
var canvas = document.getElementById("canvas");
var palette = document.getElementById("palette");
var canvasRow = document.createElement('div');
var canvasCell = document.createElement('div');
var paintColor;
var colors = ["red", "orange", "yellow", "green", "blue", "indigo", "violet"];

var numRows = prompt("How many rows would you like in your canvas?");
while(numRows < 1)
{
	numRows = prompt("Please enter a number between 1 and 100");
}
var numCols = prompt("How many columns would you like in your canvas?");
while(numCols < 1)
{
	numCols = prompt("Please enter a number between 1 and 100");
}

for(var i = 0; i < numRows; i++)
{
	var canvasRow = document.createElement('div');
	canvasRow.classList.add("canvasRow");
	
	if( i === numRows-1)
	{ 
		canvasRow.classList.add("bottomRow");
	}
	
	canvas.appendChild(canvasRow);

	for(var j = 0; j < numCols; j++)
	{
		var canvasCell = document.createElement('div');
		canvasCell.classList.add("canvasCell");
		
		if( j === numCols-1)
		{ 
			canvasCell.classList.add("rightColumn");
		}
		
		canvasRow.appendChild(canvasCell);
	}
}

for(var i = 0; i < colors.length; i++)
{
	var paletteCell = document.createElement('div');
	paletteCell.setAttribute("id", colors[i]);
	paletteCell.classList.add( "paletteCell");
	palette.appendChild(paletteCell);
	doc.appendChild(palette);
}




canvas.addEventListener("mousedown", fillIn);
palette.addEventListener("mousedown", changeColor);


function fillIn(e){
	if(e.target.classList.contains(paintColor))
	{
		e.target.classList.remove(paintColor);
	}
	else
	{
		e.target.classList.add(paintColor);
		e.target.classList.add("filled");
	}
}

function changeColor(e){
	switch (e.target.id)
	{
		case "red": paintColor = "red"; break;
		case "orange": paintColor = "orange"; break;
		case "yellow": paintColor = "yellow"; break;
		case "green": paintColor = "green"; break;
		case "blue": paintColor = "blue"; break;
		case "indigo": paintColor = "indigo"; break;
		case "violet": paintColor = "violet"; break;

	}
}
