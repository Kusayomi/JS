var saisie = prompt("Entrez un nombre : "); // saisie est de type chaîne
var nb = Number(saisie); // nb est de type nombre

var chiffre= prompt("Entrez un nombre");

var tva = chiffre * 1.196
console.log("Le prix ttc du produit est de : " + tva);


var celcius = prompt("Entrez la température :");
var f = celcius*(9/5) + 32;
console.log(celcius+" °C =" + f + " °F");


var jour = prompt("Entrez un jour de la semaine");
switch (jour) {
case "lundi":
    console.log("demain c'est mardi");
    break;
case "mardi":
    console.log("demain c'est mercredi");
    break;
case "mercredi":
    console.log("demain c'est jeudi");
    break;
case "jeudi":
    console.log("demain c'est vendredi");
    break;
case "vendredi":
	console.log("demain c'est samedi");
	break;
case "samedi":
	console.log("demain c'est dimanche");
	break;
case "dimanche":
	console.log("demain c'est lundi");
	break;
default:
    console.log("Je n'ai pas compris !");
}


var jour = prompt("Entrez un jour de la semaine");

if(jour === "lundi")
{
	console.log("demain c'est mardi");
}
else{

	if (jour === "mardi")
	{
		console.log("demain c'est mercredi");
	}
} 


var nbr1 = Number(prompt("Entrez un nombre"));
var nbr2 = Number(prompt("Entrez un second nombre"));

if(nbr1 === nbr2)
{
	console.log("le nombre un : " +nbr1+" est égal au nombre 2: " +nbr2 );
}
else{
	if(nbr1 > nbr2)
	{
		console.log("le nombre 1 est > au nombre 2");
	}
	else if(nbr1 < nbr2)
	{
		console.log("le nombre 1 est < au nombre 2");
	}
}


var note1 = Number(prompt("Entrez une note "));
var note2 = Number(prompt("Entrez une seconde note"));
var moyenne = (note1 + note2) / 2;

if((moyenne >= 10) && (moyenne <=12 ))
{
	console.log("La moyenne de tes notes est de : " + moyenne + ". Bravo tu es reçu!");
}
else if(moyenne < 10)
{
	console.log("La moyenne de tes notes est de : " + moyenne + ". Bravo tu es une merde!");
}
else if(moyenne > 12)
{
	console.log("La moyenne de tes notes est de : " + moyenne + ". Bravo tu es un PGM");
}


var mois = Number(prompt("Entrez le numéro du mois que vous voulez, cela affichera le nombre de jour"))
switch(mois){
	case 1 : 
	console.log(30);
	break;

	case 2 : 
	console.log(31);
	break;
	
	default:
	console.log("erreur");
}


//Exercice : afficher l'heure une seconde plus tard
var heures = Number(prompt("Entrez les heures :"));
var minutes = Number(prompt("Entrez les minutes :"));
var secondes = Number(prompt("Entrez les secondes :"));

	if((heures >= 0 ) && (heures <= 23) && (minutes >= 0) && (minutes <= 59) && (secondes >= 0) && (secondes <= 59))
	{
		secondes++;
		if(secondes===60)
		{
			secondes = 0;
			minutes++;
		}
		if(minutes===60)
		{
			minutes = 0;
			heures++;
		}
		if(heures===24)
		{
			heures = 0;
		}
		console.log(heures+"h"+minutes+"m"+secondes+"s");
	}
	else
	{
		console.log("Erreur");
	}


/*BOUCLE */ 
console.log("Début du programme");
var nombre = 1;
while (nombre <= 5) {
    console.log(nombre);
    nombre++;

}
console.log("Fin du programme");


var compteur;
for(compteur=1 ; compteur <10 ; compteur++)
{
	console.log(compteur);
}


var lettre = "";
while (lettre != "X") {
    lettre = prompt("Tapez une lettre ou X pour sortir :");
    console.log(lettre);
}

var nombre = 0; // Valeur initiale permettant d'entrer dans la boucle
while ((nombre < 50) || (nombre > 100)) {
    nombre = Number(prompt("Entrez un nombre entre 50 et 100 : "));
}


