var contributions = document.querySelector(".hidden-contributions");
document.querySelector('.contri-icon').classList.add("fa-solid", "fa-arrow-right");
document.querySelector('.contri-button').addEventListener('click', function(){
    if(contributions.style.display === 'block'){
        document.querySelector('.contri-icon').classList.remove("fa-solid", "fa-angle-down");
        document.querySelector('.contri-icon').classList.add("fa-solid", "fa-arrow-right");
        contributions.style.display = 'none';
    }
    else{
        document.querySelector('.contri-icon').classList.remove("fa-solid", "fa-arrow-right");
        document.querySelector('.contri-icon').classList.add("fa-solid", "fa-angle-down");
        contributions.style.display = 'block';
    }
});
