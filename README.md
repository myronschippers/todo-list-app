# Todo List React Application

This **Todo List** application is a companion codebase to the [Todo List React Tutorial](https://github.com/myronschippers/todo-list-react-tutorial). The application is built in such a way to be able to follow along with the tutorial and see what the codebase should look like at a particular Phase of the tutorial.

**Please Don't** use this repository as a base project for the tutorial because the tutorial will walk you through setting up the build tools as well as a brand new repository.


## Installation

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app). After having cloned the repository to your local computer follow these steps to setup and view the application on your local.

**In the project directory, run:**

```
npm install
```

**In the project directory, run:**

```
npm start
```

A new tab will be automagically launched in your default web browser.


## Branches & Phases

Because this codebase is a companion code sample for the [Todo List React Tutorial](https://github.com/myronschippers/todo-list-react-tutorial) there is a very specific branching strategy in place in order to mirror that state of the the code at key points in the tutorial. The tutorial tracks these key points through **Phases**. The `master` branch represents the project after initial setup before we get into any of the phases but the tutorial goes through spinning up an entirely new repository and build system so there is no need to use this as a bas project.

Finding a **Phase** is as simple as switching to a feature branch for that phase.

**example:**

```
git checkout feature-phase-1-1
```

**Branches:**

* `master` - after initial setup
* `develop` - has all features
    * `feature-phase-1-1` - for Phase 1.1
    * `feature-phase-1-2` - for Phase 1.2
    * `feature-phase-1-3` - for Phase 1.3
    * `feature-phase-1-4` - for Phase 1.4
    * `feature-phase-1-5` - for Phase 1.5
    * `feature-phase-1-6` - for Phase 1.6
    * `feature-phase-1-7` - for Phase 1.7
    * `feature-phase-1-8` - for Phase 1.8


## Available Scripts

In the project directory, you can run:

* **`npm start`**
    * Runs the app in the development mode. Open [http://localhost:3000](http://localhost:3000) to view it in the browser.
    * The page will reload if you make edits. You will also see any lint errors in the console.
* **`npm test`**
    * Launches the test runner in the interactive watch mode. See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

* **`npm run build`**
    * Builds the app for production to the `build` folder. It correctly bundles React in production mode and optimizes the build for the best performance.
    * The build is minified and the filenames include the hashes. Your app is ready to be deployed!
    * See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.
* **`npm run eject`**
    * **Note: this is a one-way operation. Once you `eject`, you can’t go back!**
    * If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.
    * Instead, it will copy all the configuration files and the transitive dependencies (Webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.
    * You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.
