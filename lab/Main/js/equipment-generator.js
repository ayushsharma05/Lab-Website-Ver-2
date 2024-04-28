// Loop through arrays to create HTML elements for each equipment
//------------------------------------------------------------------------------------------------------------------------

var equipmentHTMLArray = [];
var equipmentButtons = [];

// Append "Show Previous 3.." HTML code
equipmentHTMLArray.push('<div class="unhide-three-previous-container" style="display:flex; align-items:center; justify-content:center;"><a class="unhide-three-previous"><i class="fa-solid fa-backward"></i></a></div><div id="middle-equipments-container">');

for (var i = 0; i <imgSrcArray.length; i++) {
    // Create equipment HTML code
    var equipmentHTML = '<div class="col-md-9 hidden-equipment unique-element">';
    equipmentHTML += '<div class="colored-container">';
    equipmentHTML += '<div class="equipment-box">';
    equipmentHTML += '<div class="equipment">';
    equipmentHTML += '<img src="' + imgSrcArray[i] + '" alt="Incharge Photo">';
    equipmentHTML += '<div class="equipment-name"><h5>' + equipmentNameArray[i] + '</h5></div>';
    equipmentHTML += '<div class="about-equipment"><p>' + equipmentInfoArray[i] + '</p></div>';
    if(clickedLink != "ComputationalLaboratory"){
        equipmentHTML += '<div class="IScode"><p><strong>IS CODE:</strong> ' + isCodeArray[i] + '</p></div>';
    }
    /*equipmentHTML += '<a href="' + externalSourceArray[i] + '">Click Here to read on Wikipedia</a>';*/
    equipmentHTML += '</div></div></div></div>';
    
    // Add generated HTML code to the array
    equipmentHTMLArray.push(equipmentHTML);
}

// Append "Show Next 3.." HTML code
equipmentHTMLArray.push('</div><div class="unhide-three-next-container" style="display:flex; align-items:center; justify-content:center;"><a class="unhide-three-next"><i class="fa-solid fa-forward"></i></a></div>');

// Append "unhide-three-container" HTML code
equipmentButtons.push('<div class="unhide-three-container hidden-equipment"></div>');

// Append the buttons HTML to the end of the equipments-container div
document.getElementById('equipment-heading-container').insertAdjacentHTML('afterEnd', equipmentButtons.join(''));


//push main html structure
document.getElementById('Equipments').innerHTML = equipmentHTMLArray.join('');
//---------------------------------------------------------------------------------------------------------------------------
