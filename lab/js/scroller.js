// Scroll to respective sections
//-------------------------------------------------------------------------------------------------------------------------
document.addEventListener('DOMContentLoaded', function() {
    const scrollToEquipmentsBtn = document.getElementById('scroll-to-labs');
    const equipmentsSection = document.getElementById('scrolled-to-labs');

    scrollToEquipmentsBtn.addEventListener('click', function(event) {
        event.preventDefault();
        equipmentsSection.scrollIntoView({ behavior: 'smooth' });
    });
});

document.addEventListener('DOMContentLoaded', function() {
    const scrollToEquipmentsBtn = document.getElementById('scroll-to-about');
    const equipmentsSection = document.getElementById('scrolled-to-about');

    scrollToEquipmentsBtn.addEventListener('click', function(event) {
        event.preventDefault();
        equipmentsSection.scrollIntoView({ behavior: 'smooth' });
    });
});

document.addEventListener('DOMContentLoaded', function() {
    const scrollToEquipmentsBtn = document.getElementById('scroll-to-incharge');
    const equipmentsSection = document.getElementById('scrolled-to-incharge');

    scrollToEquipmentsBtn.addEventListener('click', function(event) {
        event.preventDefault();
        equipmentsSection.scrollIntoView({ behavior: 'smooth' });
    });
});

document.addEventListener('DOMContentLoaded', function() {
    const scrollToEquipmentsBtn = document.getElementById('scroll-to-lab-outcome');
    const equipmentsSection = document.getElementById('scrolled-to-lab-outcome');

    scrollToEquipmentsBtn.addEventListener('click', function(event) {
        event.preventDefault();
        equipmentsSection.scrollIntoView({ behavior: 'smooth' });
    });
});

document.addEventListener('DOMContentLoaded', function() {
    const scrollToEquipmentsBtn = document.getElementById('scroll-to-contact-us');
    const equipmentsSection = document.getElementById('scrolled-to-contact-us');

    scrollToEquipmentsBtn.addEventListener('click', function(event) {
        event.preventDefault();
        equipmentsSection.scrollIntoView({ behavior: 'smooth' });
    });
});
//--------------------------------------------------------------------------------------------------------------------------
