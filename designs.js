// Dynamically set the size of the table as a N by M grid
// Choose a color
// Click a cell in the grid to fill that cell with a chosen color.


// Create table
const table = $('#pixelCanvas');


// Define makeGrid function
function makeGrid() {
	// Define grid rows and cols
	let inputRows = $('#inputHeight').val();
	let inputCols = $('#inputWeight').val();
	// Get rid of previous grid
	table.find('tbody').remove()
	// Initialize grid
	table.append('<tbody></tbody>');
	// Build grid
	for (let i = 0; i < inputRows; i++) {
		table.append('<tr></tr>');
	}
	for (let j = 0; j < inputCols; j++) {
		$('tr').append('<td class="blankCell"></td>');
		// Event listener for each cell
		$('td').on('click', function(){
			color = $('#colorPicker').val();
			if ($(this).hasClass('blankCell')){
				$(this).toggleClass('blankCell');
				$(this).css('background-color', color);
			};
		});
	};
};


// Call makeGrid() when submit is clicked
$('input[type="submit"]').on('click', function (event) {
	event.preventDefault()
	makeGrid();
});