//table multiplication
var nombre = 0; // Valeur par défaut permettant d'entrer dans la boucle
while ((nombre < 2) || (nombre > 9)) {
    nombre = Number(prompt("Entrez un nombre entre 2 et 9 : "));
}
var multiple = 0; 
	while(multiple <= 10)
	{
		console.log(nombre + " x " + multiple + " = " + nombre*multiple);
		multiple++;
	}


var saisie = prompt("Voulez-vous jouer au ni oui, ni non ?");
while ((saisie !== "oui") && (saisie !== "non")) {
    saisie = prompt("Voulez-vous jouer au ni oui, ni non ?");
}
console.log("Vous avez perdu !");



var ligne = "";
for (var i = 1; i <= 7; i++) {
    ligne = ligne + "#";
    // Autre possibilité avec l'opérateur +=
    //ligne += "#";
    console.log(ligne);
}

// Fizz Buzz
for (var nombre = 1 ; nombre <= 100; nombre++)
{
	if((nombre % 3 === 0) && (nombre % 5 === 0))
		console.log("FizzBuzz");
	else if (nombre % 3 === 0)
		console.log("Fizz");
	else if (nombre % 5 === 0)
		console.log("Buzz");
	else 
		console.log(nombre);
}

 
var solution = Math.floor(Math.random() *(0,100));
console.log(solution); 




// TODO : écrire la fonction calculer()

// perimetre = 2 * Pi * R

var rayonuser = Number(prompt("Entrez le rayon pour calculer le périmètre d'un cercle"));
	function perimetre(chiffre1 , Pi, chiffre2)
	{
		var resultat;
		resultat = chiffre1 * Pi * chiffre2;

		return resultat; 
	}
console.log("Le périmètre du cercle est de : " + perimetre(2, Math.PI, rayonuser)); // Doit afficher 10



// aire = Pi * R²

var rayonuser2 = Number(prompt("Entrez le rayon pour calculer l'aire d'un cercle"));

	function aire(chiffre1, chiffre2)
	{
		var resultat2;
		resultat2 = chiffre1 * chiffre2 * chiffre2;
		
		return resultat2;
	}
console.log("L'aire du cercle est de : " + aire(Math.PI, rayonuser2)); // Doit afficher -2


// Renvoie le périmètre d'un cercle
function perimetre(rayon) {
	var resultat = 2 * rayon * Math.PI;
    return resultat;
}

// Renvoie l'aire d'un cercle
function aire(rayon) {
	var resultat = Math.pow(rayon, 2) * Math.PI;
    return resultat;
}

var r = Number(prompt("Entrez le rayon d'un cercle :"));
console.log("Son périmètre vaut " + perimetre(r));
console.log("Son aire vaut " + aire(r));


//  POOOOO
var perso = {
    nom: "Kusa",
    sante: 120,
    force: 25,
}
function decrire() {
    var description = perso.nom + " a " + perso.sante + " points de vie et " + perso.force + " en force";
    return description;
}
console.log(decrire());


var perso = {
    nom: "Aurora",
    sante: 150,
    force: 25,

    // Renvoie la description du personnage
    decrire: function () {
        var description = this.nom + " a " + this.sante + " points de vie et " +
            this.force + " en force";
        return description;
    }
};
console.log(perso.decrire());
// Aurora est blessée par une flèche
perso.sante = perso.sante - 20;
// Aurora trouve un bracelet de force
perso.force = perso.force + 10;
console.log(perso.decrire());
*/


// TODO : ajoutez ici la définition de l'objet perso

var perso = {
	nom: "John",
	sante: 100,
	force: 50,
	xp: 70,
	decrire: function()
	{
		var description = this.nom + " a " + this.sante + " points de vie et " +
        this.force + " en force et " + this.xp + " en exp";
        return description;
	}
};
console.log(perso.decrire());
// Aurora est blessée par une flèche
perso.sante = perso.sante - 20;
// Aurora trouve un bracelet de force
perso.force = perso.force + 10;
// Aurora apprend une nouvelle compétence
perso.xp = perso.xp + 15;
console.log(perso.decrire());


