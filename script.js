document.addEventListener("DOMContentLoaded", function () {
    var toggleSkillsButton = document.getElementById('toggleSkills');
    var skillsSection = document.getElementById('skills');
    
    toggleSkillsButton.addEventListener('click', function () {
        if (skillsSection.style.display === 'none' || skillsSection.style.display === '') {
            skillsSection.style.display = 'block';
        } else {
            skillsSection.style.display = 'none';
        }
    });
});

document.addEventListener("DOMContentLoaded", () => {
    document.getElementById('resumeForm').addEventListener('submit', (event) => {
        event.preventDefault();
        generateResume();
    });
});

function generateResume() {
    const profileImageInput = document.getElementById('profileImage');
    const profileImage = profileImageInput.files?.[0];
    const name = document.getElementById('name').value;
    const profession = document.getElementById('profession').value;
    const overview = document.getElementById('overview').value;
    const education = document.getElementById('education').value;
    const experience = document.getElementById('experience').value;
    const skills = document.getElementById('skills').value;
    const contact = document.getElementById('contact').value;
    const linkedin = document.getElementById('linkedin').value;
    const github = document.getElementById('github').value;
    const projects = document.getElementById('projects').value;
    const certifications = document.getElementById('certifications').value;

    const reader = new FileReader();
    reader.onload = (e) => {
        const resumeTemplate = `
            <html>
            <head>
                <style>
                    body {
                        font-family: Arial, sans-serif;
                        margin: 20px;
                    }
                    .resume {
                        width: 80%;
                        margin: 0 auto;
                        border: 2px solid #333;
                        padding: 20px;
                        border-radius: 10px;
                    }
                    h1, h2 {
                        color: #FF6A00;
                    }
                    img {
                        width: 150px;
                        height: 150px;
                        border-radius: 50%;
                        display: block;
                        margin: 0 auto;
                    }
                    .section {
                        margin-bottom: 20px;
                    }
                    [contenteditable="true"] {
                        border: 1px dashed #ccc;
                        padding: 5px;
                    }
                </style>
            </head>
            <body>
                <div class="resume">
                    <section class="section" contenteditable="true">
                        <img src="${e.target.result}" alt="Profile Picture" />
                        <h1>${name}</h1>
                        <h2>${profession}</h2>
                    </section>
                    <section class="section" contenteditable="true">
                        <h2>Career Overview</h2>
                        <p>${overview}</p>
                    </section>
                    <section class="section" contenteditable="true">
                        <h2>Education</h2>
                        <p>${education}</p>
                    </section>
                    <section class="section" contenteditable="true">
                        <h2>Experience</h2>
                        <p>${experience}</p>
                    </section>
                    <section class="section" contenteditable="true">
                        <h2>Skills</h2>
                        <p>${skills}</p>
                    </section>
                    <section class="section" contenteditable="true">
                        <h2>Contact Info</h2>
                        <p>${contact}</p>
                        <p>LinkedIn: <a href="${linkedin}">${linkedin}</a></p>
                        <p>GitHub: <a href="${github}">${github}</a></p>
                    </section>
                    <section class="section" contenteditable="true">
                        <h2>Projects</h2>
                        <p>${projects}</p>
                    </section>
                    <section class="section" contenteditable="true">
                        <h2>Certifications</h2>
                        <p>${certifications}</p>
                    </section>
                    <button onclick="window.print()">Download Resume</button>
                </div>
            </body>
            </html>
        `;

        const newWindow = window.open();
        newWindow.document.write(resumeTemplate);
        newWindow.document.close();
    };

    if (profileImage) {
        reader.readAsDataURL(profileImage);
    }
}
