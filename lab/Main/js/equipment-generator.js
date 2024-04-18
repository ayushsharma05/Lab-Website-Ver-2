// Loop through arrays to create HTML elements for each equipment
//------------------------------------------------------------------------------------------------------------------------

var equipmentHTMLArray = [];
var equipmentButtons = [];

for (var i = 0; i <imgSrcArray.length; i++) {
    // Create equipment HTML code
    var equipmentHTML = '<div class="col-md-9 hidden-equipment unique-element">';
    equipmentHTML += '<div class="colored-container">';
    equipmentHTML += '<div class="equipment-box">';
    equipmentHTML += '<div class="equipment">';
    equipmentHTML += '<img src="' + imgSrcArray[i] + '" alt="Incharge Photo">';
    equipmentHTML += '<h5 class="equipment-name">' + equipmentNameArray[i] + '</h5>';
    equipmentHTML += '<p class="about-equipment">' + equipmentInfoArray[i] + '</p>';
    equipmentHTML += '<p><strong>IS CODE:</strong> ' + isCodeArray[i] + '</p>';
    equipmentHTML += '<a href="' + externalSourceArray[i] + '">Click Here to read on Wikipedia</a>';
    equipmentHTML += '</div></div></div></div>';
    
    // Add generated HTML code to the array
    equipmentHTMLArray.push(equipmentHTML);
}

// Append all generated equipment HTML code to the desired section in your HTML
document.getElementById('Equipments').innerHTML = equipmentHTMLArray.join('');


// Append "Show Previous 3.." HTML code
equipmentButtons.push('<div><div class="unhide-three-previous-container"><a class="unhide-three-previous">Previous..</a></div>');

// Append "unhide-three-container" HTML code
equipmentButtons.push('<div class="unhide-three-container hidden-equipment"></div>');

// Append "Show Next 3.." HTML code
equipmentButtons.push('<div class="unhide-three-next-container"><a class="unhide-three-next">Next..</a></div></div>');

// Append the buttons HTML to the end of the equipments-container div
document.getElementById('equipments-container').insertAdjacentHTML('beforeend', equipmentButtons.join(''));

//---------------------------------------------------------------------------------------------------------------------------
