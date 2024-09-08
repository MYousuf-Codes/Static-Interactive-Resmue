var _a;
document.addEventListener("DOMContentLoaded", function () {
    var toggleSections = function (id) {
        var section = document.getElementById(id);
        if (section) {
            section.style.display = section.style.display === 'none' ? 'block' : 'none';
        }
    };
});
// Elements
var toggleSkillsButton = document.getElementById('toggleSkills');
var skillsSection = document.getElementById('skills');
// Event listener
toggleSkillsButton === null || toggleSkillsButton === void 0 ? void 0 : toggleSkillsButton.addEventListener('click', function () {
    if ((skillsSection === null || skillsSection === void 0 ? void 0 : skillsSection.style.display) === 'none') {
        skillsSection.style.display = 'block';
    }
    else {
        skillsSection.style.display = 'none';
    }
});
(_a = document.getElementById('resumeForm')) === null || _a === void 0 ? void 0 : _a.addEventListener('submit', function (event) {
    event.preventDefault();
    generateResume();
});
function generateResume() {
    var _a;
    var profileImageInput = document.getElementById('profileImage');
    var profileImage = (_a = profileImageInput.files) === null || _a === void 0 ? void 0 : _a[0];
    var name = document.getElementById('name').value;
    var profession = document.getElementById('profession').value;
    var email = document.getElementById('email').value;
    var phone = document.getElementById('phone').value;
    var overview = document.getElementById('overview').value;
    var education = document.getElementById('education').value;
    var experience = document.getElementById('experience').value;
    var skills = document.getElementById('skills').value;
    var contact = document.getElementById('contact').value;
    var linkedin = document.getElementById('linkedin').value;
    var github = document.getElementById('github').value;
    var projects = document.getElementById('projects').value;
    var certifications = document.getElementById('certifications').value;
    var twitter = document.getElementById('twitter').value;
    var instagram = document.getElementById('instagram').value;
    var stackoverflow = document.getElementById('stackoverflow').value;
    var linkedinBadge = document.getElementById('linkedinBadge').checked;
    var reader = new FileReader();
    reader.onload = function (e) {
        var resumeTemplate = "\n            <html>\n            <head>\n                <style>\n                    .resume {\n                        font-family: Arial, sans-serif;\n                    }\n                    .left-column {\n                        width: 100%;\n                    }\n                    #profile img {\n                        width: 150px;\n                        height: 150px;\n                        border-radius: 50%;\n                        display: flex;\n                        text-align: center;\n                        justify-content: center;\n                    }\n                    h2 {\n                        color: #FF6A00;\n                        position: relative;\n                        padding-bottom: 10px;\n                    }\n                    h2::after {\n                        content: '';\n                        position: absolute;\n                        left: 0;\n                        bottom: 0;\n                        width: 100%;\n                        height: 2px;\n                        background-color: #000;\n                    }\n                    .resume * {\n                        border: none;\n                    }\n                </style>\n            </head>\n            <body>\n                <div class=\"resume\">\n                    <div class=\"left-column\">\n                        <section id=\"profile\">\n                            <img src=\"".concat(e.target.result, "\" class=\"profile-pic\">\n                            <h1>").concat(name, "</h1>\n                            <p id=\"profession\"><b>").concat(profession, "</b></p>\n                        </section>\n                        <section id=\"summary\">\n                            ").concat(overview, "\n                        </section>\n                        <section id=\"education\">\n                            <h2>Education</h2>\n                            ").concat(education, "\n                        </section>\n                        <section id=\"experience\">\n                            <h2>Experience</h2>\n                            ").concat(experience, "\n                        </section>\n                        <section id=\"skills\">\n                            <h2>Skills</h2>\n                            ").concat(skills, "\n                        </section>\n                        <section id=\"contact\">\n                            <h2>Contact Info</h2>\n                            <p>").concat(contact, "</p>\n                            <p>LinkedIn: <a href=\"").concat(linkedin, "\">").concat(linkedin, "</a></p>\n                            <p>GitHub: <a href=\"").concat(github, "\">").concat(github, "</a></p>\n                        </section>\n                        <section id=\"projects\">\n                            <h2>Projects</h2>\n                            ").concat(projects, "\n                        </section>\n                        <section id=\"certifications\">\n                            <h2>Certifications</h2>\n                            ").concat(certifications, "\n                        </section>\n                        <section id=\"social\">\n                            <h2>Social Links</h2>\n                            <p>Twitter: <a href=\"").concat(twitter, "\">").concat(twitter, "</a></p>\n                            <p>Instagram: <a href=\"").concat(instagram, "\">").concat(instagram, "</a></p>\n                            <p>Stack Overflow: <a href=\"").concat(stackoverflow, "\">").concat(stackoverflow, "</a></p>\n                            ").concat(linkedinBadge ? '<p>LinkedIn Badge: Included</p>' : '', "\n                        </section>\n                    </div>\n                </div>\n            </body>\n            </html>\n        ");
        var newWindow = window.open();
        newWindow === null || newWindow === void 0 ? void 0 : newWindow.document.write(resumeTemplate);
        newWindow === null || newWindow === void 0 ? void 0 : newWindow.document.close();
    };
    if (profileImage) {
        reader.readAsDataURL(profileImage);
    }
}
