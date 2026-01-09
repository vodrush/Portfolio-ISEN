document.addEventListener('DOMContentLoaded', function () {

    let filtreActif = 'all';

    const conteneurProjets = document.getElementById('projects-grid');
    const boutonsFiltres = document.querySelectorAll('.filter-btn');

    const conteneurFrontend = document.getElementById('skills-frontend');
    const conteneurBackend = document.getElementById('skills-backend');
    const conteneurOutils = document.getElementById('skills-tools');

    function afficherCompetences() {
        let htmlFrontend = '';
        const skillsFront = portfolioData.skills.frontend;

        for (let i = 0; i < skillsFront.length; i++) {
            const skill = skillsFront[i];
            htmlFrontend += '<li class="skill-item">';
            htmlFrontend += '<span class="skill-icon">' + skill.icon + '</span>';
            htmlFrontend += skill.name;
            htmlFrontend += '</li>';
        }
        if (conteneurFrontend) {
            conteneurFrontend.innerHTML = htmlFrontend;
        }

        let htmlBackend = '';
        const skillsBack = portfolioData.skills.backend;

        for (let i = 0; i < skillsBack.length; i++) {
            const skill = skillsBack[i];
            htmlBackend += '<li class="skill-item">';
            htmlBackend += '<span class="skill-icon">' + skill.icon + '</span>';
            htmlBackend += skill.name;
            htmlBackend += '</li>';
        }
        if (conteneurBackend) {
            conteneurBackend.innerHTML = htmlBackend;
        }

        let htmlTools = '';
        const skillsTools = portfolioData.skills.tools;

        for (let i = 0; i < skillsTools.length; i++) {
            const skill = skillsTools[i];
            htmlTools += '<li class="skill-item">';
            htmlTools += '<span class="skill-icon">' + skill.icon + '</span>';
            htmlTools += skill.name;
            htmlTools += '</li>';
        }
        if (conteneurOutils) {
            conteneurOutils.innerHTML = htmlTools;
        }
    }

    function afficherProjets() {
        conteneurProjets.innerHTML = '';

        const tousLesProjets = portfolioData.projects;

        let projetsAProjeter = [];

        if (filtreActif === 'all') {
            projetsAProjeter = tousLesProjets;
        } else {
            for (let i = 0; i < tousLesProjets.length; i++) {
                const projet = tousLesProjets[i];

                if (projet.category === filtreActif) {
                    projetsAProjeter.push(projet);
                }
                else if (projet.category === 'Fullstack') {
                    if (filtreActif === 'Front-end' || filtreActif === 'Back-end') {
                        projetsAProjeter.push(projet);
                    }
                }
            }
        }

        for (let i = 0; i < projetsAProjeter.length; i++) {
            const projet = projetsAProjeter[i];

            const article = document.createElement('article');
            article.className = 'project-card';

            let tagsHtml = '';
            for (let j = 0; j < projet.tags.length; j++) {
                tagsHtml += '<span class="tag">' + projet.tags[j] + '</span>';
            }

            let lienHtml = '';
            if (projet.link !== "#") {
                lienHtml = '<a href="' + projet.link + '" target="_blank" rel="noopener noreferrer" class="project-link">Voir le code →</a>';
            }

            article.innerHTML = `
                <h3>${projet.title}</h3>
                <div class="project-section">
                    <h4>Le Défi</h4>
                    <p>${projet.challenge}</p>
                </div>
                <div class="project-section">
                    <h4>La Solution</h4>
                    <p>${projet.solution}</p>
                </div>
                <div class="project-tags">
                    ${tagsHtml}
                </div>
                ${lienHtml}
            `;

            conteneurProjets.appendChild(article);
        }
    }

    for (let i = 0; i < boutonsFiltres.length; i++) {
        const bouton = boutonsFiltres[i];

        bouton.addEventListener('click', function () {
            for (let j = 0; j < boutonsFiltres.length; j++) {
                boutonsFiltres[j].classList.remove('active');
            }

            bouton.classList.add('active');

            filtreActif = bouton.getAttribute('data-filter');

            afficherProjets();
        });
    }

    afficherCompetences();
    afficherProjets();
});
