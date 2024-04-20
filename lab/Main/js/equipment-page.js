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