// TODO : ajoutez ici la définition de l'objet chien
var chien = {
	nom: "Akamaru",
	race: "Berger allemand",
	taille: 150,
	aboyer: function()
	{
		var gueuler = "ROOAR LAMA !!";
        return gueuler;
	}
};
console.log(chien.nom + " est un " + chien.race + " mesurant " + chien.taille + " cm");
console.log("Tiens, un chat ! " + chien.nom + " aboie : " + chien.aboyer());



var r = Number(prompt("Entrez le rayon d'un cercle :"));
// TODO : ajoutez ici la définition de l'objet cercle
var cercle = {
	
	perimetre: function(rayon)
	{
		var p = 2 * rayon * Math.PI;
        return p;
	},
	aire: function(rayon)
	{
		var a = Math.pow(rayon, 2) * Math.PI;;
        return a;
	}
};
console.log("Son périmètre vaut " + cercle.perimetre(r));
console.log("Son aire vaut " + cercle.aire(r));


//Ex 1
var compte = {
	titulaire: "Alex",
	solde: 150,
	crediter: function()
	{
		var credit = this.solde + 20;
		return credit;
	},
	debiter: function()
	{
		var debit = this.solde - 20;
		return debit;
	},
	decrire: function()
	{
		var description = this.titulaire + " a " + this.solde + " euros ";
        return description;
	}
	
};
//console.log("Titulaire : " + compte.titulaire + ", solde : " + compte.solde + " €!");

console.log(compte.decrire());
// Alex gagne 20 balles
console.log(compte.crediter());
console.log(compte.decrire());
// Alex perd 20 balles

console.log(compte.debiter());

//Ex 2
var compte = {
    titulaire: "Alex",
    solde: 0,

    // Crédite le compte d'un certain montant
    crediter: function (montant) {
        this.solde = this.solde + montant;
    },
    // Débite le compte d'un certain montant
    debiter: function (montant) {
        this.solde = this.solde - montant;
    },
    // Renvoie la description du compte
    decrire: function () {
        var description = "Titulaire : " + this.titulaire +
            ", solde : " + this.solde + " euros";
        return description;
    }
};

console.log(compte.decrire());
var credit = Number(prompt("Entrez le montant à créditer :"));
compte.crediter(credit);
console.log("Alex a été créditer de : " + credit + " euros");


var debit = Number(prompt("Entrez le montant à débiter :"));
console.log("Alex a été débiter de : " + debit + " euros");
compte.debiter(debit);
console.log(compte.decrire());


//Ex 3
var perso = {
    nom: "Aurora",
    sante: 150,
    force: 25,
    xp: 0,

    // Renvoie la description du personnage
    decrire: function () {
        var description = this.nom + " a " + this.sante + " points de vie, " +
            this.force + " en force et " + this.xp + " points d'expérience";
        return description;
    }
};

var perso2 = {
    nom: "Glacius",
    sante: 130,
    force: 30,
    xp: 0,
    // Renvoie la description du personnage
    decrire: function () {
        var description = this.nom + " a " + this.sante + " points de vie, " +
            this.force + " en force et " + this.xp + " points d'expérience";
        return description;
    }
};

console.log(perso.decrire());
// Aurora est blessée par une flèche
perso.sante = perso.sante - 20;
// Aurora trouve un bracelet de force
perso.force = perso.force + 10;
// Aurora apprend une nouvelle compétence
perso.xp = perso.xp + 15;
console.log(perso.decrire());

console.log(perso2.decrire());


//Ex 4
var Personnage = {
	init: function(nom, sante, force){
		this.nom = nom;
	    this.sante = sante;
	    this.force = force;
	    this.xp = 0;
	},
    // Renvoie la description du personnage
    decrire: function () {
        var description = this.nom + " a " + this.sante + " points de vie, " +
            this.force + " en force et " + this.xp + " points d'expérience";
        return description;
    }
};


var perso1 = Object.create(Personnage);
perso1.init("Aurora", 150, 60);

var perso2 = Object.create(Personnage);
perso2.init("Glacius", 100, 110);

console.log(perso1.decrire());
console.log(perso2.decrire());
*/

