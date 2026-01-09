document.addEventListener('DOMContentLoaded', function () {

    let filtreActif = 'all';

    const conteneurLogo = document.getElementById('nav-logo');
    const conteneurNavLinks = document.getElementById('nav-links');
    const conteneurHeroContent = document.getElementById('hero-content');
    const conteneurHeroImage = document.getElementById('hero-image');
    const conteneurAbout = document.getElementById('about-content');
    const conteneurParcours = document.getElementById('parcours-content');
    const conteneurFooter = document.getElementById('footer-content');

    const conteneurProjets = document.getElementById('projects-grid');
    const conteneurFiltres = document.getElementById('project-filters');

    const conteneurFrontend = document.getElementById('skills-frontend');
    const conteneurBackend = document.getElementById('skills-backend');
    const conteneurOutils = document.getElementById('skills-tools');

    function appliquerMetadata() {
        const reglages = portfolioData.settings;
        document.title = reglages.name + ' - ' + reglages.title;

        const baliseDescription = document.querySelector('meta[name="description"]');
        if (baliseDescription) {
            baliseDescription.setAttribute('content', 'Portfolio de ' + reglages.name + ' - ' + reglages.title + '. Découvrez mes projets.');
        }
    }

    function afficherNav() {
        const reglages = portfolioData.settings;

        if (conteneurLogo) {
            conteneurLogo.innerText = 'RS';
        }

        if (conteneurNavLinks) {
            let htmlLiens = '';
            for (let i = 0; i < reglages.navLinks.length; i++) {
                const lien = reglages.navLinks[i];
                htmlLiens = htmlLiens + '<li><a href="' + lien.url + '">' + lien.name + '</a></li>';
            }
            conteneurNavLinks.innerHTML = htmlLiens;
        }
    }

    function afficherHero() {
        const reglages = portfolioData.settings;

        conteneurHeroContent.innerHTML = `
            <h1 id="hero-title">${reglages.name}</h1>
            <h2 class="hero-subtitle">${reglages.title}</h2>
            <p class="hero-description">${reglages.description}</p>
            <div class="hero-cta">
                <a href="#projects" class="btn btn-primary">Voir mes projets</a>
                <a href="#contact" class="btn btn-secondary">Me contacter</a>
            </div>
            <div class="social-links">
                <a href="${reglages.socials.github}" class="social-link" aria-label="GitHub" target="_blank" rel="noopener noreferrer">
                    <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 496 512" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                        <path d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3.7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3.3 2.9 2.3 3.9 1.6 1 3.6.7 4.3-.7.7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3.7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3.7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z"></path>
                    </svg>
                </a>
                <a href="${reglages.socials.linkedin}" class="social-link" aria-label="LinkedIn" target="_blank" rel="noopener noreferrer">
                    <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 448 512" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                        <path d="M416 32H31.9C14.3 32 0 46.5 0 64.3v383.4C0 465.5 14.3 480 31.9 480H416c17.6 0 32-14.5 32-32.3V64.3c0-17.8-14.4-32.3-32-32.3zM135.4 416H69V202.2h66.5V416zm-33.2-243c-21.3 0-38.5-17.3-38.5-38.5S80.9 96 102.2 96c21.2 0 38.5 17.3 38.5 38.5 0 21.3-17.2 38.5-38.5 38.5zm282.1 243h-66.4V312c0-24.8-.5-56.7-34.5-56.7-34.6 0-39.9 27-39.9 54.9V416h-66.4V202.2h63.7v29.2h.9c8.9-16.8 30.6-34.5 62.9-34.5 67.2 0 79.7 44.3 79.7 101.9V416z"></path>
                    </svg>
                </a>
            </div>
        `;
        if (conteneurHeroImage) {
            conteneurHeroImage.innerHTML = '<img src="./assets/img/profile.webp" alt="Photo de profil">';
        }
    }

    function afficherAbout() {
        const aPropos = portfolioData.about;
        let htmlBoutDeCode = '<h2>' + aPropos.title + '</h2>';
        for (let i = 0; i < aPropos.paragraphs.length; i++) {
            htmlBoutDeCode = htmlBoutDeCode + '<p>' + aPropos.paragraphs[i] + '</p>';
        }
        conteneurAbout.innerHTML = htmlBoutDeCode;
    }

    function afficherParcours() {
        const parcours = portfolioData.parcours;
        let htmlBoutDeCode = '<h2 id="parcours-title">' + parcours.title + '</h2>';
        for (let i = 0; i < parcours.paragraphs.length; i++) {
            htmlBoutDeCode = htmlBoutDeCode + '<p>' + parcours.paragraphs[i] + '</p>';
        }
        conteneurParcours.innerHTML = htmlBoutDeCode;
    }

    function afficherContact() {
        const contact = portfolioData.contact;
        const titre = document.getElementById('contact-title');
        const sousTitre = document.getElementById('contact-subtitle');
        if (titre) {
            titre.innerText = contact.title;
        }
        if (sousTitre) {
            sousTitre.innerText = contact.subtitle;
        }

        const bouton = document.getElementById('submit-btn');
        if (bouton) {
            bouton.innerText = contact.buttonText;
        }

        const inputNom = document.getElementById('name');
        const inputEmail = document.getElementById('email');
        const areaMessage = document.getElementById('message');

        if (inputNom) {
            inputNom.placeholder = contact.placeholders.name;
            inputNom.setAttribute('aria-label', contact.placeholders.name);
        }
        if (inputEmail) {
            inputEmail.placeholder = contact.placeholders.email;
            inputEmail.setAttribute('aria-label', contact.placeholders.email);
        }
        if (areaMessage) {
            areaMessage.placeholder = contact.placeholders.message;
            areaMessage.setAttribute('aria-label', contact.placeholders.message);
        }
    }

    function afficherFooter() {
        const piedDePage = portfolioData.footer;
        conteneurFooter.innerHTML = '<p>' + piedDePage.copyright + '</p><p>' + piedDePage.description + '</p>';
    }

    function afficherCompetences() {
        const titreComp = document.getElementById('skills-title');
        if (titreComp) {
            titreComp.innerText = portfolioData.titles.skills;
        }

        const competences = portfolioData.skills;

        const h3Front = document.getElementById('frontend-heading');
        const h3Back = document.getElementById('backend-heading');
        const h3Outils = document.getElementById('tools-heading');

        if (h3Front) {
            h3Front.innerText = competences.categories.frontend;
        }
        if (h3Back) {
            h3Back.innerText = competences.categories.backend;
        }
        if (h3Outils) {
            h3Outils.innerText = competences.categories.tools;
        }

        if (conteneurFrontend) {
            let htmlFrontend = '';
            for (let i = 0; i < competences.frontend.length; i++) {
                const comp = competences.frontend[i];
                htmlFrontend = htmlFrontend + '<li class="skill-item"><span class="skill-icon">' + comp.icon + '</span>' + comp.name + '</li>';
            }
            conteneurFrontend.innerHTML = htmlFrontend;
        }

        if (conteneurBackend) {
            let htmlBackend = '';
            for (let i = 0; i < competences.backend.length; i++) {
                const comp = competences.backend[i];
                htmlBackend = htmlBackend + '<li class="skill-item"><span class="skill-icon">' + comp.icon + '</span>' + comp.name + '</li>';
            }
            conteneurBackend.innerHTML = htmlBackend;
        }

        if (conteneurOutils) {
            let htmlOutils = '';
            for (let i = 0; i < competences.tools.length; i++) {
                const comp = competences.tools[i];
                htmlOutils = htmlOutils + '<li class="skill-item"><span class="skill-icon">' + comp.icon + '</span>' + comp.name + '</li>';
            }
            conteneurOutils.innerHTML = htmlOutils;
        }
    }

    function afficherFiltres() {
        if (conteneurFiltres) {
            let htmlFiltres = '';
            const lesFiltres = portfolioData.filters;
            for (let i = 0; i < lesFiltres.length; i++) {
                const f = lesFiltres[i];
                let classeActive = '';
                if (f.value === filtreActif) {
                    classeActive = 'active';
                }
                htmlFiltres = htmlFiltres + '<button class="filter-btn ' + classeActive + '" data-filter="' + f.value + '">' + f.name + '</button>';
            }
            conteneurFiltres.innerHTML = htmlFiltres;

            const btns = document.querySelectorAll('.filter-btn');
            for (let i = 0; i < btns.length; i++) {
                const bouton = btns[i];
                bouton.addEventListener('click', function () {
                    for (let j = 0; j < btns.length; j++) {
                        btns[j].classList.remove('active');
                    }
                    bouton.classList.add('active');
                    filtreActif = bouton.getAttribute('data-filter');
                    afficherProjets();
                });
            }
        }
    }

    function afficherProjets() {
        const titreProj = document.getElementById('projects-title');
        if (titreProj) {
            titreProj.innerText = portfolioData.titles.projects;
        }

        if (conteneurProjets) {
            conteneurProjets.innerHTML = '';
            const tousLesProjets = portfolioData.projects;

            for (let i = 0; i < tousLesProjets.length; i++) {
                const p = tousLesProjets[i];

                let doitAfficher = false;
                if (filtreActif === 'all') {
                    doitAfficher = true;
                } else if (p.category === filtreActif) {
                    doitAfficher = true;
                } else if (p.category === 'Fullstack') {
                    if (filtreActif === 'Front-end' || filtreActif === 'Back-end') {
                        doitAfficher = true;
                    }
                }

                if (doitAfficher) {
                    const article = document.createElement('article');
                    article.className = 'project-card';

                    let htmlTags = '';
                    for (let j = 0; j < p.tags.length; j++) {
                        htmlTags = htmlTags + '<span class="tag">' + p.tags[j] + '</span>';
                    }

                    let lienBouton = '';
                    if (p.link !== "#") {
                        lienBouton = '<a href="' + p.link + '" target="_blank" rel="noopener noreferrer" class="project-link">Voir le code →</a>';
                    }

                    article.innerHTML = '<h3>' + p.title + '</h3>' +
                        '<div class="project-section"><h4>Le Défi</h4><p>' + p.challenge + '</p></div>' +
                        '<div class="project-section"><h4>La Solution</h4><p>' + p.solution + '</p></div>' +
                        '<div class="project-tags">' + htmlTags + '</div>' +
                        lienBouton;

                    conteneurProjets.appendChild(article);
                }
            }
        }
    }

    appliquerMetadata();
    afficherNav();
    afficherHero();
    afficherAbout();
    afficherParcours();
    afficherContact();
    afficherFooter();
    afficherCompetences();
    afficherFiltres();
    afficherProjets();
});
