### What is JSX?
- JSX stands for `JavaScript XML`. It is a `syntax extension for JavaScript` that allows developers to write `HTML-like markup` inside JavaScript code.

```js
const element = <h1>Hello React</h1>;
```
- JSX is transformed into JavaScript function calls during compilation.

### What is the Virtual DOM?
- The Virtual DOM is a lightweight, in-memory representation of the UI.

- React uses this representation to determine what needs to change in the actual DOM when the UI updates.





### Does React provide routing and state management functionality out of the box, or do we need additional libraries?

React provides **`some state management functionality out of the box`**, but it does not provide a built-in routing solution.

Let's understand both.

#### **1. Routing in React**

React does not include an official built-in routing solution.

To implement routing, developers commonly use third-party libraries such as:

- **React Router** – Client-side routing.
- **TanStack Router** – Type-safe routing.
- **Next.js** – Provides file-system-based routing as part of its framework.

Example using React Router:

```js
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </BrowserRouter>
  );
}
```

#### **2. State management in React**

React provides built-in state management capabilities through Hooks and Context API.

Some important built-in options are:

| Feature    | Purpose                                                                   |
| ---------- | ------------------------------------------------------------------------- |
| useState   | Manages local component state                                             |
| useReducer | Manages more complex component state                                      |
| useContext | Shares data across components                                             |
| useRef     | Stores values that persist between renders without triggering a re-render |

For larger applications, developers may use external libraries:

- Redux Toolkit
- Zustand
- MobX
- Jotai

#### **3. `Interview-ready answer`**

Recommended answer

`React does not provide a built-in routing solution, so developers commonly use third-party libraries like React Router or TanStack Router.`

`However, React provides built-in state management capabilities through Hooks such as useState, useReducer, and Context API.`

`For complex applications, developers can use external state management libraries such as Redux Toolkit or Zustand.`







### **IoC (Inversion of Control)**
- is a software design principle in which the control of program execution is transferred from the developer's code to an external system, such as a framework.

In simple words:

- **Without IoC:** You control when and how your code executes.
- **With IoC:** The framework controls when your code executes and calls it when needed.

#### **1. Example of a Library (Without framework-level IoC)**

```js
function greet() {
  console.log("Hello!");
}

// Developer calls the function
greet();
```

Here, the developer decides when to execute the function.

#### **2. Example of a Framework (IoC)**

Imagine a framework that manages application execution:

```js
function onApplicationStart() {
  console.log("Application started!");
}

// Framework calls this function automatically
framework.register(onApplicationStart);
```

Here, the framework decides when to call your function.

*Note: `framework.register()` is illustrative pseudocode, not a real API.*

#### **3. Library vs Framework (IoC)**

| Library                                | Framework                               |
| -------------------------------------- | --------------------------------------- |
| Developer calls the library.           | Framework calls developer-written code. |
| Developer controls the execution flow. | Framework controls the execution flow.  |
| Example: React (as a UI library).      | Example: Angular.                       |

#### **4. `Interview-ready answer`**

Inversion of Control (IoC) is a software design principle in which the control of program execution is transferred from the developer to a framework or external system.

In a library, developers call its functions when needed, whereas in a framework, the framework calls developer-written code at predefined points.

Remember this

**Library → We call the library.**

**Framework → Framework calls our code.**










## 1. What is DOM Manipulation?

DOM manipulation is the process of dynamically accessing, modifying, adding, or removing HTML elements and their attributes using JavaScript.

It allows developers to change the structure, content, and styling of a webpage without manually editing the HTML file.

### Example

**HTML:**
```html
<h1 id="heading">Hello World</h1>
```

**JavaScript:**
```javascript
const heading = document.querySelector("#heading");

// Change text
heading.textContent = "Welcome to React!";

// Change styling
heading.style.color = "blue";

// Add CSS class
heading.classList.add("active");
```

### Common DOM Manipulation Methods

| Method / Property | Purpose |
|---|---|
| `querySelector()` | Selects an HTML element. |
| `getElementById()` | Selects an element by its ID. |
| `createElement()` | Creates a new HTML element. |
| `textContent` | Gets or changes text content. |
| `innerHTML` | Gets or changes HTML content. |
| `appendChild()` | Adds a child element. |
| `remove()` | Removes an element. |
| `setAttribute()` | Sets an HTML attribute. |
| `classList.add()` | Adds a CSS class. |
| `classList.remove()` | Removes a CSS class. |

---

## 2. What is the difference between `innerHTML` and `textContent`?

Both are JavaScript properties used to get or change the content of an HTML element.

| `innerHTML` | `textContent` |
|---|---|
| Gets or sets HTML markup. | Gets or sets plain text content. |
| Parses HTML when setting content. | Treats assigned content as text. |
| Can create HTML elements dynamically. | Does not create HTML elements from markup. |
| Can introduce XSS vulnerabilities when used with untrusted input. | Safer for displaying untrusted text. |

