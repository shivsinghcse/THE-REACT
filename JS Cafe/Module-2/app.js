const title = React.createElement('h1', {className: 'title'}, 'Hello World from React!');

console.log(title);

const root = ReactDOM.createRoot(document.querySelector('#root'));

root.render(title)