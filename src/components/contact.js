document.addEventListener('DOMContentLoaded', function () {
    const formulaire = document.getElementById('contact-form');
    const zoneMessage = document.getElementById('form-feedback');

    const champNom = document.getElementById('name');
    const champEmail = document.getElementById('email');
    const champMessage = document.getElementById('message');

    if (formulaire) {
        formulaire.addEventListener('submit', function (evenement) {
            evenement.preventDefault();

            zoneMessage.innerText = '';
            zoneMessage.className = 'form-feedback';

            let donneesFormulaire = {
                nom: champNom.value,
                email: champEmail.value,
                message: champMessage.value
            };

            if (donneesFormulaire.nom === '') {
                afficherErreur('Veuillez mettre votre nom');
                return;
            }
            if (donneesFormulaire.email === '') {
                afficherErreur('Veuillez mettre votre email');
                return;
            }
            if (donneesFormulaire.message === '') {
                afficherErreur('Veuillez mettre un message');
                return;
            }

            if (donneesFormulaire.email.indexOf('@') === -1 || donneesFormulaire.email.indexOf('.') === -1) {
                afficherErreur('Email non valide');
                return;
            }

            zoneMessage.innerText = 'Envoi en cours...';
            zoneMessage.classList.add('success');

            const bouton = formulaire.querySelector('button');
            bouton.disabled = true;

            emailjs.sendForm('service_uz5daqx', 'template_2puxn5e', formulaire)
                .then(function () {
                    zoneMessage.innerText = 'Message envoyé ! Merci.';
                    bouton.disabled = false;
                }, function (erreur) {
                    console.log('Erreur:', erreur);
                    afficherErreur('Une erreur est survenue...');
                    bouton.disabled = false;
                });
        });
    }

    function afficherErreur(texte) {
        zoneMessage.innerText = texte;
        zoneMessage.classList.add('error');
        zoneMessage.classList.remove('success');
    }
});
