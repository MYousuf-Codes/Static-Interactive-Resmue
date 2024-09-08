document.addEventListener("DOMContentLoaded", () => {
    const toggleSkillsButton = document.getElementById('toggleSkills') as HTMLButtonElement;
    const skillsSection = document.getElementById('skills') as HTMLElement;

    toggleSkillsButton.addEventListener('click', () => {
        if (skillsSection.style.display === 'none' || skillsSection.style.display === '') {
            skillsSection.style.display = 'block';
        } else {
            skillsSection.style.display = 'none';
        }
    });
});

document.addEventListener("DOMContentLoaded", () => {
    const resumeForm = document.getElementById('resumeForm') as HTMLFormElement;
    resumeForm.addEventListener('submit', (event: Event) => {
        event.preventDefault();
        generateResume();
    });
});

function generateResume() {
    const profileImageInput = document.getElementById('profileImage') as HTMLInputElement;
    const profileImage = profileImageInput.files?.[0];

    const name = (document.getElementById('name') as HTMLInputElement).value;
    const profession = (document.getElementById('profession') as HTMLInputElement).value;
    const overview = (document.getElementById('overview') as HTMLTextAreaElement).value;
    const education = (document.getElementById('education') as HTMLTextAreaElement).value;
    const experience = (document.getElementById('experience') as HTMLTextAreaElement).value;
    const skills = (document.getElementById('skills') as HTMLTextAreaElement).value;
    const contact = (document.getElementById('contact') as HTMLTextAreaElement).value;
    const linkedin = (document.getElementById('linkedin') as HTMLInputElement).value;
    const github = (document.getElementById('github') as HTMLInputElement).value;
    const projects = (document.getElementById('projects') as HTMLTextAreaElement).value;
    const certifications = (document.getElementById('certifications') as HTMLTextAreaElement).value;

    const reader = new FileReader();
    reader.onload = (e: ProgressEvent<FileReader>) => {
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
                        <img src="${e.target?.result}" alt="Profile Picture" />
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
        newWindow?.document.write(resumeTemplate);
        newWindow?.document.close();
    };

    if (profileImage) {
        reader.readAsDataURL(profileImage);
    }
}
