# Gestionnaire_Des_Notes
## Aperçu
Gestionnaire des Notes est une application web simple construite avec Google Apps Script qui permet aux enseignats stagiaires de se connecter, de voir leurs notes et de soumettre des commentaires. Cette application est conçue pour fournir une interface facile à utiliser afin de gérer et d'afficher les informations et les notes des étudiants.

## Fonctionnalités
- Système de connexion sécurisé utilisant l'identifiant stagiaire (ر. ت.) et le numéro CIN
- Affichage des informations de stagiaire après une connexion réussie
- Présentation des notes de stagiaire organisées par groupes de matières
- Calcul et affichage des résultats finaux
- Système de soumission de commentaires pour le retour d'information des stagiaires
- Intégration avec Google Sheets pour le stockage et la gestion des données

## Technologies Utilisées
- Google Apps Script
- HTML/CSS
- JavaScript

## Instructions de Configuration
1. Créez un nouveau projet Google Apps Script.
2. Copiez le contenu de `code.gs` dans le fichier script de votre projet.
3. Créez un nouveau fichier HTML nommé `login.html` et copiez-y le contenu HTML fourni.
4. Remplacez le `SHEET_ID` dans `code.gs` par l'ID réel de votre feuille Google.
5. Assurez-vous que votre feuille Google comporte trois feuilles nommées exactement "Sheet1", "Sheet2" et "Sheet3" avec les structures suivantes :
   - Sheet1 : Informations sur les étudiants (RT, CIN, Nom, etc.)
   - Sheet2 : Notes des étudiants
   - Sheet3 : Commentaires des étudiants

## Déploiement
1. Dans l'éditeur Google Apps Script, allez dans Déployer > Nouveau déploiement.
2. Choisissez "Application web" comme type de déploiement.
3. Définissez les autorisations nécessaires (Exécuter en tant que : Moi, Qui a accès : Tout le monde).
4. Cliquez sur "Déployer" et copiez l'URL fournie.

## Utilisation
1. Accédez à l'application web en utilisant l'URL de déploiement.
2. Connectez-vous en utilisant votre ر. ت. (RT) et N° CIN.
3. Consultez vos informations personnelles et vos notes.
4. Soumettez des commentaires si nécessaire.

## Structure des Données
- Sheet1 : Informations sur les étudiants
  - Colonne A : ر. ت. (RT)
  - Colonne G : N° CIN
  - Autres colonnes : Informations supplémentaires sur l'étudiant
- Sheet2 : Notes
  - Organisées par groupes de matières (مجموعة أ, مجموعة ب, مجموعة ج, مجموعة د)
  - Résultats finaux (معدل المجموعات, امتحان التخرج, المجموع)
- Sheet3 : Commentaires
  - Colonne A : N° (CIN)
  - Colonne B : Nom
  - Colonne C : Prénom
  - Colonne D : Commentaires

## Considérations de Sécurité
- Assurez-vous que les autorisations de votre feuille Google sont correctement définies pour protéger les données des étudiants.
- Examinez et mettez à jour régulièrement les autorisations d'accès pour l'application web et la feuille Google sous-jacente.

## Support
Pour tout problème ou question, veuillez nous contacter .

