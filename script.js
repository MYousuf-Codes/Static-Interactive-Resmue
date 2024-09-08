// Import the necessary modules from jsPDF
import { jsPDF } from "jspdf";
import html2canvas from "html2canvas";

// Ensure that all sections are editable and listen for changes
document.addEventListener("DOMContentLoaded", () => {
    const sections = document.querySelectorAll('[contenteditable=true]');
    const downloadButton = document.getElementById('downloadResume');
    const skillsSection = document.getElementById('skills');

    sections.forEach((section) => {
        section.addEventListener('blur', (event) => {
            const target = event.target;
            saveSectionChanges(target.id, target.innerHTML);
        });
    });

    if (downloadButton) {
        downloadButton.addEventListener('click', () => {
            downloadResume();
        });
    }

    // Handle possible null error for skillsSection
    if (skillsSection) {
        skillsSection.style.display = 'none'; // Example operation; adjust as needed
    }
});

// Function to save changes made by the user
function saveSectionChanges(id, content) {
    // Save changes locally or send them to a server
    localStorage.setItem(id, content); // Example: saving to local storage
    console.log(`Section ${id} updated: ${content}`);
}

// Function to download the resume as a PDF
function downloadResume() {
    const resumeContainer = document.getElementById('resumeContainer');
    const pdf = new jsPDF();

    // Use the html2canvas library to capture the content of the resume container as an image
    html2canvas(resumeContainer).then(canvas => {
        const imgData = canvas.toDataURL('image/png'); // Convert canvas to image data

        // Create a new PDF document and add the captured image to it
        pdf.addImage(imgData, 'PNG', 10, 10, 190, 0);
        pdf.save('resume.pdf');
    });

    // Use the new 'html' method from jsPDF to directly convert HTML to PDF
    pdf.html(resumeContainer, {
        callback: function (pdf) {
            pdf.save('resume.pdf'); // Save the generated PDF
        }
    });
}

// Function to toggle sections' visibility
function toggleSections(id) {
    const section = document.getElementById(id);
    if (section) {
        section.style.display = section.style.display === 'none' ? 'block' : 'none';
    }
}

// Elements
const toggleSkillsButton = document.getElementById('toggleSkills');
const skillsSection = document.getElementById('skills');

// Event listener for toggling skills section
if (toggleSkillsButton) {
    toggleSkillsButton.addEventListener('click', () => {
        if (skillsSection.style.display === 'none') {
            skillsSection.style.display = 'block';
        } else {
            skillsSection.style.display = 'none';
        }
    });
}

// Form submission handler
document.getElementById('resumeForm')?.addEventListener('submit', (event) => {
    event.preventDefault();
    generateResume();
});

// Function to generate the resume
function generateResume() {
    const profileImageInput = document.getElementById('profileImage');
    const profileImage = profileImageInput.files?.[0];
    const name = document.getElementById('name').value;
    const profession = document.getElementById('profession').value;
    const email = document.getElementById('email').value;
    const phone = document.getElementById('phone').value;
    const overview = document.getElementById('overview').value;
    const education = document.getElementById('education').value;
    const experience = document.getElementById('experience').value;
    const skills = document.getElementById('skills').value;
    const contact = document.getElementById('contact').value;
    const linkedin = document.getElementById('linkedin').value;
    const github = document.getElementById('github').value;
    const projects = document.getElementById('projects').value;
    const certifications = document.getElementById('certifications').value;
    const twitter = document.getElementById('twitter').value;
    const instagram = document.getElementById('instagram').value;
    const stackoverflow = document.getElementById('stackoverflow').value;
    const linkedinBadge = document.getElementById('linkedinBadge').checked;

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
                            <img src="${e.target.result}" class="profile-pic">
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

        // Here you can use the resumeTemplate to create a PDF or display it
    };

    if (profileImage) {
        reader.readAsDataURL(profileImage);
    }

    document.addEventListener("DOMContentLoaded", () => {
        const sections = document.querySelectorAll('[contenteditable=true]');
        const downloadButton = document.getElementById('downloadResume');
    
        sections.forEach((section) => {
            section.addEventListener('blur', (event) => {
                const target = event.target;
                saveSectionChanges(target.id, target.innerHTML);
            });
        });
    
        if (downloadButton) {
            downloadButton.addEventListener('click', () => {
                downloadResume();
            });
        }
    });
    
    // Function to save changes made by the user
    function saveSectionChanges(id, content) {
        // Save changes locally or send them to a server
        localStorage.setItem(id, content); // Example: saving to local storage
        console.log(`Section ${id} updated: ${content}`);
    }
    
    // Function to download the resume as a PDF
    function downloadResume() {
        const resumeContainer = document.getElementById('resumeContainer');
        const pdf = new jsPDF();
    
        // Use the html2canvas library to capture the content of the resume container as an image
        html2canvas(resumeContainer).then(canvas => {
            const imgData = canvas.toDataURL('image/png'); // Convert canvas to image data
    
            // Create a new PDF document and add the captured image to it
            pdf.addImage(imgData, 'PNG', 10, 10, 190, 0);
            pdf.save('resume.pdf');
        });
    
        // Use the new 'html' method from jsPDF to directly convert HTML to PDF
        pdf.html(resumeContainer, {
            callback: function (pdf) {
                pdf.save('resume.pdf'); // Save the generated PDF
            }
        });
    }
    
    // Form submission handler
    document.getElementById('resumeForm')?.addEventListener('submit', (event) => {
        event.preventDefault();
        generateResume();
    });
    
    // Function to generate the resume
    function generateResume() {
        // Gather the content from contenteditable sections
        const overview = document.getElementById('overviewSection').innerHTML;
        const linkedin = document.getElementById('linkedin').innerText;
        const github = document.getElementById('github').innerText;
        const twitter = document.getElementById('twitter').innerText;
        const instagram = document.getElementById('instagram').innerText;
        const stackoverflow = document.getElementById('stackoverflow').innerText;
    
        // Generate resume content (as HTML or another format)
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
                        <section id="overview">
                            <h2>Career Overview</h2>
                            ${overview}
                        </section>
                        <section id="social">
                            <h2>Social Links</h2>
                            <p>LinkedIn: ${linkedin}</p>
                            <p>GitHub: ${github}</p>
                            <p>Twitter: ${twitter}</p>
                            <p>Instagram: ${instagram}</p>
                            <p>Stack Overflow: ${stackoverflow}</p>
                        </section>
                    </div>
                </div>
            </body>
            </html>
        `;
}
}
