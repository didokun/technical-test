const AboutData = {
    about: {
        firstName: "Echcharafi",
        lastName: "Adil",
        jobTitle: "Fullstack Développeur PHP/JS Confirmé",
        image: "https://media-exp1.licdn.com/dms/image/D4D35AQEZkB6P7CL14A/profile-framedphoto-shrink_400_400/0/1648115280486?e=2147483647&v=beta&t=XLYZ0q6gSirapPj20n8KTCInsWcFa_NjkKsIgNpL5p8",
        information: [
            {key: 'Date de naissance', value: "17/02/1992"},
            {key: 'Lieu de naissance', value: "Rabat, Maroc"},
            {key: 'Situation familiale', value: "mariée"},
            {key: 'Téléphone', value: "+33 6 14 73 02 74"},
            {key: 'Email', value: "charafi.adil@gmail.com"},
            {key: 'Adresse', value: "7 rue des glycines, 77330 Ozoir-la-ferrière"},
        ],
    },
    educations: [
        {
            school: 'SUPMTI',
            degree: 'Ingénieur En Système Informatiques',
            date: '2017',
            city: 'Rabat',
            country: 'Maroc'
        },
        {
            school: 'SUPMTI',
            degree: "Licence Professionnelle En Système D’information",
            date: '2015',
            city: 'Rabat',
            country: 'Maroc'
        },
        {
            school: 'ISTA',
            degree: 'Technicien Spécialisé En Développement Informatique',
            date: '2014',
            city: 'Salé',
            country: 'Maroc'
        },
        {
            school: 'Lycée Kadi Ayyad',
            degree: 'Baccalauréat Science Mathématique A',
            date: '2010',
            city: 'Salé',
            country: 'Maroc'
        },
    ],
    experiences: [
        {
            company: 'SQLI',
            city: 'Levallois-perret',
            country: 'France',
            date: 'Septembre 2021',
            jobName: 'Référent Expertise Et Développement',
            projects: [
                {
                    company: 'Chanel',
                    city: 'Neuilly-sur-seine',
                    country: 'France',
                    date: 'Mars 2022',
                    jobName: 'Lead Dev Front',
                    details: [
                        "Développement des componsants transvers avec Preact",
                        "Mise en place de système de registry npm via Bit Harmony",
                        "Rédaction des spécifications technique",
                        "Gestion d'équipe de deux développeur Front-End",
                        "Mise en place de code sniffing via EsLint",
                        "Rédaction des tests unitaire"
                    ]
                },
                {
                    company: 'SQLI',
                    city: 'Levallois-perret',
                    country: 'France',
                    date: 'Septembre 2021',
                    jobName: 'Référent Expertise Et Développement',
                    details: [
                        "Rapport d’audit avec NewRelic sur les 4 sites de Lycra",
                        "Réalisation de chiffrage technique sur l’Avant vente de multi-site de « Suez » (Drupal 9 + React)",
                        "Entretien technique pour des candidats en Drupal 8 et React JS et Node JS",
                        "Participation en Avant vente d’audit sur « MGEN » (NodeJS, AngularJS, MySQL)",
                        "Etude d’architecture technique sur les différents technologie de google cloud: Google Computer",
                        "Engine, Google Application Engine, Google Kubernetes Engine. « carrefour assurance"
                    ]
                }
            ]
        },
        {
            company: 'SQLI',
            city: 'Levallois-perret',
            country: 'France',
            date: 'Février 2020',
            jobName: 'Ingénieur Concepteur Développeur',
            projects: [
                {
                    company: 'Autodistribution',
                    city: 'Arcueil',
                    country: 'France',
                    date: 'Novembre 2020',
                    jobName: 'Senior FrontEnd Développeur',
                    details: [
                        "Refonte site web vers Headless (NextJS, ReactJs, Typescript)",
                        "Développement de API Rest (API Platform, Symfony 4, ElasticSearch)",
                        "Code review et validation des demandes de merges",
                        "Mise en place des tests e2e avec CypressJS",
                    ]
                },
                {
                    company: 'Intersport',
                    city: 'Levallois-perret',
                    country: 'France',
                    date: 'Mars 2020',
                    jobName: 'Fullstack developpeur JS',
                    details: [
                        "Participation en architecture technique (Google cloud, Hasura, SSO)",
                        "Développement BackEnd (NodeJS, Typescript, Graphql)",
                        "Développement FrontEnd (Angular 12, GraphQL)",
                        "Rédaction des documentations techniques",
                    ]
                },
                {
                    company: 'Intersport',
                    city: 'Levallois-perret',
                    country: 'France',
                    date: 'Février 2020',
                    jobName: 'Fullstack developpeur PHP/JS',
                    details: [
                        'Développement sous framework Sylius (Symfony), pour application E-commerce',
                        'Développement de tunnel d’achat en React JS (Typescript)',
                        "Mise en place d'environnement Local avec Docker",
                        "Animation des demo client",
                        "Validation des merges request"
                    ]
                }
            ]
        },
        {
            company: 'Actency',
            city: 'Paris',
            country: 'France',
            date: 'Mai 2018 ',
            jobName: 'Informaticien Expert Drupal',
            projects: [
                {
                    company: 'Oui.SNCF',
                    city: 'Puteaux',
                    country: 'France',
                    date: 'Avril 2019',
                    jobName: 'Senior PHP/JS Développeur',
                    details: [
                        "Renforce l’équipe de développement pour le project « Oui.sncf »",
                        "Refactoring de code depuis le procédure vers POO",
                        "Développement des nouveaux modules et plugin sur Drupal 8",
                        "Développement de bibliothèque React sur le project « Aggregateur Oui.sncf ",
                        "Exposer des API Rest custom et mise en place de swagger",
                        "Création de script Node.js de traitement des grands fichiers json"
                    ]
                },
                {
                    company: 'Parrot',
                    city: 'Paris',
                    country: 'France',
                    date: 'Mai 2018',
                    jobName: 'Fullstack Php / Js Developpeur',
                    details: [
                        "Développement des modules et thèmes sur le site E-commerce \"parrot.com\" en Drupal 7.",
                        "Mis en place des tests automatisés en « Behat / Sélenium »",
                        "Développement de site en Drupal 8 Headless et Gatsby.js"
                    ]
                }
            ]
        },
        {
            company: '4D Logiciel',
            city: 'Rabat',
            country: 'Maroc',
            date: 'Février 2017',
            jobName: 'Ingénieur De Développement Web',
            details: [
                "Analyse, conception et développement des site web (Officiel) : Jekyll, Wordpress, Drupal 7",
                "Développement des applications : NodeJS, ExpressJS, Angular 1/4, Wakanda",
                "Intégration des maquettes PSD / Sketch : CSS3, Sass, Compass, Bootstrap 4",
                "Organisation des présentation et réunion avec l'équipe offshore",
                "Encadrement des stagiaires sur les projets internes",
                "Mise en place d'équipe de développement web",
                "Suivi et référencement des sites web officiels"
            ],
        },
        {
            company: 'Pyxicom',
            city: 'Rabat',
            country: 'Maroc',
            date: 'Janvier 2016',
            jobName: 'Développeur Php Confirmé',
            details: [
                "Etude, conception et développement des sites WEB (Marocain / Offshore)",
                "Développement des applications Intranet/Extranet : PHP5 natif, Symfony 2/3, Laravel 5.",
                "Création des services web et API (REST / SOAP)",
                "Développement des plugins / extensions JS",
                "Développement des SPA avec AngularJS",
                "Développement BackEnd sous les solutions CMS : Drupal 6/7, Prestashop, Wordpress, Joomla",
                "Intégration FrontEnd des maquettes PSD en HTML, CSS, SASS et responsive design"
            ]
        },
        {
            company: 'Rabatech',
            city: 'Rabat',
            country: 'Maroc',
            date: 'Juin 2014',
            jobName: 'Développeur Web',
            details: [
                "Etude, conception et développement des sites WEB et des refonte en PHP",
                "Développement des applications Intranet/Extranet : PHP natif, Symfony 2, Laravel 4/5, ASP.NET",
                "Développement des applications bureau : C# .NET, Devexpress",
                "Création et intégration des maquettes PSD: HTML5, CSS3, SASS."
            ],
        },
        {
            company: 'Géosphere',
            city: 'Rabat',
            country: 'Maroc',
            date: 'Septembre 2013',
            jobName: 'Stage À Distance Et Pfe',
            details: [
                "Chargé de la réalisation de site web officiel de l’agence (Symfony2)",
                "Création d’application bureau de gestion des diabète ( C#, Devexpress)",
                "Création d’un site e-commerce - PFE (Prestashop)."
            ],
        },
    ],
    skills: [
        {title: 'ReactJS', color: '#1a9de6', percent: '90%'},
        {title: 'NextJS', color: '#000', percent: '80%'},
        {title: 'Angular', color: '#950000', percent: '60%'},
        {title: 'Typescript', color: '#063497', percent: '85%'},
        {title: 'NodeJS', color: '#268841', percent: '70%'},
        {title: 'MongoDB', color: '#07ff26', percent: '50%'},
        {title: 'ExpressJS', color: '#aaa029', percent: '70%'},
        {title: 'NestJS', color: '#bd0404', percent: '30%'},
        {title: 'Drupal', color: '#002997', percent: '90%'},
        {title: 'PHP', color: '#5200a1', percent: '95%'},
        {title: 'Git', color: '#f45610', percent: '95%'},
        {title: 'Docker', color: '#3168ed', percent: '70%'},
    ]
}
export default AboutData;