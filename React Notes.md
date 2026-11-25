# React Fundamentals

## What is React?
React is an `open-source JavaScript library` developed by `Meta` for building `User Interfaces(UIs)`. It follows a `component-based architecture`, allowing developers to `build reusable UI components` and create interactive applications using a `declarative approach`.

## What is a JavaScript library?
- A JavaScript library is a collection of pre-written, reusable code that developers can use to perform specific tasks without writing everything from scratch.

- **Example:** `React` helps developers build user interfaces using reusable components.

## Why is React called a library and not a framework?
- React is called a library because its primary responsibility is building user interfaces.

- It does not prescribe a complete application structure or provide every feature required to build an entire application. Developers can choose additional libraries for routing, state management, API calls, etc.

- **Example:**
    - React Router – Routing
    - Redux – State management
    - Axios – HTTP requests

## What is component?
`do it`

## What are reusable components?
- Reusable components are components that can be used multiple times in different parts of an application without rewriting the same code.

```js
function Button({ text }) {
  return <button>{text}</button>;
}

function App() {
  return (
    <>
      <Button text="Login" />
      <Button text="Register" />
      <Button text="Submit" />
    </>
  );
}
```
- Here, the same Button component is reused with different props.

## What is component-based architecture?
- Component-based architecture is a software design approach in which an application is divided into small, independent, reusable pieces called components.

- Each component handles a specific part of the UI.
- **Example**
    In an e-commerce application:
    - Header
    - Navbar
    - ProductCard
    - Cart
    - Footer

    These components can be developed and maintained independently.


## What is declarative programming?
- Declarative programming is a programming approach in which we describe *`what we want to achieve`* rather than specifying every step of *`how to achieve it`*.

- In React, we describe how the UI should look based on the current state, and React handles updating the UI.


```js
function App() {
  const [count, setCount] = React.useState(0);

  return <h1>{count}</h1>;
}
```

- When the state changes, React updates the UI accordingly.

## What is imperative programming?
- Imperative programming is a programming approach in which we `explicitly specify the steps required to achieve a particular result`.
- **Example (JavaScript):**

```js
const heading = document.createElement("h1");

heading.textContent = "Hello World";

document.body.appendChild(heading);
```
- Here, we explicitly tell JavaScript how to create and add an element to the DOM.


## Difference Between Declarative and Imperative Programming

| Declarative Programming | Imperative Programming |
|---|---
| Describes **`what`** to achieve. | Describes **`how`** to achieve it. |
| Focuses on the desired result. | Focuses on execution steps. |
| React commonly follows this approach. | Vanilla JavaScript DOM manipulation commonly follows this approach. |
| UI updates are expressed through state changes. | DOM updates are manually specified. |

#### Key Difference
- **Declarative:** We define the expected output, and the system handles the implementation details.
- **Imperative:** We explicitly define the steps required to achieve the expected output.

## What is the difference between React and JavaScript?
- JavaScript is a programming language, whereas React is a JavaScript library used to build user interfaces.

- JavaScript provides the language features, while React provides tools and abstractions for building component-based UIs.

## What is Angular?
- Angular is a `TypeScript-based, open-source web application framework` maintained by `Google`. It is used to build `scalable, dynamic web applications` using a `component-based architecture`.

## What is framework?
- `do it`


### Why is Angular called a framework, whereas React is called a library?
Angular is called a **`framework`** because it provides a complete, structured solution for building web applications, whereas React is called a **`library`** because its primary focus is building user interfaces (UIs).

#### **1. Angular – Framework**

Angular provides many built-in features required to develop web applications, such as:

- Routing
- Dependency Injection (DI)
- Forms handling
- HTTP client
- State management capabilities
- Component architecture

It provides an opinionated structure for developing applications.

#### **2. React – Library**

React primarily focuses on building user interfaces using reusable components.

For additional functionality, developers can choose third-party libraries or tools.

For example:

- React Router – Routing
- Redux – State management
- Axios – HTTP requests
- React Hook Form – Form handling

#### **3. Difference between Angular and React**

| Angular                                | React                               |
| -------------------------------------- | ----------------------------------- |
| A web application framework            | A JavaScript UI library             |
| Maintained by Google                   | Maintained by Meta                  |
| Provides an integrated set of features | Focuses primarily on UI development |
| More opinionated structure             | More flexibility in choosing tools  |
| TypeScript-based                       | Supports JavaScript and TypeScript  |

