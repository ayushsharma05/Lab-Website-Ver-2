//---------------Don't edit this------------------------------------------------------------------------------------------
document.querySelector('#InchargePhoto').src = inchargeLab.InchargePhoto;
document.querySelector('#labName').innerHTML = labName.toUpperCase();
document.querySelector('#aboutLab').innerHTML = aboutLab;
document.querySelector('#labPurpose').innerHTML = '<strong>Purpose : </strong>' + labPurpose;
document.querySelector('#labLink').href = labLink;
document.querySelector('#labOutcome').innerHTML = labOutcome;
document.querySelector('#InchargeName').innerHTML = inchargeLab.Name;
document.querySelector('#InchargeName').href = inchargeLab.ProfileLink;
document.querySelector('#InchargeEmail').innerHTML = inchargeLab.Email;
document.querySelector('#InchargeDesignation').innerHTML = inchargeLab.Designation;
document.querySelector('#InchargeQualification').innerHTML = inchargeLab.Qualification;
document.querySelector('#InchargeSpecialization').innerHTML = inchargeLab.Specialization;
document.querySelector('#InchargeProfile').href = inchargeLab.ProfileLink;

const documentContent = '<title>'+labTitle+'</title><meta name="keywords" content='+labKeywords+ '/><meta name="description" content='+labDescription+'>'
document.getElementsByTagName('head')[0].insertAdjacentHTML('beforeend', documentContent);