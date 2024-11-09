"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// Import jQuery
var jquery_1 = require("jquery");
// HTML Elements and Type Definitions
var hamburger = document.getElementById('hamburger-icon');
var menu = document.querySelector('.main-menu');
var mainForm = document.getElementById('cv-form');
var nameDsp = document.getElementById('name-dsp');
var phonenoDsp = document.getElementById('phoneno-dsp');
var emailDsp = document.getElementById('email-dsp');
var addressDsp = document.getElementById('address-dsp');
var designationDsp = document.getElementById('designation-dsp');
var summaryDsp = document.getElementById('summary-dsp');
var projectsDsp = document.getElementById('projects-dsp');
var achievementsDsp = document.getElementById('achievements-dsp');
var skillsDsp = document.getElementById('skills-dsp');
var educationsDsp = document.getElementById('educations-dsp');
var experiencesDsp = document.getElementById('experiences-dsp');
var imageElem = document.getElementById('image-input');
var imageDsp = document.getElementById('image-dsp');
var validType = {
    TEXT: 'text',
    TEXT_EMP: 'text_emp',
    EMAIL: 'email',
    DIGIT: 'digit',
    PHONENO: 'phoneno',
    ANY: 'any',
};
// Regex for validation
var strRegex = /^[a-zA-Z\s]*$/;
var emailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
var phoneRegex = /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/im;
var digitRegex = /^\d+$/;
// Hamburger Menu Toggle
hamburger.addEventListener('click', function () {
    menu.classList.toggle('show');
});
// Function to Fetch Repeated Form Values
var fetchValues = function (attrs) {
    var nodeLists = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        nodeLists[_i - 1] = arguments[_i];
    }
    var tempDataArr = [];
    nodeLists[0].forEach(function (_, i) {
        var dataObj = {};
        attrs.forEach(function (attr, j) {
            dataObj[attr] = nodeLists[j][i].value;
        });
        tempDataArr.push(dataObj);
    });
    return tempDataArr;
};
// Fetch User Inputs
var getUserInputs = function () {
    var achievementsTitleElem = document.querySelectorAll('.achieve_title');
    var achievementsDescriptionElem = document.querySelectorAll('.achieve_description');
    var expTitleElem = document.querySelectorAll('.exp_title');
    var expOrganizationElem = document.querySelectorAll('.exp_organization');
    var expLocationElem = document.querySelectorAll('.exp_location');
    var expStartDateElem = document.querySelectorAll('.exp_start_date');
    var expEndDateElem = document.querySelectorAll('.exp_end_date');
    var expDescriptionElem = document.querySelectorAll('.exp_description');
    var eduSchoolElem = document.querySelectorAll('.edu_school');
    var eduDegreeElem = document.querySelectorAll('.edu_degree');
    var eduCityElem = document.querySelectorAll('.edu_city');
    var eduStartDateElem = document.querySelectorAll('.edu_start_date');
    var eduGraduationDateElem = document.querySelectorAll('.edu_graduation_date');
    var eduDescriptionElem = document.querySelectorAll('.edu_description');
    var projTitleElem = document.querySelectorAll('.proj_title');
    var projLinkElem = document.querySelectorAll('.proj_link');
    var projDescriptionElem = document.querySelectorAll('.proj_description');
    var skillElem = document.querySelectorAll('.skill');
    return {
        firstname: mainForm['firstname'].value,
        middlename: mainForm['middlename'].value,
        lastname: mainForm['lastname'].value,
        designation: mainForm['designation'].value,
        address: mainForm['address'].value,
        email: mainForm['email'].value,
        phoneno: mainForm['phoneno'].value,
        summary: mainForm['summary'].value,
        achievements: fetchValues(['achieve_title', 'achieve_description'], achievementsTitleElem, achievementsDescriptionElem),
        experiences: fetchValues(['exp_title', 'exp_organization', 'exp_location', 'exp_start_date', 'exp_end_date', 'exp_description'], expTitleElem, expOrganizationElem, expLocationElem, expStartDateElem, expEndDateElem, expDescriptionElem),
        educations: fetchValues(['edu_school', 'edu_degree', 'edu_city', 'edu_start_date', 'edu_graduation_date', 'edu_description'], eduSchoolElem, eduDegreeElem, eduCityElem, eduStartDateElem, eduGraduationDateElem, eduDescriptionElem),
        projects: fetchValues(['proj_title', 'proj_link', 'proj_description'], projTitleElem, projLinkElem, projDescriptionElem),
        skills: fetchValues(['skill'], skillElem),
    };
};
// Validation Function
function validateFormData(elem, elemType, elemName) {
    var validationMap = {
        text: /^[a-zA-Z\s]+$/, // Regular expression for text only
        text_emp: /^.+$/, // Non-empty text validation
        email: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/, // Email validation
        digit: /^\d+$/, // Digits only validation
        phoneno: /^[0-9]{10}$/, // 10-digit phone number validation
        any: null // No specific validation for 'any'
    };
    var isValid = elem.value.trim().length > 0 && (!validationMap[elemType] || validationMap[elemType].test(elem.value));
    if (!isValid) {
        addErrMsg(elem, elemName);
    }
    else {
        removeErrMsg(elem);
    }
}
// Adding and Removing Error Messages
function addErrMsg(formElem, formElemName) {
    formElem.nextElementSibling.innerHTML = "".concat(formElemName, " is invalid");
}
function removeErrMsg(formElem) {
    formElem.nextElementSibling.innerHTML = "";
}
// Display and Generate CV Functions
var showListData = function (listData, listContainer) {
    listContainer.innerHTML = "";
    listData.forEach(function (listItem) {
        var itemElem = document.createElement('div');
        itemElem.classList.add('preview-item');
        Object.values(listItem).forEach(function (value) {
            var subItemElem = document.createElement('span');
            subItemElem.classList.add('preview-item-val');
            subItemElem.innerHTML = value;
            itemElem.appendChild(subItemElem);
        });
        listContainer.appendChild(itemElem);
    });
};
var displayCV = function (userData) {
    nameDsp.innerHTML = "".concat(userData.firstname, " ").concat(userData.middlename, " ").concat(userData.lastname);
    phonenoDsp.innerHTML = userData.phoneno;
    emailDsp.innerHTML = userData.email;
    addressDsp.innerHTML = userData.address;
    designationDsp.innerHTML = userData.designation;
    summaryDsp.innerHTML = userData.summary;
    showListData(userData.projects, projectsDsp);
    showListData(userData.achievements, achievementsDsp);
    showListData(userData.skills, skillsDsp);
    showListData(userData.educations, educationsDsp);
    showListData(userData.experiences, experiencesDsp);
};
var generateCV = function () {
    var userData = getUserInputs();
    displayCV(userData);
};
// Event Listeners
mainForm.addEventListener('submit', function (e) {
    e.preventDefault();
    generateCV();
});
mainForm.querySelectorAll('input, textarea').forEach(function (elem) {
    var inputElem = elem;
    var inputName = inputElem.name;
    if (inputName in validType) {
        inputElem.addEventListener('input', function () {
            validateFormData(inputElem, validType[inputName], inputName);
        });
    }
});
// Preview Image Function
function previewImage() {
    var file = imageElem.files ? imageElem.files[0] : null;
    if (file) {
        var reader = new FileReader();
        reader.onload = function (ofEvent) {
            imageDsp.src = ofEvent.target.result;
        };
        reader.readAsDataURL(file);
    }
}
imageElem.addEventListener('change', previewImage);
// Print CV Function
function printCV() {
    window.print();
}
(0, jquery_1.default)(document).ready(function () {
    // Initialize the repeater
    (0, jquery_1.default)('.repeater').repeater({
        initEmpty: false,
        defaultValues: {
            'text-input': ''
        },
        show: function () {
            (0, jquery_1.default)(this).slideDown();
        },
        hide: function (deleteElement) {
            (0, jquery_1.default)(this).slideUp(deleteElement);
            setTimeout(function () {
                generateCV();
            }, 500);
        },
        isFirstItemUndeletable: true
    });
});
