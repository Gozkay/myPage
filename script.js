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
        window.location.href = 'https://github.com/Gozkay'; // Replace with the actual GitHub URL
    });
});

function showTooltip(event, text) {
    const tooltip = document.getElementById('tooltip');
    tooltip.textContent = text;
    tooltip.style.display = 'block';
    tooltip.style.left = `${event.pageX + 10}px`;
    tooltip.style.top = `${event.pageY + 10}px`;
}

function hideTooltip() {
    const tooltip = document.getElementById('tooltip');
    tooltip.style.display = 'none';
}