### Example

**HTML:**
```html
<div id="box"></div>
```

**Using innerHTML:**
```javascript
const box = document.querySelector("#box");

box.innerHTML = "<h1>Hello World</h1>";
```

Output: Displays Hello World as an HTML heading.

**Using textContent:**
```javascript
box.textContent = "<h1>Hello World</h1>";
```

Output: Displays `<h1>Hello World</h1>` as plain text.

**Interview Tip:** Prefer `textContent` when you only need to display text, especially when the text comes from an untrusted source.

---

## 3. What is the difference between `append()` and `appendChild()`?

Both methods are used to insert content inside a parent DOM element.

| `append()` | `appendChild()` |
|---|---|
| Can append multiple nodes. | Appends only one node at a time. |
| Can append strings and nodes. | Accepts a Node object. |
| Does not return the appended node. | Returns the appended node. |
| Modern DOM method. | Traditional DOM method. |

### Example using append()

```javascript
const root = document.querySelector("#root");

const heading = document.createElement("h1");
heading.textContent = "Hello World";

root.append("Welcome ", heading);
```

### Example using appendChild()

```javascript
const root = document.querySelector("#root");

const heading = document.createElement("h1");
heading.textContent = "Hello World";

root.appendChild(heading);
```

**Important:** Both methods move an existing node if it is already attached elsewhere in the DOM.

---

## 4. What is DOM?

DOM stands for **Document Object Model**.

The DOM is a programming interface for HTML and XML documents. It represents a webpage as a tree-like structure of objects (nodes), allowing JavaScript to access and manipulate the document's content, structure, and styles.

### Example

**HTML:**
```html
<html>
  <body>
    <h1>Hello World</h1>
    <p>Learning JavaScript</p>
  </body>
</html>
```

**DOM Tree Representation:**

```text
Document
   |
  html
   |
  body
  /  \
h1    p
 |    |
Hello Learning
World JavaScript
```

### Important DOM Concepts

- **Document:** Represents the entire HTML document.
- **Element:** Represents HTML elements such as `div`, `h1`, and `p`.
- **Node:** A general object in the DOM tree, including elements and text.
- **Attribute:** Represents HTML attributes such as `id`, `class`, and `src`.

---

## 5. What is the difference between DOM and Virtual DOM?

**DOM:** The browser's programming representation of the actual webpage.

**Virtual DOM:** A term commonly used for React's in-memory representation of the UI, used to calculate what needs to change in the actual DOM.

| DOM | Virtual DOM |
|---|---|
| Represents the actual document. | Represents the UI in memory. |
| Managed by the browser. | Managed by React. |
| Direct changes can be made using JavaScript. | React manages UI updates through rendering and reconciliation. |
| DOM operations can involve browser rendering work. | Helps React determine which DOM updates are necessary. |
| Contains actual DOM nodes. | React elements are lightweight descriptions of UI, not actual DOM nodes. |

### How React Updates the UI

1. State or props change.
2. React renders the component.
3. Reconciliation: React determines what changed.
4. Commit phase: Necessary DOM updates are applied.

**Important Interview Point:** The Virtual DOM does not automatically make every React update faster than direct DOM manipulation. Its purpose is to help React efficiently manage UI updates.

---

## 6. Why do we use React instead of directly manipulating the DOM?

React provides a declarative and component-based approach to building user interfaces.

With vanilla JavaScript, developers often need to manually select DOM elements, update content, handle events, and keep the UI synchronized with application data.

React simplifies this process by allowing developers to describe what the UI should look like based on the current state. React manages the necessary DOM updates.

### Example using Vanilla JavaScript

```javascript
const button = document.querySelector("button");
const heading = document.querySelector("h1");

let count = 0;

button.addEventListener("click", () => {
  count++;
  heading.textContent = count;
});
```

### Example using React

```jsx
function App() {
  const [count, setCount] = React.useState(0);

  return (
    <>
      <h1>{count}</h1>

      <button onClick={() => setCount(count + 1)}>
        Increment
      </button>
    </>
  );
}
```

### Advantages of React

1. **Component-based architecture:** Breaks complex UIs into smaller reusable components.
2. **Declarative programming:** Describe what the UI should look like rather than manually updating it.
3. **State management:** Helps keep UI synchronized with application data.
4. **Reusability:** Components can be reused across different parts of an application.
5. **Maintainability:** Makes complex applications easier to organize and maintain.
6. **Efficient UI updates:** React manages necessary DOM changes through its rendering and reconciliation process.

### Interview-Ready Answer

We use React because it simplifies UI development through a declarative and component-based approach. Instead of manually manipulating DOM elements and keeping the UI synchronized with application data, we describe the UI based on state, and React manages the necessary DOM updates. It also provides reusable components, making applications easier to maintain and scale.

