document.addEventListener('DOMContentLoaded', function() {
    const skills = [
        { name: 'CSS', icon: 'fab fa-css3-alt' },
        { name: 'HTML', icon: 'fab fa-html5' },
        { name: 'Angular', icon: 'fab fa-angular' },
        { name: 'JavaScript', icon: 'fab fa-js' },
        { name: 'Django', icon: 'fab fa-python' },
        { name: 'Python', icon: 'fab fa-python' },
        { name: 'Express JS', icon: 'fab fa-node-js' }
    ];

    const skillsList = document.getElementById('skills-list');
    
    skills.forEach(skill => {
        const listItem = document.createElement('li');
        listItem.innerHTML = `<i class="${skill.icon}"></i>${skill.name}`;
        listItem.addEventListener('mouseover', function(event) {
            showTooltip(event, skill.name);
        });
        listItem.addEventListener('mouseout', hideTooltip);
        skillsList.appendChild(listItem);
    });

    const githubButton = document.getElementById('github-button');
    githubButton.addEventListener('click', function() {
        window.location.href = 'https://github.com/Gozkay'; // Ensure the correct GitHub URL is used
    });
});

function showTooltip(event, skillName) {
    const tooltip = document.getElementById('tooltip');
    tooltip.innerHTML = skillName;
    tooltip.style.display = 'block';
    tooltip.style.left = event.pageX + 'px';
    tooltip.style.top = event.pageY + 'px';
}

function hideTooltip() {
    const tooltip = document.getElementById('tooltip');
    tooltip.style.display = 'none';
}
