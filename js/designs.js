// Select color input
const inputColor = $('#colorPicker');

// Select size input
const inputHeight = $('#input_height');
const inputWidth = $('#input_width');

// When size is submitted by the user, call makeGrid()
$('#sizePicker').submit(function(event) {
    makeGrid();
    event.preventDefault();
});

// Creates the grid based on user input
function makeGrid() {
    const designCanvas = $('#pixel_canvas');

    // If a grid exists, clear it before creating a new one
    if (designCanvas.children().length > 0) {
        designCanvas.empty();
    }

    // Creates the grid
    for(let row = 0; row < inputHeight.val(); row++) {
        const tr = $('<tr>');
        const td = '<td></td>';

        for (let col = 0; col < inputWidth.val(); col++) {
            $(td).appendTo(tr);
            tr.appendTo(designCanvas);
        }
    }

    // Sets the background color of the cell to the selected color
    $('td').click(function() {
      $(this).css('background', inputColor.val());
    });

}
