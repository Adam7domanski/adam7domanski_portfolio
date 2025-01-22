# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `projec principles`
1 - Consistent component formating as function declarations.
2 - Follow the [headless commponent](https://martinfowler.com/articles/headless-component.html) design pattern
3 - Single Responsibility Principle: Each component in your app should have a single responsibility, focusing on one specific functionality. Following this principle makes the component more reusable and less prone to bugs. For example, in most cases, a "Button" component should handle ONLY rendering and user interactions.
4 - TypeScript - Defining prop types and default values ensures component reliability. PropTypes validate the expected types of props, catching potential bugs early.
5 - Destructuring Props:
```
    function Button(props) {
  const {name, age} = props
    …
    }
```
6 - Prop and state: It is crucial to understand the difference between your props and your state. Props are static data passed around within components. They are immutable and do not change. State is used to manage dynamic data within a component. It represents the internal state of a component, allowing it to handle and respond to user interactions, events, or changes in the component's own logic.
7 - Styling: Styling is an important aspect of React component design. The most important thing here is to pick a styling of choice and remain consistent with it across components in the library. Some of the most popular styling choices include:
    • Use CSS modules: CSS modules allow you to create component-level styles that don’t clash with styles from other components.
8 - Testing: Testing is perhaps one of the most severely underrated aspects when it comes to building react components. Here are some best practices to consider:
    • Use libraries like Jest and cypress to write unit tests for your components.
    • Test props and state: Test that your components handle props and state correctly. This can help you catch bugs that might not be apparent in the UI.
    • Test end to end user interactions: Test that your components handle user interactions correctly. This can help you ensure that your components are user-friendly and responsive.
Conclusion:
By following these best practices for React component design, you'll be able to create cleaner, more maintainable, and reusable components. Each practice reinforces important principles such as single responsibility, reusability, prop validation, and performance optimisation. Incorporating these practices into your React projects will contribute to better code quality, improved developer experience, and ultimately, more robust applications.
Remember, mastering these best practices requires practice and continuous learning. Stay up-to-date with the evolving React ecosystem and always strive for code that is efficient, readable, and easy to maintain.


### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

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

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).