#### **4. `Interview-ready answer`**

Recommended answer:

`Angular is called a framework because it provides an integrated set of tools and features, such as routing, dependency injection, forms, and HTTP handling, along with a predefined application structure.`

`React is called a library because it primarily focuses on building user interfaces. Developers can choose additional libraries and tools according to their application requirements.`


## Difference Between Library and Framework

**Library:**
A library provides specific functionalities that developers can use to achieve their goals. Developers decide when and how to call the library's functions.

**Framework:**
A framework provides a predefined structure, tools, and guidelines for application development. Developers follow its conventions, and the framework controls the overall application flow through Inversion of Control (IoC).

## Difference Between Library and Framework

A **Library** is a collection of pre-written, reusable code that developers can use to perform specific tasks.

A **Framework** provides a predefined structure, tools, and guidelines for developing applications.

| Library | Framework |
|---|---|
| Provides specific functionalities. | Provides a complete structure for application development. |
| Developers have more control over the application flow. | Framework controls much of the application flow. |
| Developers decide when and where to use the library. | Framework defines how and where application code fits into its structure. |
| More flexible in choosing additional tools. | Usually provides an integrated set of tools and conventions. |
| Example: React | Example: Angular |

### Key Difference: `Inversion of Control (IoC)`

- **Library:** The developer calls the library's functions when needed.
- **Framework:** The framework calls the developer's code at predefined points in the application lifecycle.

### Examples

**Libraries:**
- React – Building user interfaces.
- Lodash – Utility functions.
- Axios – Making HTTP requests.

**Frameworks:**
- Angular – Building web applications.
- Django – Building web applications using Python.
- Spring Boot – Building Java applications.

### `Interview Answer`

`A library provides reusable functionality that developers can call whenever needed, giving them more control over the application flow.`

`A framework provides a predefined structure and controls the overall application flow, allowing developers to write code according to its rules and conventions.`

The key difference is **Inversion of Control (IoC)**: with a library, we call the library; with a framework, the framework calls our code.


## What is CRA?

- CRA stands for **Create React App**.
- It is a `command-line tool (CLI)` used to create the initial structure (`scaffolding`) of a React project.
- It provides a `preconfigured development environment with tools` such as `Webpack`, `Babel`, and `ESLint`.
- It provides scripts for starting the development server, running tests, and creating production builds.
- **CRA is deprecated** in Feb 2025 and is maintained in long-term maintenance mode. It is not recommended for starting new production applications.

### Command

```bash
npx create-react-app my-app
```

### Alternative: Vite

Vite is a modern build tool commonly used to set up React projects.