---



## What is DOM (Document Object Model), and how does JavaScript interact with it?

**DOM (Document Object Model)** is a programming interface for HTML and XML documents. It represents a webpage as a tree-like structure of objects (nodes), allowing JavaScript to access and dynamically modify the document's structure, content, and styles.

### 1. How does JavaScript interact with the DOM?

JavaScript interacts with the DOM through the `document` object, which provides methods and properties to:

1. **Select elements:** Access existing HTML elements.
2. **Create elements:** Dynamically create new HTML elements.
3. **Modify content:** Change text or HTML content.
4. **Modify attributes and styles:** Change CSS styles and HTML attributes.
5. **Add or remove elements:** Dynamically update the DOM tree.
6. **Handle events:** Respond to user interactions such as clicks and keyboard input.

### 2. Example

**HTML:**

```html
<!DOCTYPE html>
<html>
<body>
    <div id="root">
        <h1>Hello World</h1>
    </div>
</body>
</html>
```

**JavaScript:**

```javascript
// 1. Select an element
const root = document.querySelector("#root");

// 2. Create a new element
const heading = document.createElement("h2");

// 3. Modify content
heading.textContent = "Welcome to JavaScript!";

// 4. Modify styling
heading.style.color = "blue";

// 5. Add element to DOM
root.appendChild(heading);

// 6. Handle events
heading.addEventListener("click", () => {
    heading.textContent = "You clicked me!";
});
```

### 3. DOM Tree Representation

```text
Document
   |
  html
   |
  body
   |
  div (#root)
   |
  h1
   |
  "Hello World"
```

JavaScript can dynamically modify this tree by adding, updating, or removing nodes.

### 4. Interview-Ready Answer

JavaScript interacts with the DOM through the `document` object. It uses DOM methods and properties to select, create, modify, and remove HTML elements, change their attributes and styles, and handle user events. This allows developers to dynamically update webpage content without reloading the entire page.


### 6. Important Concept

**HTML → DOM → JavaScript DOM Manipulation**

- HTML provides the structure.
- The browser creates the DOM representation.
- JavaScript interacts with that representation to make webpages dynamic.


# React & Frontend Interview Preparation Notes

## 1. What is TypeScript?

**TypeScript** is an open-source programming language developed and maintained by Microsoft. It is a superset of JavaScript that adds static type checking and other development features.

TypeScript helps developers identify type-related errors during development rather than waiting for runtime.

### Example

**JavaScript:**

```javascript
function add(a, b) {
    return a + b;
}

add(10, "20"); // Returns "1020"
```

**TypeScript:**

```typescript
function add(a: number, b: number): number {
    return a + b;
}

add(10, 20); // Valid
add(10, "20"); // Type error
```

### Key Features

- Static type checking.
- Type annotations.
- Interfaces and type aliases.
- Generics.
- Better IDE support and autocomplete.
- Compiles into JavaScript.

**Important:** TypeScript types are primarily checked during development and are erased during compilation. They do not automatically provide runtime type validation.

---

## 2. What is the difference between Angular and React?

**Angular** is a TypeScript-based frontend framework maintained by Google, whereas **React** is a JavaScript library for building user interfaces, maintained by Meta and the open-source community.

| Feature | Angular | React |
|---|---|---|
| Type | Frontend framework | UI library |
| Maintained by | Google | Meta and open-source community |
| Language | TypeScript | JavaScript or TypeScript |
| Architecture | Component-based | Component-based |
| Data binding | Supports one-way and two-way binding | Primarily one-way data flow |
| Routing | Angular Router | External routing library commonly used |
| State management | Built-in options and external libraries | Built-in options and external libraries |
| Flexibility | More integrated and opinionated | More flexible |
| Learning curve | Generally steeper | Generally easier to start with |

### Key Difference

Angular provides an integrated framework with features such as routing, dependency injection, forms, and HTTP services.

React primarily focuses on building user interfaces. Developers can choose additional libraries for routing, state management, and other application requirements.

---

## 3. Why is Angular called a framework?

Angular is called a framework because it provides a structured environment and an integrated set of tools and features for building complete web applications.

It provides features such as:

1. Component-based architecture.
2. Angular Router for routing.
3. Dependency Injection (DI).
4. Forms and form validation.
5. HTTP client for API communication.
6. Directives and pipes.
7. Built-in conventions for application structure.

Angular also follows **Inversion of Control (IoC)**, where the framework manages much of the application's execution flow and invokes developer-written code at appropriate points.

**Interview Answer:**

Angular is called a framework because it provides a complete and structured development environment with built-in features such as routing, dependency injection, forms, and HTTP communication. It also defines conventions and manages the application's overall execution flow.

---

## 4. What is Two-Way Data Binding?

