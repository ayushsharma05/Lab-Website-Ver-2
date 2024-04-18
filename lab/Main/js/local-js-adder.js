const queryParams = new URLSearchParams(window.location.search);
const clickedLink = queryParams.get('link');

if(clickedLink){
    document.write(`<script src="../branches/${clickedLink}/js/equipment-info.js"><\/script>`);
    document.write(`<script src="../branches/${clickedLink}/js/lab-info.js"><\/script>`);
}