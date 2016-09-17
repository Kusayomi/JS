/*
Activité : gestion des contacts
*/

// TODO : complétez le programme

console.log("Bienvenue dans le gestionnaire des contacts !");
 
// fonction regroupant les différents choix
function lesChoix()
{
	console.log("1 : Lister les contacts");
    console.log("2 : Ajouter un contact");
    console.log("0 : Quitter");
}
lesChoix();

// initialisation de l'objet Personnes
var Personnes = 
{
    init: function (nom, prenom) 
    {
        this.nom = nom;
        this.prenom = prenom;
    }
 
};
 
//On initialise les différentes personnes à l'aide de l'objet déclaré précédemment
var personne1 = Object.create(Personnes);
personne1.init("John", "Doe");
var personne2 = Object.create(Personnes);
personne2.init("Jean", "Michel");


// Création d'un tableau regroupant les 2 personnes
var listePersonnes = [];
listePersonnes.push(personne1);
listePersonnes.push(personne2);

 
// On initialise la boucle des choix
while (choix !== 0) 
{
    var choix = Number(prompt("Choisissez une option :"));
    if (choix == 1) 
    {
        console.log("Voici la liste de tous vos contacts :");
        listePersonnes.forEach(function (personne) 
        {
            console.log("Voici le nom et le prénom de vos contacts : " + personne.nom + " " + personne.prenom);
        });
        lesChoix();
    }
    else if (choix == 2) 
    {
        var saisieNom = prompt("Entrez le nom du nouveau contact :");
        var saisiePrenom = prompt("Entrez le prénom du nouveau contact : ");
        nouveauContact = Object.create(Personnes);
        nouveauContact.init(saisieNom, saisiePrenom);
        listePersonnes.push(nouveauContact);
        console.log("Le nouveau contact a été ajouté");
        lesChoix();
    }  
    else if (choix == 0) 
    {
        console.log("Au revoir !");
    }
    else
    {
        console.log("Veuillez saisir un des choix de la liste");
    }
}