**Two-way data binding** is a mechanism in which changes in the UI are automatically reflected in the application's data, and changes in the application's data are also reflected in the UI.

In simple terms:

- When the user updates the UI, the application data gets updated.
- When the application data changes, the UI gets updated.

### Example in Angular

```html
<input [(ngModel)]="username">

<p>Hello {{ username }}</p>
```

Here:

- `[(ngModel)]` enables two-way data binding.
- When the user types into the input, `username` gets updated.
- When `username` changes, the input and paragraph reflect the updated value.

The `FormsModule` must be imported to use `ngModel` in a template-driven form.

### What about React?

React primarily follows one-way data flow. You can achieve similar behavior by combining state and event handlers.

```jsx
import { useState } from "react";

function App() {
    const [username, setUsername] = useState("");

    return (
        <>
            <input
                value={username}
                onChange={(event) => setUsername(event.target.value)}
            />

            <p>Hello {username}</p>
        </>
    );
}
```

React does not use Angular-style automatic two-way binding here. Instead, state controls the input value, and the event handler updates that state.

---

# 5. React Routing and State Management

## 5.1 What is Routing in React?

**Routing** is the process of displaying different components or pages based on the current URL without requiring a full-page reload.

React itself does not provide an official built-in routing solution. Libraries such as React Router and TanStack Router are commonly used.

### Example using React Router

```jsx
import {
    BrowserRouter,
    Routes,
    Route
} from "react-router-dom";

import Home from "./pages/Home";
import About from "./pages/About";

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
            </Routes>
        </BrowserRouter>
    );
}

export default App;
```

When the user visits `/about`, the About component is rendered.

## 5.2 What is the Difference Between Client-Side Routing and Server-Side Routing?

| Client-Side Routing | Server-Side Routing |
|---|---|
| Routing is handled in the browser. | Routing is handled by the server. |
| Usually does not require a full-page reload for navigation. | Navigation commonly requests a new document from the server. |
| JavaScript updates the displayed UI. | The server determines which page or document to return. |
| Common in React SPAs. | Common in traditional multi-page applications. |

**Example:**

- Client-side routing: Navigating between pages using React Router.
- Server-side routing: Requesting `/about` from a server that returns an HTML document for that route.

Note: Modern frameworks can combine client-side and server-side routing techniques.

## 5.3 What is State in React?

**State** is data managed by a React component that can change over time and influence what the component renders.

When state changes, React schedules a re-render so the UI can reflect the updated state.

### Example

```jsx
import { useState } from "react";

function Counter() {
    const [count, setCount] = useState(0);

    return (
        <>
            <h1>{count}</h1>

            <button onClick={() => setCount(count + 1)}>
                Increment
            </button>
        </>
    );
}
```

Here:

- `count` is the current state value.
- `setCount` updates the state.
- `useState(0)` initializes the state with `0`.

## 5.4 What is the Difference Between Props and State?

| Props | State |
|---|---|
| Passed from parent to child components. | Managed within a component or through a state-management mechanism. |
| Read-only from the receiving component's perspective. | Updated using the appropriate state setter or dispatch function. |
| Used to pass data between components. | Used to manage changing data. |
| Changes when the parent provides new values. | Changes when an update is triggered. |

### Example of Props

```jsx
function Welcome({ name }) {
    return <h1>Hello, {name}</h1>;
}

function App() {
    return <Welcome name="Shiv" />;
}
```

### Example of State

```jsx
import { useState } from "react";

function Counter() {
    const [count, setCount] = useState(0);

    return (
        <button onClick={() => setCount(count + 1)}>
            Count: {count}
        </button>
    );
}
```

## 5.5 What is the Difference Between useState and useReducer?

Both `useState` and `useReducer` are React Hooks used to manage component state.

| useState | useReducer |
|---|---|
| Suitable for simple state management. | Useful for more complex state logic. |
| Updates state through a setter function. | Updates state by dispatching actions. |
| State update logic is generally written directly. | State update logic is centralized in a reducer function. |
| Easy to use for independent state values. | Useful when multiple actions affect related state. |

### useState Example

```jsx
const [count, setCount] = useState(0);

setCount(count + 1);
```

### useReducer Example

```jsx
import { useReducer } from "react";

function reducer(state, action) {
    switch (action.type) {
        case "increment":
            return { count: state.count + 1 };

        case "decrement":
            return { count: state.count - 1 };

        default:
            return state;
    }
}

function Counter() {
    const [state, dispatch] = useReducer(reducer, {
        count: 0
    });

    return (
        <>
            <h1>{state.count}</h1>

            <button onClick={() => dispatch({ type: "increment" })}>
                Increment
            </button>

            <button onClick={() => dispatch({ type: "decrement" })}>
                Decrement
            </button>
        </>
    );
}
```

**When to use:**

- `useState`: Simple values such as input fields, toggles, and counters.
- `useReducer`: More complex state transitions involving multiple related actions.

