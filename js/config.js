/* Google MAP Settings*/
  var lat= 48.416786 ;  //Change the value with your address Latitude
  var lng= -71.0566895;  //Change the value with your address Longitude
  
//Skill Chart Data
var skillData = {
	skill1: [
		{
			title: "Langage JAVA 90%",
			color: "#f3377a",
			border: "4px solid #ac62e5",
			value: '90%'
		},
        {
            title: "C# 80%",
            color: "#f3377a",
            border: "4px solid #ac62e5",
            value: '80%'
        },
		{
			title: "Langage C 70%",
			color: "#f3377a",
			border: "4px solid #ac62e5",
			value: '70%'
		},
		{
			title: "Langage C++ 80%",
			color: "#f3377a",
			border: "4px solid #ac62e5",
			value: '80%'
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
            title: "PHP 85%",
            color: "#1b7ee4",
            border: "4px solid #f3377a",
            value: '85%'
        },
		{
			title: "HTML5 90%",
			color: "#1b7ee4",
			border: "4px solid #f3377a",
			value: '90%'
		},
		{
			title: "CSS3 90%",
			color: "#1b7ee4",
			border: "4px solid #f3377a",
			value: '90%'
		},
		{
			title: "JS / jQuery 50%",
			color: "#1b7ee4",
			border: "4px solid #f3377a",
			value: '50%'
		},
		{
			title: "JEE 75%",
			color: "#1b7ee4",
			border: "4px solid #f3377a",
			value: '75%'
		},
		{
			title: "ASP.NET 70%",
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
			title: "Laravel 85%",
			color: "#1b7ee4",
			border: "4px solid #f3377a",
			value: '85%'
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
			title: "MySQL 90%",
			color: "#87b615",
			border: "4px solid #1b7ee4",
			value: '90%'
		},
		{
			title: "NoSQL 60%",
			color: "#87b615",
			border: "4px solid #1b7ee4",
			value: '60%'
		},
		{
			title: "Firebase 80%",
			color: "#87b615",
			border: "4px solid #1b7ee4",
			value: '80%'
		},
		{
			title: "phpMyAdmin 90%",
			color: "#87b615",
			border: "4px solid #1b7ee4",
			value: '90%'
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
			title: "IntelliJ 85%",
			color: "#000000",
			border: "4px solid #87b615",
			value: '85%'
		},
		{
			title: "Eclipse 90%",
			color: "#000000",
			border: "4px solid #87b615",
			value: '90%'
		},
		{
			title: "Visual Studio 95%",
			color: "#000000",
			border: "4px solid #87b615",
			value: '95%'
		},
		{
			title: "NetBeans 95%",
			color: "#000000",
			border: "4px solid #87b615",
			value: '95%'
		},
		{
			title: "PhpStorm 95%",
			color: "#000000",
			border: "4px solid #87b615",
			value: '95%'
		},
      {
          title: "Android Studio 95%",
          color: "#000000",
          border: "4px solid #87b615",
          value: '95%'
      },
	],
	skill5: [
        {
            title: "Git 65%",
            color: "#ac62e5",
            border: "4px solid #000000",
            value: '65%'
        },
        {
            title: "VMware 95%",
            color: "#ac62e5",
            border: "4px solid #000000",
            value: '95%'
        },
		{
			title: "Anglais 90%",
			color: "#ac62e5",
			border: "4px solid #000000",
			value: '90%'
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
			title: "Sécurité informatique 85%",
			color: "#ac62e5",
			border: "4px solid #000000",
			value: '85%'
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

	]
}