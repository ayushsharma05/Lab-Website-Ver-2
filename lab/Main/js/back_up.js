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
    equipmentHTML += '<div class="equipment-name"><h5>' + equipmentNameArray[i] + '</h5></div>';
    equipmentHTML += '<div class="about-equipment"><p>' + equipmentInfoArray[i] + '</p></div>';
    equipmentHTML += '<div class="IScode"><p><strong>IS CODE:</strong> ' + isCodeArray[i] + '</p></div>';
    /*equipmentHTML += '<a href="' + externalSourceArray[i] + '">Click Here to read on Wikipedia</a>';*/
    equipmentHTML += '</div></div></div></div>';
    
    // Add generated HTML code to the array
    equipmentHTMLArray.push(equipmentHTML);
}

// Append all generated equipment HTML code to the desired section in your HTML
document.getElementById('Equipments').innerHTML = equipmentHTMLArray.join('');


// Append "Show Previous 3.." HTML code
equipmentButtons.push('<div class= "equipment-buttons"><div class="unhide-three-previous-container"><a class="unhide-three-previous"><i class="fa-solid fa-backward"></i>= Previous</a></div>');

// Append "unhide-three-container" HTML code
equipmentButtons.push('<div class="unhide-three-container hidden-equipment"></div>');

// Append "Show Next 3.." HTML code
equipmentButtons.push('<div class="unhide-three-next-container"><a class="unhide-three-next">Next =<i class="fa-solid fa-forward"></i></a></div></div>');

// Append the buttons HTML to the end of the equipments-container div
document.getElementById('equipment-heading-container').insertAdjacentHTML('afterEnd', equipmentButtons.join(''));

//---------------------------------------------------------------------------------------------------------------------------











//paging equipments
//----------------------------------------------------------------------------------------------------------------------------
document.addEventListener("DOMContentLoaded", function(){
    var currentStartIndex = 0;
    var currentEndIndex = 0;
    
    function updateVisibility(){
        var screenWidth = window.innerWidth; // Get the current screen width
        var itemsToShow = screenWidth <= 992 ? 1 : 2; // Determine the number of items to show based on screen width
        currentEndIndex = currentStartIndex + itemsToShow - 1;
        
        var allEquipments = document.querySelectorAll('.unique-element');
        allEquipments.forEach(function(element, index){
            if(index >= currentStartIndex && index <= currentEndIndex){
                element.classList.remove('hidden-equipment');
                element.classList.add('flex-equipment');
            } else {
                element.classList.add('hidden-equipment');
                element.classList.remove('flex-equipment');
            }
        });
        
        var unhideThreeContainer = document.querySelector('.unhide-three-container');
        if(itemsToShow <= 2) {
            unhideThreeContainer.classList.add('hidden-equipment');
        } else {
            unhideThreeContainer.classList.remove('hidden-equipment');
        }
    }

    updateVisibility();

    document.querySelector('.unhide-three-next').addEventListener('click', function(){
        var screenWidth = window.innerWidth; // Get the current screen width
        var itemsToMove = screenWidth <= 992 ? 1 : 2; // Determine the number of items to move based on screen width
        currentStartIndex += itemsToMove;

        if(currentEndIndex >= imgSrcArray.length){
            currentEndIndex = currentEndIndex % imgSrcArray.length;
        }

        if(currentStartIndex >= imgSrcArray.length){
            currentStartIndex = currentStartIndex % imgSrcArray.length;
        }

        updateVisibility();
    });

    document.querySelector('.unhide-three-previous').addEventListener('click', function(){
        var screenWidth = window.innerWidth; // Get the current screen width
        var itemsToMove = screenWidth <= 992 ? 1 : 2; // Determine the number of items to move based on screen width
        currentStartIndex -= itemsToMove;

        if(currentEndIndex <= 0){
            currentEndIndex = (imgSrcArray.length + (currentEndIndex % imgSrcArray.length)) % imgSrcArray.length;
        }

        if(currentStartIndex <= 0){
            currentStartIndex = (imgSrcArray.length + (currentStartIndex % imgSrcArray.length)) % imgSrcArray.length;
        }

        updateVisibility();
    });
});
//-----------------------------------------------------------------------------------------------------------------------
