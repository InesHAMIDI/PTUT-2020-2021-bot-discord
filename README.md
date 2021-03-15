# PTUT-2019-2020

## BrocoBot

### Présentation

**BrocoBot** est un bot discord proposant des fonctionnalités d'administration de serveur. Il est prévu de le **fusionner** avec les bots créés par les membres du projet tutoré. Le bot final fournit ainsi des fonctionnalités variées et utiles, et se veut donc **versatile**.

---

### Fonctionnalités

**BrocoBot** s'oriente vers la gestion administrative d'un serveur :
- Exclusions et bannissements **guidés**
- Gestion des permissions des membres
- Système anti-spam **paramétrable**
- Affichage des informations relatives aux membres et au serveur
- Suppressions **facilitée** des messages

---

### Commandes

**Nom :** !info
**Description :** affiche les informations du membre mentionné, si personne n'est mentionné, les informations du membre émetteur de la commande sont affichées.
**Paramètres :** [member] -> mention de l'utilisateur à afficher

**Nom :** !server-info
**Description :** affiche les informations sur le serveur.
**Paramètres :** aucun

**Nom :** !kick
**Description :** exclut le membre sélectionné.
**Paramètres :** [member] -> mention de l'utilisateur à exclure

**Nom :** !ban
**Description :** bannit l'utilisateur mentionné.
**Paramètres :** [member] -> mention de l'utilisateur à bannir

**Nom :** !delmes
**Description :** supprime une quantité choisie de messages en partant des plus récents.
**Paramètres :** [amount] -> quantité de messages à supprimer

**Nom :** !setMessageCooldown
**Description :** définit le temps d'attente entre chaque envoi de message (propre à chaque membre).
**Paramètres :** [cooldown] -> temps d'attente en millisecondes

**Nom :** !setCommandCooldown
**Description :** définit le temps d'attente entre chaque envoi de commande (propre à chaque membre).
**Paramètres :** [cooldown] -> temps d'attente en millisecondes
