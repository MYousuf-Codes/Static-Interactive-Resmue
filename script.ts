
// Import jQuery
import $ from 'jquery';

// HTML Elements and Type Definitions
const hamburger = document.getElementById('hamburger-icon') as HTMLElement;
const menu = document.querySelector('.main-menu') as HTMLElement;
const mainForm = document.getElementById('cv-form') as HTMLFormElement;

const nameDsp = document.getElementById('name-dsp') as HTMLElement;
const phonenoDsp = document.getElementById('phoneno-dsp') as HTMLElement;
const emailDsp = document.getElementById('email-dsp') as HTMLElement;
const addressDsp = document.getElementById('address-dsp') as HTMLElement;
const designationDsp = document.getElementById('designation-dsp') as HTMLElement;
const summaryDsp = document.getElementById('summary-dsp') as HTMLElement;
const projectsDsp = document.getElementById('projects-dsp') as HTMLElement;
const achievementsDsp = document.getElementById('achievements-dsp') as HTMLElement;
const skillsDsp = document.getElementById('skills-dsp') as HTMLElement;
const educationsDsp = document.getElementById('educations-dsp') as HTMLElement;
const experiencesDsp = document.getElementById('experiences-dsp') as HTMLElement;
const imageElem = document.getElementById('image-input') as HTMLInputElement;
const imageDsp = document.getElementById('image-dsp') as HTMLImageElement;

interface UserData {
    firstname: string;
    middlename: string;
    lastname: string;
    designation: string;
    address: string;
    email: string;
    phoneno: string;
    summary: string;
    achievements: Array<Record<string, string>>;
    experiences: Array<Record<string, string>>;
    educations: Array<Record<string, string>>;
    projects: Array<Record<string, string>>;
    skills: Array<Record<string, string>>;
}

const validType = {
    TEXT: 'text',
    TEXT_EMP: 'text_emp',
    EMAIL: 'email',
    DIGIT: 'digit',
    PHONENO: 'phoneno',
    ANY: 'any',
} as const;

type ValidType = typeof validType[keyof typeof validType];

// Regex for validation
const strRegex = /^[a-zA-Z\s]*$/;
const emailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
const phoneRegex = /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/im;
const digitRegex = /^\d+$/;

// Hamburger Menu Toggle
hamburger.addEventListener('click', () => {
    menu.classList.toggle('show');
});

// Function to Fetch Repeated Form Values
const fetchValues = (attrs: string[], ...nodeLists: NodeListOf<HTMLInputElement>[]): Array<Record<string, string>> => {
    const tempDataArr: Array<Record<string, string>> = [];

    nodeLists[0].forEach((_, i) => {
        const dataObj: Record<string, string> = {};
        attrs.forEach((attr, j) => {
            dataObj[attr] = nodeLists[j][i].value;
        });
        tempDataArr.push(dataObj);
    });

    return tempDataArr;
};

// Fetch User Inputs
const getUserInputs = (): UserData => {
    const achievementsTitleElem = document.querySelectorAll('.achieve_title') as NodeListOf<HTMLInputElement>;
    const achievementsDescriptionElem = document.querySelectorAll('.achieve_description') as NodeListOf<HTMLInputElement>;
    const expTitleElem = document.querySelectorAll('.exp_title') as NodeListOf<HTMLInputElement>;
    const expOrganizationElem = document.querySelectorAll('.exp_organization') as NodeListOf<HTMLInputElement>;
    const expLocationElem = document.querySelectorAll('.exp_location') as NodeListOf<HTMLInputElement>;
    const expStartDateElem = document.querySelectorAll('.exp_start_date') as NodeListOf<HTMLInputElement>;
    const expEndDateElem = document.querySelectorAll('.exp_end_date') as NodeListOf<HTMLInputElement>;
    const expDescriptionElem = document.querySelectorAll('.exp_description') as NodeListOf<HTMLInputElement>;
    const eduSchoolElem = document.querySelectorAll('.edu_school') as NodeListOf<HTMLInputElement>;
    const eduDegreeElem = document.querySelectorAll('.edu_degree') as NodeListOf<HTMLInputElement>;
    const eduCityElem = document.querySelectorAll('.edu_city') as NodeListOf<HTMLInputElement>;
    const eduStartDateElem = document.querySelectorAll('.edu_start_date') as NodeListOf<HTMLInputElement>;
    const eduGraduationDateElem = document.querySelectorAll('.edu_graduation_date') as NodeListOf<HTMLInputElement>;
    const eduDescriptionElem = document.querySelectorAll('.edu_description') as NodeListOf<HTMLInputElement>;
    const projTitleElem = document.querySelectorAll('.proj_title') as NodeListOf<HTMLInputElement>;
    const projLinkElem = document.querySelectorAll('.proj_link') as NodeListOf<HTMLInputElement>;
    const projDescriptionElem = document.querySelectorAll('.proj_description') as NodeListOf<HTMLInputElement>;
    const skillElem = document.querySelectorAll('.skill') as NodeListOf<HTMLInputElement>;

    return {
        firstname: (mainForm['firstname'] as HTMLInputElement).value,
        middlename: (mainForm['middlename'] as HTMLInputElement).value,
        lastname: (mainForm['lastname'] as HTMLInputElement).value,
        designation: (mainForm['designation'] as HTMLInputElement).value,
        address: (mainForm['address'] as HTMLInputElement).value,
        email: (mainForm['email'] as HTMLInputElement).value,
        phoneno: (mainForm['phoneno'] as HTMLInputElement).value,
        summary: (mainForm['summary'] as HTMLInputElement).value,
        achievements: fetchValues(['achieve_title', 'achieve_description'], achievementsTitleElem, achievementsDescriptionElem),
        experiences: fetchValues(['exp_title', 'exp_organization', 'exp_location', 'exp_start_date', 'exp_end_date', 'exp_description'], expTitleElem, expOrganizationElem, expLocationElem, expStartDateElem, expEndDateElem, expDescriptionElem),
        educations: fetchValues(['edu_school', 'edu_degree', 'edu_city', 'edu_start_date', 'edu_graduation_date', 'edu_description'], eduSchoolElem, eduDegreeElem, eduCityElem, eduStartDateElem, eduGraduationDateElem, eduDescriptionElem),
        projects: fetchValues(['proj_title', 'proj_link', 'proj_description'], projTitleElem, projLinkElem, projDescriptionElem),
        skills: fetchValues(['skill'], skillElem),
    };
};

