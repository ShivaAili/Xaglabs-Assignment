const mobileMenuButton = document.getElementById('mobileMenuButton');
    const mobileMenu = document.getElementById('mobileMenu');

    mobileMenuButton.addEventListener('click', () => {
        mobileMenu.classList.toggle('hidden');
    });
function showSection(sectionId, sidebarId) {
// Hide all sections initially
document.getElementById('teamSection').classList.add('hidden');
document.getElementById('personalDetailsSection').classList.add('hidden');
document.getElementById('contactUsSection').classList.add('hidden');

// Show the clicked section
document.getElementById(sectionId).classList.remove('hidden');
document.getElementById(sectionId).classList.add('fade-in');

// Show all sidebars initially
document.getElementById('ourTeamSidebar').classList.remove('hidden');
document.getElementById('personalDetailsSidebar').classList.remove('hidden');
document.getElementById('contactUsSidebar').classList.remove('hidden');

// Hide the clicked sidebar
document.getElementById(sidebarId).classList.add('hidden');

// Move Personal Details Sidebar to left when Contact Us is clicked
if (sectionId === 'contactUsSection') {
    document.getElementById('personalDetailsSidebar').classList.add('shift-left');
} else {
    document.getElementById('personalDetailsSidebar').classList.remove('shift-left');
}

}
// Initialize with 'Our Team' shown and its sidebar hidden
showSection('teamSection', 'ourTeamSidebar');
