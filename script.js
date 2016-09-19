var phrase = "Je suis une phrase random";

var frequence = function(phrase){
	var mots = phrase.toLowerCase().split(" ")
	var compteur = {}
	for (var i = 0; i < mots.length; i++) {
		var mot = mots[i];
		if (compteur[mot] === undefined) {
			compteur[mot] = 1
		}
		else{
			compteur[mot]++;
		}
	}
	return compteur
}


var eleve1 = {
	nom: 'John',
	notes: [15, 10, 18]
}
var eleve2 = {
	nom: 'Doe',
	notes: [10, 10, 18]
}

var moyenne = function (notes){
	var somme = 0;
	for (var i = 0; i < notes.length; i++){
		somme = somme + notes[i]
	}
	return somme / notes.length
}

var estMeilleur = function (a, b) {
	return moyenne(a.notes) > moyenne(b.notes)
}

console.log(moyenne(eleve2.notes))
console.log(estMeilleur(eleve1, eleve2))