//Mini-jeu de rôle
var Personnage = {
    // Initialise le personnage
    initPerso: function (nom, sante, force) {
        this.nom = nom;
        this.sante = sante;
        this.force = force;
        // L'inventaire est géré sous la forme d'une propriété de type objet
        this.inventaire = {
            or: 10,
            cles: 1
        };
    },
    // Attaque un personnage cible
    attaquer: function (cible) {
        if (this.sante > 0) {
            var degats = this.force;
            console.log(this.nom + " attaque " + cible.nom + " et lui fait " + degats + " points de dégâts");
            cible.sante = cible.sante - degats;
            if (cible.sante > 0) {
                console.log(cible.nom + " a encore " + cible.sante + " points de vie");
            } else {
                cible.sante = 0;
                console.log(cible.nom + " est mort !");
            }
        } else {
            console.log(this.nom + " ne peut pas attaquer : il est mort...");
        }
    }
};

var Joueur = Object.create(Personnage);
// Initialise le joueur
Joueur.initJoueur = function (nom, sante, force) {
    this.initPerso(nom, sante, force);
    this.xp = 0;
};
// Renvoie la description du joueur
Joueur.decrire = function () {
    var description = this.nom + " a " + this.sante + " points de vie, " +
        this.force + " en force, " + this.xp + " points d'expérience, " +
        this.inventaire.or + " pièces d'or et " + this.inventaire.cles + " clé(s)";
    return description;
};
// Combat un adversaire
Joueur.combattre = function (adversaire) {
    this.attaquer(adversaire);
    if (adversaire.sante === 0) {
        console.log(this.nom + " a tué " + adversaire.nom + " et gagne " +
            adversaire.valeur + " points d'expérience, ainsi que " +
            adversaire.inventaire.or + " pièces d'or et " +
            adversaire.inventaire.cles + " clé(s)");
        this.xp += adversaire.valeur;
        // L'inventaire de la victime est transféré à son vainqueur
        this.inventaire.or += adversaire.inventaire.or;
        this.inventaire.cles += adversaire.inventaire.cles;
    }
};

var Adversaire = Object.create(Personnage);
// Initialise les propriétés de l'adversaire
Adversaire.initAdversaire = function (nom, sante, force, race, valeur) {
    this.initPerso(nom, sante, force);
    this.race = race;
    this.valeur = valeur;
};

var joueur1 = Object.create(Joueur);
joueur1.initJoueur("Aurora", 150, 25);

var joueur2 = Object.create(Joueur);
joueur2.initJoueur("Glacius", 130, 30);

console.log("Bienvenue dans ce jeu d'aventure ! Voici nos courageux héros :");
console.log(joueur1.decrire());
console.log(joueur2.decrire());

var monstre = Object.create(Adversaire);
monstre.initAdversaire("ZogZog", 40, 20, "orc", 10);

console.log("Un affreux monstre arrive : c'est un " + monstre.race + " nommé " + monstre.nom);

monstre.attaquer(joueur1);
monstre.attaquer(joueur2);

joueur1.combattre(monstre);
joueur2.combattre(monstre);

console.log(joueur1.decrire());
console.log(joueur2.decrire());

// TODO : ajoutez ici la définition de l'objet Chien

var Chien = {
    init: function (nom, race, taille) {
        this.nom = nom;
        this.race = race;
        this.taille = taille;
    },
    aboyer: function(){
    	var aboie = "GRRRRR!";
    	 if (this.taille < 25) {
            aboie = "Kaii ! Kaii !";
        } else if (this.taille > 60) {
            aboie = "Grrr ! Grrr !";
        }
    	return aboie;
    }
};
var crokdur = Object.create(Chien);
crokdur.init("Crokdur", "mâtin de Naples", 75);
console.log(crokdur.nom + " est un " + crokdur.race + " mesurant " + crokdur.taille + " cm");
console.log("Tiens, un chat ! " + crokdur.nom + " aboie : " + crokdur.aboyer());


var pupuce = Object.create(Chien);
pupuce.init("Pupuce", "bichon", 22);
console.log(pupuce.nom + " est un " + pupuce.race + " mesurant " + pupuce.taille + " cm");
console.log("Tiens, un chat ! " + pupuce.nom + " aboie : " + pupuce.aboyer());



//Exercice : comptes bancaires

