# Route around the page

## Story

There is no website where you find all the information in a single webpage.
You want to separate your pages from each other in order to help your users find what they are searching in your site.

That's why you decided to try how React routing works.
In this project you will create a blueprint of the layout of a web site with 3 pages, a header and a footer.
With this you can create a group of components that you can use other times.

## What are you going to learn?

- React
- React routing
- Create reusable components

## Tasks

1. Create a landing page that your user will see firstly when they reach the website. The page is built by a layout that will be the base to all the subpages. The layout contains the header and footer. The header will be our navigation tool, it contains all the 3 links of the web application (home, about, contact). The footer simply contains a phrase describing that the page is nothing more than a example project. The page content (beside the content of the base layout) don't need to be more than a title that describes where are the user.
    - When we start the application with the `npm start` command, we see a landing page with a header and footer opening
    - Whenever we navigate to the route `/`, there is a title `This is the home page` in the content section of the page
    - The header contains a link `Home` to the route `/`, a link `About` to the route `/about` and a link `Contacts` to the route `/contacts`
    - The footer contains the phrase `This is an example project for training the react routing`

2. Create an `About` page for your users. The page is built by the same layout the landing page is using. That means, it contains the same header and the same footer from the landing page. There is a title on the page.
    - When we navigate to the route `/about`, we see a page showing up with the same header and footer as the landing page uses
    - The page contains a title `This is the about page`

3. Create a `Contacts` page. The page is built by the same layout the landing page is using. That means, it contains the same header and the same footer from the landing page. There is a title on the page.
    - When we navigate to the route `/contacts`, we see a page showing up with the same header and footer as the landing page uses
    - The page contains a title `This is the contacts page`

## General requirements

- You need to use the package `react-router` for the routing (see background materials).

## Hints

- Start the project by creating a new react app with the command `npx create-react-app <the-application-name>`.
- Use the package `react-router` for the routing (see background materials).
- Use the `App` to building the routing up and create different components for all the page.
- Create a `Layout` component where you can build a basic layout for your pages. You can place you header and footer components in it and with the children property you can build your pages easily with a common layout.

## Background materials

- <i class="far fa-exclamation"></i> [React router](https://reactrouter.com/)
- <i class="far fa-exclamation"></i> [Understanding react routing](https://medium.com/the-andela-way/understanding-the-fundamentals-of-routing-in-react-b29f806b157e)









# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
