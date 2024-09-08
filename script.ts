document.addEventListener("DOMContentLoaded", () => {
    const toggleSections = (id: string) => {
        const section = document.getElementById(id);
        if (section) {
            section.style.display = section.style.display === 'none' ? 'block' : 'none';
        }
    };
});

// Elements
const toggleSkillsButton = document.getElementById('toggleSkills') as HTMLButtonElement | null;
const skillsSection = document.getElementById('skills') as HTMLElement | null;

// Event listener
toggleSkillsButton?.addEventListener('click', () => {
    if (skillsSection?.style.display === 'none') {
        skillsSection.style.display = 'block';
    } else {
        skillsSection.style.display = 'none';
    }
});

document.getElementById('resumeForm')?.addEventListener('submit', (event) => {
    event.preventDefault();
    generateResume();
});

function generateResume() {
    const profileImageInput = document.getElementById('profileImage') as HTMLInputElement;
    const profileImage = profileImageInput.files?.[0];
    const name = (document.getElementById('name') as HTMLInputElement).value;
    const profession = (document.getElementById('profession') as HTMLInputElement).value;
    const email = (document.getElementById('email') as HTMLInputElement).value;
    const phone = (document.getElementById('phone') as HTMLInputElement).value;
    const overview = (document.getElementById('overview') as HTMLTextAreaElement).value;
    const education = (document.getElementById('education') as HTMLTextAreaElement).value;
    const experience = (document.getElementById('experience') as HTMLTextAreaElement).value;
    const skills = (document.getElementById('skills') as HTMLTextAreaElement).value;
    const contact = (document.getElementById('contact') as HTMLTextAreaElement).value;
    const linkedin = (document.getElementById('linkedin') as HTMLInputElement).value;
    const github = (document.getElementById('github') as HTMLInputElement).value;
    const projects = (document.getElementById('projects') as HTMLTextAreaElement).value;
    const certifications = (document.getElementById('certifications') as HTMLTextAreaElement).value;
    const twitter = (document.getElementById('twitter') as HTMLInputElement).value;
    const instagram = (document.getElementById('instagram') as HTMLInputElement).value;
    const stackoverflow = (document.getElementById('stackoverflow') as HTMLInputElement).value;
    const linkedinBadge = (document.getElementById('linkedinBadge') as HTMLInputElement).checked;

    const reader = new FileReader();
    reader.onload = (e) => {
        const resumeTemplate = `
            <html>
            <head>
                <style>
                    .resume {
                        font-family: Arial, sans-serif;
                    }
                    .left-column {
                        width: 100%;
                    }
                    #profile img {
                        width: 150px;
                        height: 150px;
                        border-radius: 50%;
                        display: flex;
                        text-align: center;
                        justify-content: center;
                    }
                    h2 {
                        color: #FF6A00;
                        position: relative;
                        padding-bottom: 10px;
                    }
                    h2::after {
                        content: '';
                        position: absolute;
                        left: 0;
                        bottom: 0;
                        width: 100%;
                        height: 2px;
                        background-color: #000;
                    }
                    .resume * {
                        border: none;
                    }
                </style>
            </head>
            <body>
                <div class="resume">
                    <div class="left-column">
                        <section id="profile">
                            <img src="${(e.target as FileReader).result}" class="profile-pic">
                            <h1>${name}</h1>
                            <p id="profession"><b>${profession}</b></p>
                        </section>
                        <section id="summary">
                            ${overview}
                        </section>
                        <section id="education">
                            <h2>Education</h2>
                            ${education}
                        </section>
                        <section id="experience">
                            <h2>Experience</h2>
                            ${experience}
                        </section>
                        <section id="skills">
                            <h2>Skills</h2>
                            ${skills}
                        </section>
                        <section id="contact">
                            <h2>Contact Info</h2>
                            <p>${contact}</p>
                            <p>LinkedIn: <a href="${linkedin}">${linkedin}</a></p>
                            <p>GitHub: <a href="${github}">${github}</a></p>
                        </section>
                        <section id="projects">
                            <h2>Projects</h2>
                            ${projects}
                        </section>
                        <section id="certifications">
                            <h2>Certifications</h2>
                            ${certifications}
                        </section>
                        <section id="social">
                            <h2>Social Links</h2>
                            <p>Twitter: <a href="${twitter}">${twitter}</a></p>
                            <p>Instagram: <a href="${instagram}">${instagram}</a></p>
                            <p>Stack Overflow: <a href="${stackoverflow}">${stackoverflow}</a></p>
                            ${linkedinBadge ? '<p>LinkedIn Badge: Included</p>' : ''}
                        </section>
                    </div>
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