var CompteBancaire = {
    // Initialise le compte bancaire
    initCB: function (titulaire, solde) {
        this.titulaire = titulaire;
        this.solde = solde;
    },
    // Crédite le compte d'un certain montant
    crediter: function (montant) {
        this.solde = this.solde + montant;
    },
    // Débite le compte d'un certain montant
    debiter: function (montant) {
        this.solde = this.solde - montant;
    },
    // Renvoie la description du compte
    decrire: function () {
        var description = "Titulaire : " + this.titulaire +
            ", solde : " + this.solde + " euros";
        return description;
    }
};

var CompteEpargne = Object.create(CompteBancaire);
// Initialise le compte épargne
CompteEpargne.initCE = function (titulaire, solde, tauxInteret) {
    this.initCB(titulaire, solde);
    this.tauxInteret = tauxInteret;
};
// Calcule et ajoute les intérêts au solde cu compte
CompteEpargne.ajouterInterets = function () {
    var interets = this.solde * this.tauxInteret;
    this.solde += interets;
};

var compte1 = Object.create(CompteBancaire);
compte1.initCB("Alex", 100);
var compte2 = Object.create(CompteEpargne);
compte2.initCE("Marco", 50, 0.05);

console.log("Voici l'état initial des comptes :");
console.log(compte1.decrire());
console.log(compte2.decrire());

var montant = Number(prompt("Entrez le montant à transférer entre les comptes :"));
compte1.debiter(montant);
compte2.crediter(montant);

compte2.ajouterInterets();

console.log("Voici l'état final des comptes après transfert et calcul des intérêts :");
console.log(compte1.decrire());
console.log(compte2.decrire());


//Ex 5
var Film = {
    // Initialise le film
    init: function (titre, annee, realisateur) {
        this.titre = titre;
        this.annee = annee;
        this.realisateur = realisateur},

    // Renvoie la description du film
    decrire: function () {
        var description = this.titre + " (" + this.annee + this.realisateur + ")";
        return description;
    }
};

var film1 = Object.create(Film);
film1.init("Le loup de Wall Street", 2013, ", Avner");

var film2 = Object.create(Film);
film2.init("Vice-Versa", 2015, ", Jake");

var film3 = Object.create(Film);
film3.init("Babysitting", 2013, ", Spielberg");

var films = [];
films.push(film1);
films.push(film2);
films.push(film3);

films.forEach(function (film) {
    console.log(film.decrire());
});



console.log("Voici les 3 mousquetaires : ");
var heros = ["Athos", "Porthos", "Aramis"];

for(i = 0; i < heros.length; i++)
{
    console.log(heros[i]);
}
heros.push("Django");
heros.forEach(function (film) {
    console.log(film);
});

var valeurs = [11, 3, 7, 2, 9, 10];
var somme = 0;
for(i = 0; i < valeurs.length; i++)
{ 
    somme = somme + valeurs[i];
    if(valeurs[i] > max)
    {
        max = valeur[i];
    }
}
console.log(somme);


//Exercice : gestion d'un chenil
var Chien = {
    // initialise le chien
    init: function (nom, race, taille) {
        this.nom = nom;
        this.race = race;
        this.taille = taille;
    },
    // Renvoie l'aboiement du chien
    aboyer: function () {
        var aboiement = "Whoua ! Whoua !";
        if (this.taille < 25) {
            aboiement = "Kaii ! Kaii !";
        } else if (this.taille > 60) {
            aboiement = "Grrr ! Grrr !";
        }
        return aboiement;
    }
};

var crokdur = Object.create(Chien);
crokdur.init("Crokdur", "mâtin de Naples", 75);
var pupuce = Object.create(Chien);
pupuce.init("Pupuce", "bichon", 22);
var medor = Object.create(Chien);
medor.init("Médor", "labrador", 58);

var chenil = [];
chenil.push(crokdur);
chenil.push(pupuce);
chenil.push(medor);

console.log("Le chenil hégerge " + chenil.length + " chien(s) :");
chenil.forEach(function (chien) {
    console.log(chien.nom + " est un " + chien.race + " mesurant " + chien.taille + " cm. " +
        "Il aboie : " + chien.aboyer());
});


