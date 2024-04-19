//menu navbar
//-------------------------------------------------------------------------------------------------------------------------
document.querySelector('.navbar-toggle').addEventListener('click', function(){
    var AllMenuElements = document.querySelectorAll('.navbar-nav > li');
    var MainNavigation = document.querySelector('#main-navigation');
    
    AllMenuElements.forEach(function(element){
        if(element.style.display === 'block'){
            element.style.display = 'none';
            MainNavigation.style.display = 'none';
        }
        else{
            element.style.display = 'block';
            MainNavigation.style.display = 'block'
        }
    });
});
//-------------------------------------------------------------------------------------------------------------------------
