const gridHeight = 0;
const gridWidth = 0;

//add event listener to MakeGrid button passing Height & Width to function
//MakeGrid
document.getElementById('grid').addEventListener('click', (event) => {
  event.preventDefault();
  let gridHeight = document.getElementById('inputHeight').value;
  let gridWidth = document.getElementById('inputWidth').value;
  makeGrid(gridHeight,gridWidth);
});

//clears all the existing table elements and
// makes new table based on the height and width supplied

function makeGrid(h,w){
  document.getElementById('pixelCanvas').innerHTML = " ";
  for (let i = 1; i <= h; i++) {
    const newTablerows = document.createElement('tr')
    document.getElementById('pixelCanvas').appendChild(newTablerows);
    for (let j = 1; j <= w; j++){
      const newTablecolumns = document.createElement('td')
      document.getElementById('pixelCanvas').appendChild(newTablecolumns);
    }
  }
}


// event listener at table level adds listening to each of the
//individual td's.
document.getElementById('pixelCanvas').addEventListener('click', addColor);

// to change the background color of individual td's
function addColor(){
  const colorSelected = document.getElementById('colorPicker').value;
  event.target.style.backgroundColor = colorSelected;
}