## 5.6 What is Context API?

**Context API** is a React feature that allows components to share data without explicitly passing props through every intermediate component.

This helps solve the problem of **prop drilling**.

### Example

```jsx
import { createContext, useContext } from "react";

const UserContext = createContext();

function Profile() {
    const user = useContext(UserContext);

    return <h1>Hello, {user}</h1>;
}

function App() {
    return (
        <UserContext.Provider value="Shiv">
            <Profile />
        </UserContext.Provider>
    );
}
```

Here:

- `createContext()` creates a context.
- `Provider` makes the value available to descendant components.
- `useContext()` reads the context value.

**Common use cases:**

- Theme management.
- Authentication information.
- Language preferences.
- Shared application settings.

## 5.7 Why do we use Redux if React already provides state management?

React provides built-in state-management features such as:

- `useState`
- `useReducer`
- Context API

However, Redux can be useful when an application has complex shared state that needs predictable and centralized management.

### Why use Redux?

1. Centralized state management.
2. Predictable state updates.
3. Easier debugging with Redux DevTools.
4. Middleware support for handling asynchronous logic and other side effects.
5. Useful for managing shared state across many components.
6. Clear separation of state-update logic.

### React State vs Redux

| React State | Redux |
|---|---|
| Built into React. | External state-management library. |
| Often managed locally within components. | Commonly manages shared application state centrally. |
| Suitable for simple and moderately complex state needs. | Useful for complex shared state and predictable update workflows. |
| No additional library required. | Requires Redux packages. |

**Important:** Redux is not required in every React application. For many applications, React state and Context are sufficient. For modern Redux applications, Redux Toolkit is the recommended approach.

---

# 6. Inversion of Control (IoC)

## What is Inversion of Control (IoC), and how does it differentiate a library from a framework?

**Inversion of Control (IoC)** is a software design principle in which control over the execution flow is transferred from the developer's code to a framework or another external system.

It helps explain the fundamental difference between a library and a framework.

### Library

A library provides reusable functions or features that developers can call whenever needed.

The developer controls the application flow and decides when to use the library.

```javascript
// Illustrative example
const result = library.calculateTotal(100, 20);
```

Here, the developer calls the library function.

### Framework

A framework provides a predefined structure and controls the overall execution flow. Developers write code that the framework invokes at appropriate points.

```javascript
// Illustrative pseudocode
function onApplicationStart() {
    console.log("Application started");
}

// The framework invokes this function at the appropriate time.
```

### Difference Between Library and Framework

| Library | Framework |
|---|---|
| Provides reusable functionality. | Provides an application structure and conventions. |
| Developer calls the library. | Framework invokes developer-written code. |
| Developer controls the execution flow. | Framework controls much of the execution flow. |
| Example: React (UI library). | Example: Angular. |

### Key Concept: Inversion of Control

- Library: You call the library.
- Framework: The framework calls your code.

This is commonly summarized as:

**"Don't call us, we'll call you."**

---

# 7. React Project Setup and Build Tools

## 7.1 What is Scaffolding in React?

**Scaffolding** is the process of automatically generating the initial structure and configuration of a project.

In React, scaffolding tools help developers create a ready-to-use project with the required folders, files, dependencies, and development configuration.

It saves time by avoiding manual project setup.

Examples:

- Create React App (CRA).
- Vite.
- Framework-specific project generators.

## 7.2 What is the Difference Between CRA and Vite?

**Create React App (CRA)** and **Vite** are tools used to set up and develop frontend applications.

| Feature | CRA | Vite |
|---|---|---|
| Purpose | React project scaffolding and tooling. | Frontend development and build tooling. |
| Development server | Uses Webpack-based tooling. | Uses native ES modules during development. |
| Development startup | Can be slower on larger projects. | Generally provides faster startup. |
| Hot updates | Fast Refresh support. | Fast HMR support. |
| Configuration | Traditionally hides much of its configuration. | Provides a simpler, flexible configuration system. |
| Current recommendation | Deprecated for new React applications. | Commonly recommended for new React projects. |

### CRA Command

```bash
npx create-react-app my-app
```

### Vite Command

```bash
npm create vite@latest my-app -- --template react
```

Then:

```bash
cd my-app
npm install
npm run dev
```

**Important:** Vite does not replace React. Vite is a build tool that can be used to develop React applications.

## 7.3 What is Webpack?

**Webpack** is a JavaScript module bundler that takes modules and their dependencies and bundles them into optimized output files for the browser.

It can process JavaScript, CSS, images, and other assets using loaders and plugins.

### Why do we use Webpack?

1. Bundles application modules.
2. Manages dependencies.
3. Supports code splitting.
4. Optimizes assets.
5. Supports loaders and plugins.
6. Helps prepare applications for production.

### Example

Suppose an application has:

