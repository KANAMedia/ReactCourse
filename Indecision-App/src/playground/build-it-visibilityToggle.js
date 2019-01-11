console.log('App is running!');

const appRoot = document.getElementById("app");

const state = {
    isclicked: false,
    details: 'Some details!'
}

const btnClick = () => {
    state.isclicked = !state.isclicked
    renderApp()
}

const renderApp = () => { 

    const template = (
    <div>
    <h1>Visibility Toggle</h1>
    <button onClick={btnClick}>
        {state.isclicked ? 'Hide details' : 'Show details'}
    </button>
    {state.isclicked && <p>{state.details}</p>}
    </div>
    );

    ReactDOM.render(template, appRoot);
}

renderApp();