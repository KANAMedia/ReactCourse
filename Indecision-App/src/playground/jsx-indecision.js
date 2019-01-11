// babel src/app.js --out-file=public/scripts/app.js --presets=env,react --watch

console.log("App.js is running!");

const app = {
  title: "Indecision App",
  subtitle: "This is the subtitle",
  options: []
};

const onFormSubmit = e => {
  e.preventDefault();

  const option = e.target.elements.option.value;

  if (option) {
    app.options.push(option);
    e.target.elements.option.value = "";
    renderApp();
  }
};

const clear = () => {
  app.options = [];
  renderApp();
};

const onMakeDecision = () => {
  const randomNum = Math.floor(Math.random() * app.options.length);
  const option = app.options[randomNum];
  alert(option);
};

const appRoot = document.getElementById("app");

const renderApp = () => {
  // JSX - JavaScript XML
  const template = (
    <div>
      {app.title && <h1> {app.title} </h1>}
      {app.subtitle && <h2> {app.subtitle} </h2>}
      <p>{app.options.length > 0 ? "Here are your options" : "No options"}</p>
      <button disabled={app.options.length === 0} onClick={onMakeDecision}>What sould I do?</button>
      <p>{app.options.length}</p>
      <ol>
        {
          app.options.map(option => {
            return <li key={option}>{option}</li>;
          })
        }
      </ol>
      <form onSubmit={onFormSubmit}>
        <input type="text" name="option" />
        <button>Add Option</button>
      </form>
      <button onClick={clear}> Remove All </button>
    </div>
  );

  ReactDOM.render(template, appRoot);
};

renderApp();