```text
src/
  index.js
  App.js
  styles.css
  utils.js
```

Webpack analyzes the dependencies between these files and generates output bundles that can be served to the browser.

## 7.4 What is Babel?

**Babel** is a JavaScript compiler and toolchain that transforms modern JavaScript syntax and JSX into JavaScript that is compatible with the target environments.

### Example

Modern JavaScript:

```javascript
const greet = (name) => {
    return `Hello ${name}`;
};
```

A possible transformed output:

```javascript
"use strict";

var greet = function greet(name) {
    return "Hello " + name;
};
```

Babel can also transform JSX:

```jsx
const element = <h1>Hello World</h1>;
```

Into JavaScript calls that React can understand, depending on the configured JSX transform.

**Important:** Babel transforms syntax; it does not bundle application files. Webpack is a bundler.

## 7.5 What is the Difference Between a Build Tool and a Bundler?

A **build tool** automates the process of preparing an application for development and production.

A **bundler** combines modules and their dependencies into output bundles.

| Build Tool | Bundler |
|---|---|
| Broader category of development and build tooling. | Focuses on combining modules and dependencies. |
| Can manage development servers, builds, transformations, and optimizations. | Analyzes dependency graphs and generates bundles. |
| May use a bundler internally or integrate with one. | Usually performs a specific part of the build process. |
| Example: Vite. | Example: Webpack, Rollup, esbuild. |

**Key Point:** A bundler can be part of a build tool, but a build tool can provide functionality beyond bundling.

## 7.6 Why was CRA deprecated?

Create React App was deprecated for new React applications because the React team moved toward recommending modern build tools and React frameworks.

Some reasons include:

1. Slower development startup and rebuilds in certain larger projects.
2. Configuration limitations and the complexity of customization.
3. Modern alternatives provide better development experiences.
4. React applications increasingly use frameworks that provide routing, rendering strategies, and other features.

CRA was deprecated in February 2025 and is no longer recommended for starting new React applications.

**Important:** Deprecated does not mean existing CRA projects immediately stop working. Existing projects can still run, but developers should consider modern alternatives for new projects.

---

# 8. DOM and JavaScript Interaction

## 8.1 What is the `document` object?

The `document` object is a part of the browser's DOM API. It represents the loaded HTML document and provides methods and properties to access and manipulate its content.

It is the main entry point for interacting with the DOM using JavaScript.

### Common Methods

```javascript
document.getElementById("root");

document.querySelector(".container");

document.createElement("h1");

document.querySelector("h1").remove();
```

## 8.2 Difference Between `getElementById()` and `querySelector()`

| getElementById() | querySelector() |
|---|---|
| Selects an element using its ID. | Selects the first element matching a CSS selector. |
| Does not require `#` before the ID. | Uses CSS selector syntax. |
| Returns the matching element or `null`. | Returns the first matching element or `null`. |

### Example

```javascript
const element1 = document.getElementById("root");

const element2 = document.querySelector("#root");

const heading = document.querySelector("h1");

const button = document.querySelector(".btn");
```

## 8.3 Difference Between an HTML Element and a DOM Node

A **DOM node** is a general object in the DOM tree. Different types of nodes represent different parts of a document.

An **HTML element** is a specific type of DOM node that represents an HTML tag.

### Common Node Types

1. Document node.
2. Element node.
3. Text node.
4. Comment node.
5. Attribute node.

Example:

```html
<h1>Hello World</h1>
```

In the DOM:

- `<h1>` is an element node.
- `Hello World` is a text node.

**Key Point:** Every HTML element is a DOM node, but not every DOM node is an HTML element.

## 8.4 What is DOM Traversal?

**DOM traversal** is the process of navigating through the DOM tree to access related nodes or elements.

Developers can move between parent, child, and sibling elements.

### Common Properties

```javascript
element.parentElement;

element.children;

element.firstElementChild;

element.lastElementChild;

element.nextElementSibling;

element.previousElementSibling;
```

### Example

```html
<div id="parent">
    <h1>Heading</h1>
    <p>Paragraph</p>
</div>
```

```javascript
const parent = document.querySelector("#parent");

console.log(parent.children);
console.log(parent.firstElementChild);
console.log(parent.lastElementChild);
```

## 8.5 What are DOM Events?

**DOM events** are actions or occurrences that happen in the browser and can be detected and handled using JavaScript.

Examples:

- `click`
- `submit`
- `change`
- `input`
- `keydown`
- `mouseover`
- `load`

### Example

```javascript
const button = document.querySelector("button");

button.addEventListener("click", () => {
    alert("Button clicked!");
});
```

Here, the event listener executes the callback when the user clicks the button.

## 8.6 What is Event Bubbling and Event Capturing?

Event propagation describes how an event travels through the DOM tree.

There are three phases:

1. Capturing phase.
2. Target phase.
3. Bubbling phase.

