//---------------Don't edit this------------------------------------------------------------------------------------------
document.querySelector('#InchargePhoto').src = inchargeLab.InchargePhoto;
document.querySelector('#labName').innerHTML = labName.toUpperCase();
document.querySelector('#aboutLab').innerHTML = aboutLab;
document.querySelector('#labPurpose').innerHTML = '<strong>Purpose : </strong>' + labPurpose;
document.querySelector('#labLocation').innerHTML = '<strong>Location : </strong>' + labLocation;
//document.querySelector('#labLink').href = labLink;
document.querySelector('#labOutcome').innerHTML = labOutcome;
document.querySelector('#InchargeName').innerHTML = inchargeLab.Name;
document.querySelector('#InchargeName').href = inchargeLab.ProfileLink;
document.querySelector('#InchargeEmail').innerHTML = '<a href=mailto:'+ inchargeLab.Email + ' class="incharge-mail-link" style="color: #337ab7; text-decoration: none;" onmouseover="this.style.color=\'#000\'" onmouseout="this.style.color=\'#337ab7\'">'  + inchargeLab.Email + '</a>';
document.querySelector('#InchargeDesignation').innerHTML = inchargeLab.Designation;
document.querySelector('#InchargeQualification').innerHTML = inchargeLab.Qualification;
document.querySelector('#InchargeSpecialization').innerHTML = inchargeLab.Specialization;
document.querySelector('#InchargeProfile').href = inchargeLab.ProfileLink;
document.querySelector('#InchargeNameLink').href = inchargeLab.ProfileLink;

const documentContent = '<title>'+labTitle+'&#8211;Govt. of India, National Institute of Technology Delhi'+'</title><meta name="keywords" content='+labKeywords+ '/><meta name="description" content='+labDescription+'>'
document.getElementsByTagName('head')[0].insertAdjacentHTML('beforeend', documentContent);