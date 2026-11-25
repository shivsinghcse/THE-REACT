const title = React.createElement('div', {className: 'title'}, React.createElement('h1', {}, 'Hello World from React!'));

console.log(title);

const root = ReactDOM.createRoot(document.querySelector('#root'));

root.render(title)