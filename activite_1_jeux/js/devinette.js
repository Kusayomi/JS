/*
Activité : jeu de devinette
*/

// NE PAS MODIFIER OU SUPPRIMER LES LIGNES CI-DESSOUS
// COMPLETEZ LE PROGRAMME UNIQUEMENT APRES LE TODO

console.log("Bienvenue dans ce jeu de devinette !");

// Cette ligne génère aléatoirement un nombre entre 1 et 100
var solution = Math.floor(Math.random() * 100) + 1;

// Décommentez temporairement cette ligne pour mieux vérifier le programme
//console.log("(La solution est " + solution + ")");

// TODO : complétez le programme
for(var nombre = 1; nombre <= 6; nombre++)
{
	var deviner = Number(prompt("Entrez un chiffre : "));
	if ((deviner < 0) || (deviner > 100))

		console.log("Veuillez saisir un chiffre compris entre 1 et 100");
	{
		if(deviner > solution)
		{
			console.log("Votre chiffre : '" + deviner +"' est trop grand");
		}
		else if (deviner < solution)
		{
			console.log("Votre chiffre : '" + deviner +"' est trop petit");
		}
		else if (deviner === solution)
		{
			nombre = 6;
			console.log("Votre chiffre : '" + deviner +"' BRAVO vous avez trouvez la bonne réponse!");
		}
		else
		{
			console.log("Veuillez saisir un chiffre");
		}
		
	}
	 console.log(solution);
}
if((nombre > 6) && (deviner !== solution))
{
	console.log("Fin du Game man! ");
}