### Event Capturing

During capturing, the event travels from the outermost ancestor toward the target element.

### Event Bubbling

During bubbling, the event travels from the target element back through its ancestors.

### Example

```html
<div id="parent">
    <button id="child">Click Me</button>
</div>
```

```javascript
const parent = document.querySelector("#parent");
const child = document.querySelector("#child");

parent.addEventListener("click", () => {
    console.log("Parent clicked");
});

child.addEventListener("click", () => {
    console.log("Child clicked");
});
```

When the button is clicked, the output is:

```text
Child clicked
Parent clicked
```

This happens because bubbling is the default for most event listeners.

To use capturing:

```javascript
parent.addEventListener(
    "click",
    () => console.log("Parent capturing"),
    true
);
```

The third argument `true` enables capturing for that listener.

## 8.7 What is Event Delegation?

**Event delegation** is a technique in which a single event listener is attached to a parent element to handle events originating from its child elements.

It takes advantage of event bubbling.

### Example

```html
<ul id="list">
    <li>Apple</li>
    <li>Banana</li>
    <li>Mango</li>
</ul>
```

```javascript
const list = document.querySelector("#list");

list.addEventListener("click", (event) => {
    if (event.target.matches("li")) {
        console.log(event.target.textContent);
    }
});
```

Instead of adding a separate event listener to every `li`, we attach one listener to the parent `ul`.

### Advantages

1. Reduces the number of event listeners.
2. Improves event handling for large lists.
3. Can handle dynamically added child elements.
4. Makes code easier to maintain.

## 8.8 Difference Between DOM and Virtual DOM

| DOM | Virtual DOM |
|---|---|
| Represents the actual document in the browser. | Common term for an in-memory representation of the UI. |
| Managed by the browser. | Used by React's rendering system. |
| Contains actual DOM nodes. | React elements describe the desired UI; React uses internal representations during rendering. |
| Changes affect the actual document. | React reconciles UI changes and commits necessary updates to the actual DOM. |

### How React Updates the UI

1. A component's props or state change.
2. React renders the component to calculate its next UI description.
3. React reconciles the new result with the previous one.
4. React commits the necessary changes to the actual DOM.

**Important:** The Virtual DOM is not guaranteed to make every update faster than direct DOM manipulation. React's main benefit is its declarative programming model and the way it manages UI updates.

---

# 9. SPA, MPA, Routing, CSR and SSR

## 9.1 What is MPA?

**MPA (Multi-Page Application)** is a web application architecture in which different pages are typically served as separate HTML documents by the server.

When a user navigates to another page, the browser generally sends a new request to the server and loads the returned document.

### Example

A traditional website might have:

```text
/home
/about
/contact
/products
```

Each route can return a separate HTML document.

## 9.2 Difference Between SPA and MPA

**SPA (Single Page Application)** initially loads a single HTML document and dynamically updates its content as the user interacts with the application.

**MPA (Multi-Page Application)** typically loads separate HTML documents when users navigate between pages.

| Feature | SPA | MPA |
|---|---|---|
| Full-page navigation | Usually avoided during client-side navigation. | Commonly happens between pages. |
| Initial loading | May require more JavaScript initially. | Can load page-specific resources. |
| Navigation | Usually handled by client-side routing. | Usually handled by server-side routing. |
| UI updates | JavaScript updates the displayed content. | Server commonly returns a new document. |
| SEO | Requires attention to rendering and metadata. | Can be straightforward with server-rendered HTML. |
| Examples | Many React applications. | Traditional server-rendered websites. |

**Important:** Modern applications can combine SPA-like navigation with server rendering, so the distinction is not absolute.

## 9.3 What is Client-Side Routing?

**Client-side routing** is a routing approach in which JavaScript handles navigation between application views without requesting an entirely new HTML document for each navigation.

React Router is a common library used for client-side routing in React applications.

### Example

```jsx
<Routes>
    <Route path="/" element={<Home />} />
    <Route path="/about" element={<About />} />
    <Route path="/contact" element={<Contact />} />
</Routes>
```

When the user navigates to `/about`, React Router displays the About component without a full-page reload.

## 9.4 What Happens When We Refresh a React SPA?

When a user refreshes a React SPA:

1. The browser sends a request to the server for the current URL.
2. The server must be configured to serve the application's entry HTML file for valid client-side routes.
3. The browser downloads the HTML, JavaScript, and other required assets.
4. React starts and renders the application.
5. The routing library reads the current URL and displays the appropriate component.

### Important: Why Can Refreshing a Nested Route Return 404?

Suppose the user is visiting:

```text
https://example.com/about
```

If the server does not know how to handle `/about`, it may look for a physical file or server route at that path and return 404.

For a typical SPA deployment, the server needs a fallback configuration that serves `index.html` for application routes.

