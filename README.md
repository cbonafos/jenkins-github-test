# Application Express/TypeScript

## Références

* [How to test Express.js with Jest and Supertest](https://www.albertgao.xyz/2017/05/24/how-to-test-expressjs-with-jest-and-supertest/) (ne couvre pas TypeScript mais explique les bases)

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

Installation des outils de test :

```
npm i -D jest ts-jest supertest
```

* `jest` (test runner),
* `@types/jest` (types pour Jest),
* `ts-jest` (génère un fichier de configuration pour utiliser Jest avec TypeScript),
* `supertest` (lib. de requêtes AJAX orientée tests)

Lors de l'installation, un message d'erreur va s'afficher :

```
npm WARN deprecated superagent@7.1.2: Deprecated due to bug in CI build https://github.com/visionmedia/superagent/pull/1677\#issuecomment-1081361876
```

On va... l'ignorer !

Génération de la configuration Jest pour TypeScript (voir [ts-jest](https://www.npmjs.com/package/ts-jest)) :

```
npx ts-jest config:init
```

Ceci génère un fichier `jest.config.js`.

Création d'un dossier de tests et dans ce dossier, d'un fichier de "tests d'intégrations" pour tester les routes `/api/post/*` :

```
mkdir test
touch test/post-routes.integration.test.js
```

Également :

* Ajout d'un script `test` dans `package.json` pour lancer Jest.
* Ajout d'un script `dev` pour lancer l'app en mode développement avec `ts-node-dev`
* Ajout d'un script `build` pour compiler le code TypeScript avec `tsc` (TypeScript Compiler, installé via le module `typescript`)
* Ajout d'un script `start` pour lancer l'application compilée

