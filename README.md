# Application Express/TypeScript

## Mise en place

Initialisation `package.json` :

```
npm init -y
```

Installation TypeScript et types pour Node.js :

```
npm i -D typescript @types/node
```

Initialisation config TypeScript (`tsconfig.json`) :

```
npx tsc --init
```

Installation dépendances de l'application :

```
npm i express cors
```

* `express` : framework léger
* `cors` : gestion des requêtes AJAX cross-origin

Installation types pour Express et Cors :

```
npm i -D @types/express @types/cors
```

Installation de `ts-node-dev` (équivalent de Nodemon pour TypeScript) :

```
npm i -D ts-node-dev
```