```bash
npm create vite@latest my-app -- --template react
```
**Official references:**
- [Sunsetting Create React App – React Blog](https://react.dev/blog/2025/02/14/sunsetting-create-react-app?trk=public_post_comment-text&utm_source=chatgpt.com)
- [Build a React App from Scratch – React Docs](https://react.dev/learn/build-a-react-app-from-scratch?utm_source=chatgpt.com)


## **What is SPA?**

**SPA stands for Single Page Application.**

A Single Page Application (SPA) is a web application that loads a single HTML page initially and dynamically updates its content as users interact with the application, without reloading the entire page.

### **1. How does SPA work?**

1. The browser initially loads a single HTML page.
2. JavaScript loads and renders the UI.
3. When the user navigates to another section, the application dynamically updates the content.
4. It communicates with the backend through APIs whenever data is required.
5. The entire page does not need to reload for every navigation.

### **2. Examples of SPA**

![Gmail : la nouvelle interface Material You devient obligatoire dès le 3 février](https://images.openai.com/static-rsc-4/ZYYVoJLATwrTUsZjJbc4GCpTpk0x-t2ouBHyGbXPy4NJ0PByK7-Swmo6nXwdBIVSuCkZzR-UTv9Z3-7iKBD2roEp0sskCICEQ7dHuIegHN5DnORU13f9gKg6rx97cIC0DlkTBE0TvsNwaayFNpAcxKJTnypG_1zX9aZI5YgWA4A?purpose=inline)

**Gmail**

![How to Toggle Trello Views: Calendar, Table, Timeline & More](https://images.openai.com/static-rsc-4/pgl9LoweeNBAXG9ERyT8XerBgmfMxl0o2qqg6ZgrYlKNglXXkWz_ditacYWYcjD8EbhuiRTT80N_sZ1HoPRZqHWoX66yVsF9SeFqXNWddhnSNe1EybjEY70QtDcSDCDcZ_ZpU_gqChEA9xfD-MBGjUWnh-Ve4eB_4jNvFjyRBcE?purpose=inline)

**Trello**

![Prova Facebooks nya utseende | pctidningen.se](https://images.openai.com/static-rsc-4/2LE0_nF49MfR930ybD1zP-9YHsohzsO8YNXwBZGo5-3s46FeaeE9UPGqY7tdtyC8FdN62hwcXU4PMaXnORc6BnULt7CBJo6mFcZzORbjRQb76vSFlNGP5uRFvIPoe8skdV850DRxMiXyEtMXyHLTg1nefJYGvx2_m3n6_azum2Y?purpose=inline)

**Facebook**

![Top 5 Travel Apps Every Indian Should Download](https://images.openai.com/static-rsc-4/lQ3kLLgyEpQAOQGdvG8HT3ufdODou1nBimIjbabrsU0zmFeGVeB9JrauILycDkau1jw_hgBTiPADRyn-Z8GBia7z1o9c7z5bkHk-NT1orESUSwiWf76S9q5aJR_ec4UIevipiLMwjU69ylrPalbGkxTwXSxqG3g3QJ6b3HY-FW0?purpose=inline)

**Google Maps**


### **3. SPA vs MPA**

| SPA                                               | MPA                                                 |
| ------------------------------------------------- | --------------------------------------------------- |
| Single Page Application                           | Multi Page Application                              |
| Initially loads a single HTML page.               | Navigation generally loads separate HTML documents. |
| Updates content dynamically.                      | Typically requests a new page from the server.      |
| Usually uses client-side routing.                 | Usually uses server-side routing.                   |
| Navigation can feel faster after initial loading. | Navigation may involve full-page reloads.           |
| Example: Gmail                                    | Example: Traditional news websites                  |

### **4. How does React help build SPAs?**

React helps build SPAs using reusable components and state management.

For navigation, developers commonly use React Router.

Example:

```js
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </BrowserRouter>
  );
}
```

Here, React Router handles navigation between different views without requiring a full-page reload.

### **5. Advantages and disadvantages**

**Advantages:**

- Smooth navigation.
- Better user experience after initial loading.
- Reduced full-page reloads.
- Efficient client-side interactions.

**Disadvantages:**

- Initial JavaScript loading can be heavy.
- SEO can require additional consideration.
- Client-side rendering can increase browser workload.
- Requires handling routing and browser history.

### **6. `Interview-ready answer`**

Recommended answer

A Single Page Application (SPA) is a web application that initially loads a single HTML page and dynamically updates its content as users interact with it, without reloading the entire page. React is commonly used to build SPAs, with libraries like React Router handling client-side navigation.


## Display "Hello World" using HTML?
```html
<!DOCTYPE html> <!-- Declares the document as HTML5. -->
<html lang="en"> <!-- Root element; specifies English as the language. -->
<head> <!-- Contains document metadata. -->
    <meta charset="UTF-8"> <!-- Defines character encoding. -->
    <meta name="viewport" content="width=device-width, initial-scale=1.0"> <!-- Makes the page responsive to device width. -->
    <title>Document</title> <!-- Sets the browser tab title. -->
</head>
<body>
    <div id="root">Hello World!</div>
</body>
</html>
```
## Why do we use `<div id="root"></div>` in a React application?



## Display "Hello World" using JavaScript?
```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <div id="root"></div>
    <script>
        // Selects the root element.
        const root = document.querySelector('#root');
        // Creates a new heading element.
        const heading = document.createElement('h1');
        // Sets the text inside the heading.
        heading.textContent = "Hello World using JavaScript.";
        // Adds the heading to the root element.
        root.appendChild(heading);

    </script>
</body>
</html>
```



### **3. Important concepts used**

1. `querySelector()` – Selecting HTML elements.
2. `createElement()` – Creating HTML elements dynamically.
3. `textContent` – Adding or changing text.
4. `appendChild()` – Inserting elements into the DOM.


