document.addEventListener("DOMContentLoaded", function () {
    var toggleSections = function (id) {
        var section = document.getElementById(id);
        if (section) {
            section.style.display = section.style.display === 'none' ? 'block' : 'none';
        }
    };
});
// elements
var toggleSkillsButton = document.getElementById('toggleSkills');
var skillsSection = document.getElementById('skills');
// event listener
toggleSkillsButton === null || toggleSkillsButton === void 0 ? void 0 : toggleSkillsButton.addEventListener('click', function () {
    // condition
    if ((skillsSection === null || skillsSection === void 0 ? void 0 : skillsSection.style.display) === 'none') {
        skillsSection.style.display = 'block';
    }
    else {
        skillsSection.style.display = 'none';
    }
});
