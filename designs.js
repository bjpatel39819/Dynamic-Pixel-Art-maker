
const form = document.getElementById('sizePicker');
const table = document.getElementById('pixelCanvas')

form.addEventListener('submit', function (event) {
    event.preventDefault();

    let width = form.elements['inputWidth'].value; // define width enter by user input
    let height = form.elements['inputHeight'].value; // define height enter by user input

    table.innerHTML = '';   //clear the table

    makeGrid(height, width);  // When size is submitted by the user, call makeGrid()

    tableCellClickResponse();

});

// Create dynamic table grid based on user's input of height and width
function makeGrid(height, width) {
    for (let i = 0; i < height; i++) {

        let tRow = document.createElement('tr');

        for (let i = 0; i < width; i++) {
            var tCell = document.createElement('td');
            tRow.appendChild(tCell);
        }

        table.appendChild(tRow);
    };

};

// add click event listener to all cells inside td, function called when a user selects a color from the colorPicker.
function tableCellClickResponse() {
    const cell = table.getElementsByTagName('td');

    for (let i = 0; i < cell.length; i++) {
        cell[i].addEventListener('click', function (event) {
            let color = document.getElementById('colorPicker').value;  // Select color input


            event.currentTarget.bgColor = color;

        });
    }
}

