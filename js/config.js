/* Google MAP Settings*/
  var lat= 47.247328;  //Change the value with your address Latitude
  var lng= 5.222890;  //Change the value with your address Longitude
  
//Skill Chart Data
var skillData = {
	skill1: [
		{
			title: "Langage C 90%",
			color: "#f3377a",
			border: "4px solid #ac62e5",
			value: '90%'
		},
		{
			title: "Langage C++ 95%",
			color: "#f3377a",
			border: "4px solid #ac62e5",
			value: '85%'
		},
		{
			title: "Pro*C & Oracle 76%",
			color: "#f3377a",
			border: "4px solid #ac62e5",
			value: '76%'
		},
		{
			title: "Windev 95%",
			color: "#f3377a",
			border: "4px solid #ac62e5",
			value: '95%'
		},
		{
			title: "Visual Studio 70%",
			color: "#f3377a",
			border: "4px solid #ac62e5",
			value: '70%'
		},
		{
			title: "Power Builder 65%",
			color: "#f3377a",
			border: "4px solid #ac62e5",
			value: '65%'
		},
		{
			title: "Windows 65%",
			color: "#f3377a",
			border: "4px solid #ac62e5",
			value: '65%'
		},
		{
			title: "Linux / Unix 85%",
			color: "#f3377a",
			border: "4px solid #ac62e5",
			value: '85%'
		},
		{
			title: "Appli Graphique 85%",
			color: "#f3377a",
			border: "4px solid #ac62e5",
			value: '95%'
		},
		{
			title: "Process / Tache 98%",
			color: "#f3377a",
			border: "4px solid #ac62e5",
			value: '98%'
		}
	],
	skill2: [
		{
			title: "HTML5 100%",
			color: "#1b7ee4",
			border: "4px solid #f3377a",
			value: '100%'
		},
		{
			title: "CSS3 90%",
			color: "#1b7ee4",
			border: "4px solid #f3377a",
			value: '90%'
		},
		{
			title: "PHP / PHP7 95%",
			color: "#1b7ee4",
			border: "4px solid #f3377a",
			value: '95%'
		},
		{
			title: "SYMFONY 4 50%",
			color: "#1b7ee4",
			border: "4px solid #f3377a",
			value: '50%'
		},
		{
			title: "MySQL 95%",
			color: "#1b7ee4",
			border: "4px solid #f3377a",
			value: '95%'
		},
		{
			title: "JS / jQuery 70%",
			color: "#1b7ee4",
			border: "4px solid #f3377a",
			value: '70%'
		},
		{
			title: "Bootstrap 90%",
			color: "#1b7ee4",
			border: "4px solid #f3377a",
			value: '90%'
		},
		{
			title: "Web Services 90%",
			color: "#1b7ee4",
			border: "4px solid #f3377a",
			value: '90%'
		},
		{
			title: "Responsive Design 85%",
			color: "#1b7ee4",
			border: "4px solid #f3377a",
			value: '85%'
		},
		{
			title: "Gestion Serveur 85%",
			color: "#1b7ee4",
			border: "4px solid #f3377a",
			value: '85%'
		}
	],
  skill3: [
		{
			title: "Référencement 85%",
			color: "#87b615",
			border: "4px solid #1b7ee4",
			value: '85%'
		},
		{
			title: "Positionnement 92%",
			color: "#87b615",
			border: "4px solid #1b7ee4",
			value: '92%'
		},
		{
			title: "Optimisation de Contenu 92%",
			color: "#87b615",
			border: "4px solid #1b7ee4",
			value: '92%'
		},
		{
			title: "Rédaction de contenu 95%",
			color: "#87b615",
			border: "4px solid #1b7ee4",
			value: '95%'
		},
		{
			title: "Réseaux Sociaux 80%",
			color: "#87b615",
			border: "4px solid #1b7ee4",
			value: '80%'
		},
		{
			title: "Appareils Mobiles 85%",
			color: "#87b615",
			border: "4px solid #1b7ee4",
			value: '85%'
		},
		{
			title: "Emailing 80%",
			color: "#87b615",
			border: "4px solid #1b7ee4",
			value: '80%'
		},
		{
			title: "Animation de Site 85%",
			color: "#87b615",
			border: "4px solid #1b7ee4",
			value: '85%'
		},
		{
			title: "Statistiques 80%",
			color: "#87b615",
			border: "4px solid #1b7ee4",
			value: '80%'
		},
		{
			title: "Communication 80%",
			color: "#87b615",
			border: "4px solid #1b7ee4",
			value: '80%'
		}
	],
  skill4: [
		{
			title: "Creativité 85%",
			color: "#000000",
			border: "4px solid #87b615",
			value: '85%'
		},
		{
			title: "Chef de Projet 90%",
			color: "#000000",
			border: "4px solid #87b615",
			value: '90%'
		},
		{
			title: "Motivation 95%",
			color: "#000000",
			border: "4px solid #87b615",
			value: '95%'
		},
		{
			title: "Travail en Equipe 95%",
			color: "#000000",
			border: "4px solid #87b615",
			value: '95%'
		},
		{
			title: "Force de Proposition 95%",
			color: "#000000",
			border: "4px solid #87b615",
			value: '95%'
		},
		{
			title: "Rigueur 90%",
			color: "#000000",
			border: "4px solid #87b615",
			value: '90%'
		},
		{
			title: "Esprit Critique 95%",
			color: "#000000",
			border: "4px solid #87b615",
			value: '95%'
		},
		{
			title: "Evolutivité 90%",
			color: "#000000",
			border: "4px solid #87b615",
			value: '90%'
		},
		{
			title: "Ambition 95%",
			color: "#000000",
			border: "4px solid #87b615",
			value: '95%'
		},
		{
			title: "Productivité 90%",
			color: "#000000",
			border: "4px solid #87b615",
			value: '90%'
		}
	],
	skill5: [
		{
			title: "Anglais 70%",
			color: "#ac62e5",
			border: "4px solid #000000",
			value: '70%'
		},
		{
			title: "Traitement Texte 95%",
			color: "#ac62e5",
			border: "4px solid #000000",
			value: '95%'
		},
		{
			title: "Tableur 85%",
			color: "#ac62e5",
			border: "4px solid #000000",
			value: '85%'
		},
		{
			title: "Infographie 65%",
			color: "#ac62e5",
			border: "4px solid #000000",
			value: '65%'
		},
		{
			title: "Compta. 65%",
			color: "#ac62e5",
			border: "4px solid #000000",
			value: '65%'
		},
		{
			title: "Gestion Projet 90%",
			color: "#ac62e5",
			border: "4px solid #000000",
			value: '90%'
		},
		{
			title: "Gestion Entreprise 85%",
			color: "#ac62e5",
			border: "4px solid #000000",
			value: '85%'
		},
		{
			title: "Commercial 65%",
			color: "#ac62e5",
			border: "4px solid #000000",
			value: '65%'
		},
		{
			title: "Secrétariat 75%",
			color: "#ac62e5",
			border: "4px solid #000000",
			value: '75%'
		},
		{
			title: "Relationnel Clients 95%",
			color: "#ac62e5",
			border: "4px solid #000000",
			value: '95%'
		}
	]
}