// Validation Function
function validateFormData(elem: HTMLInputElement, elemType: ValidType, elemName: string): void {
    const validationMap: {
        text: RegExp | null;
        text_emp: RegExp | null;
        email: RegExp | null;
        digit: RegExp | null;
        phoneno: RegExp | null;
        any: RegExp | null;
    } = {
        text: /^[a-zA-Z\s]+$/,                // Regular expression for text only
        text_emp: /^.+$/,                     // Non-empty text validation
        email: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/, // Email validation
        digit: /^\d+$/,                       // Digits only validation
        phoneno: /^[0-9]{10}$/,               // 10-digit phone number validation
        any: null                             // No specific validation for 'any'
    };
    

    const isValid = elem.value.trim().length > 0 && (!validationMap[elemType] || validationMap[elemType]!.test(elem.value));

    if (!isValid) {
        addErrMsg(elem, elemName);
    } else {
        removeErrMsg(elem);
    }
}

// Adding and Removing Error Messages
function addErrMsg(formElem: HTMLElement, formElemName: string): void {
    formElem.nextElementSibling!.innerHTML = `${formElemName} is invalid`;
}

function removeErrMsg(formElem: HTMLElement): void {
    formElem.nextElementSibling!.innerHTML = "";
}

// Display and Generate CV Functions
const showListData = (listData: Array<Record<string, string>>, listContainer: HTMLElement): void => {
    listContainer.innerHTML = "";
    listData.forEach(listItem => {
        const itemElem = document.createElement('div');
        itemElem.classList.add('preview-item');
        
        Object.values(listItem).forEach(value => {
            const subItemElem = document.createElement('span');
            subItemElem.classList.add('preview-item-val');
            subItemElem.innerHTML = value;
            itemElem.appendChild(subItemElem);
        });

        listContainer.appendChild(itemElem);
    });
};

const displayCV = (userData: UserData): void => {
    nameDsp.innerHTML = `${userData.firstname} ${userData.middlename} ${userData.lastname}`;
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

const generateCV = (): void => {
    const userData = getUserInputs();
    displayCV(userData);
};

// Event Listeners
mainForm.addEventListener('submit', (e) => {
    e.preventDefault();
    generateCV();
});

mainForm.querySelectorAll('input, textarea').forEach(elem => {
    const inputElem = elem as HTMLInputElement;
    const inputName = inputElem.name;

    if (inputName in validType) {
        inputElem.addEventListener('input', () => {
            validateFormData(inputElem, validType[inputName as keyof typeof validType], inputName);
        });
    }
});

// Preview Image Function
function previewImage(): void {
    const file = imageElem.files ? imageElem.files[0] : null;
    if (file) {
        const reader = new FileReader();
        reader.onload = function (ofEvent) {
            imageDsp.src = ofEvent.target!.result as string;
        };
        reader.readAsDataURL(file);
    }
}

imageElem.addEventListener('change', previewImage);

// Print CV Function
function printCV(): void {
    window.print();
}

$(document).ready(() => {
    // Initialize the repeater
    $('.repeater').repeater({
        initEmpty: false,
        defaultValues: {
            'text-input': ''
        },
        show: function () {
            $(this).slideDown();
        },
        hide: function (deleteElement: () => void) {
            $(this).slideUp(deleteElement);
            setTimeout(() => {
                generateCV();
            }, 500);
        },
        isFirstItemUndeletable: true
    });
});