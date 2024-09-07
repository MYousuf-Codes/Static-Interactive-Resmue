document.addEventListener("DOMContentLoaded", () => {
    const toggleSections = (id: string) => {
        const section = document.getElementById(id);
        if (section) {
            section.style.display = section.style.display === 'none' ? 'block' : 'none';
        }
    };
});

// elements
const toggleSkillsButton = document.getElementById('toggleSkills')!;
const skillsSection = document.getElementById('skills')!;

// event listener
toggleSkillsButton?.addEventListener('click', () => {
    // condition
    if (skillsSection?.style.display === 'none') {
        skillsSection.style.display = 'block';
    } else {
        skillsSection.style.display = 'none';
    }
});