**Key Point:** Client-side routing handles navigation in the browser, but the server must still be configured to handle direct requests and refreshes on those routes.

## 9.5 What are the SEO Challenges in SPA?

SEO stands for **Search Engine Optimization**.

Some common SEO challenges in traditional client-rendered SPAs include:

1. Search engines may initially receive minimal HTML content.
2. Search engine crawlers may need to execute JavaScript to discover page content.
3. Rendering JavaScript can take additional time.
4. Each route needs appropriate page titles and metadata.
5. Social media previews require suitable metadata.

### How can we improve SPA SEO?

- Use Server-Side Rendering (SSR) or Static Site Generation (SSG) where appropriate.
- Provide meaningful page titles and meta descriptions.
- Use semantic HTML.
- Ensure routes are crawlable.
- Generate sitemaps.
- Configure canonical URLs where appropriate.

**Important:** Modern search engines can render JavaScript, so SPAs are not automatically bad for SEO. The actual result depends on rendering, content accessibility, metadata, and crawlability.

## 9.6 Can React Build an MPA?

**Yes.** React can be used to build both SPAs and MPAs.

React is a UI library, not an architecture limited to SPAs.

In an MPA:

- Different pages can have separate HTML entry points.
- Each page can use React to render its UI.
- A page can have its own React root.
- Navigation between pages can involve normal document requests.

Modern React frameworks and build tools can also support multiple entry points and different rendering strategies.

## 9.7 Difference Between CSR and SSR

**CSR (Client-Side Rendering)** is a rendering approach in which the browser executes JavaScript to generate the UI.

**SSR (Server-Side Rendering)** is a rendering approach in which the server generates HTML for a page and sends it to the browser.

| Feature | CSR | SSR |
|---|---|---|
| Full initial HTML rendering | Primarily happens in the browser. | Happens on the server. |
| JavaScript | Important for rendering the application UI. | Used for hydration and subsequent interactivity in typical React SSR applications. |
| Initial content | May initially show a loading state. | Can send rendered HTML with content. |
| Server workload | Usually less HTML rendering work per request. | Server performs rendering work. |
| SEO | Can require extra attention. | Can make page content available in the initial HTML. |
| User experience | Can provide smooth navigation after initial loading. | Can improve initial content display, depending on implementation. |

### CSR Example

```text
Browser requests page
        |
Server sends HTML + JavaScript
        |
Browser downloads JavaScript
        |
JavaScript executes
        |
React renders UI
```

### SSR Example

```text
Browser requests page
        |
Server executes rendering logic
        |
Server generates HTML
        |
Browser receives rendered HTML
        |
JavaScript loads and hydrates the page
```

### What is Hydration?

**Hydration** is the process in which React attaches its event handling and interactive behavior to HTML that was already rendered on the server.

It allows a server-rendered page to become interactive in the browser.

**Important:** SSR does not eliminate the need for JavaScript in a typical interactive React application. Also, CSR and SSR can be combined within the same application.

---

# 10. Quick Revision: Important Differences

| Concepts | Main Difference |
|---|---|
| Angular vs React | Angular is a framework; React is a UI library. |
| Library vs Framework | Developer calls a library; a framework calls developer code. |
| One-way vs Two-way Binding | One-way data flow moves in one direction; two-way binding synchronizes UI and data. |
| Props vs State | Props are passed to a component; state is managed data that can change. |
| useState vs useReducer | Simple state updates vs more structured state transitions. |
| Context API vs Redux | Context shares values through the component tree; Redux provides centralized state management. |
| CRA vs Vite | CRA is deprecated for new projects; Vite is a modern development and build tool. |
| Webpack vs Babel | Webpack bundles modules; Babel transforms JavaScript syntax and JSX. |
| Build Tool vs Bundler | Build tools manage the broader build workflow; bundlers combine modules. |
| DOM vs Virtual DOM | Actual browser document vs React's in-memory UI representation. |
| Bubbling vs Capturing | Event travels from target to ancestors vs ancestors to target. |
| SPA vs MPA | One main HTML document with dynamic views vs multiple HTML documents. |
| CSR vs SSR | UI rendering in browser vs HTML rendering on server. |

---

# 11. Suggested Interview Preparation Order

Study these topics in this order so that each concept builds on the previous one.

1. JavaScript and TypeScript fundamentals.
2. DOM, DOM manipulation, and events.
3. React fundamentals: components, JSX, props, and state.
4. React Hooks: useState, useEffect, useReducer, and useContext.
5. Routing and state management.
6. Angular vs React and library vs framework.
7. Scaffolding, Vite, Webpack, and Babel.
8. SPA, MPA, CSR, SSR, and hydration.
9. Frontend architecture and system design.

**Preparation tip:** Try explaining each concept in your own words before memorizing the interview-ready answer. Interviewers often ask follow-up questions to check whether you understand the concept rather than just its definition.