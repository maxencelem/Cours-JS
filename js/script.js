
// Fonction qui change la classe du Body pour passer du Light au Dark Mode
function toggleTheme(darkMode) {
    const body = document.body;
    if (darkMode) {
        body.classList.add("dark-theme");
        body.classList.remove("light-theme");
    } else {
        body.classList.add("light-theme");
        body.classList.remove("dark-theme");
    }
}

document.addEventListener('DOMContentLoaded', function () {


    // THEME DE COULEUR


    // Écouteur d'évènement pour le thème clair
    document.querySelector("#theme-light").addEventListener("click", function () {
        toggleTheme(false);
    });

    // Écouteur d'évènement pour le thème sombre
    document.querySelector("#theme-dark").addEventListener("click", function () {
        toggleTheme(true);
    });


    // FONCTIONNEMENT DES ERREURS DU FORMULAIRE


    // Sélectionne le formulaire à vérifier
    let form = document.querySelector('#register-form');

    // Crée 2 variables qui correspondent aux 2 champs de formulaire à vérifier
    let firstnameField = document.querySelector('#firstname');
    let lastnameField = document.querySelector('#lastname');

    // Met un écouteur d'événement sur l'envoi du formulaire
    form.addEventListener('submit', function (e) {
        e.preventDefault();
        clearErrorMessages();

        // Vérifie le prénom
        if (firstnameField.value.length < 2 || firstnameField.value.length > 25) {
            displayErrorMessage(firstnameField, 'Le prénom doit contenir entre 2 et 25 caractères !');
        }

        // Vérifie le nom
        if (lastnameField.value.length < 2 || lastnameField.value.length > 25) {
            displayErrorMessage(lastnameField, 'Le nom doit contenir entre 2 et 25 caractères !');
        }
    });

    // Fonction pour afficher un message d'erreur
    function displayErrorMessage(field, errorMessage) {
        // Ajoute la classe "field-invalid" sur le champ demandé
        field.classList.add('field-invalid');

        // Crée une div pour le message d'erreur
        let errorDiv = document.createElement('div');
        errorDiv.classList.add('error-text');
        errorDiv.textContent = errorMessage;

        // Insère cette div après le champ demandé
        field.after(errorDiv);
    }

    // Fonction pour nettoyer les messages d'erreur
    function clearErrorMessages() {
        // Sélectionne tous les champs invalides
        let invalidFields = document.querySelectorAll('.field-invalid');

        // Pour chaque champ, supprime la classe "field-invalid" et le message d'erreur associé
        invalidFields.forEach(function (field) {
            field.classList.remove('field-invalid');
            let errorMessage = field.nextElementSibling;
            if (errorMessage && errorMessage.classList.contains('error-text')) {
                errorMessage.remove();
            }
        });
    }

});


