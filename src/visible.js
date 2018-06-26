let visibility = true;

const toogleVisibility = () => {
  visibility = !visibility;
  render();
};

const render = () => {
  const jsx = (
    <div>
      <h1>Visibility Toggle</h1>
      <button onClick={toogleVisibility}>{visibility? "hide details" : "show details"}</button>
      {visibility && 
        <div>
          <p>Hey. There are some details you can see now!</p>
        </div>
      }
    </div>
  );
  React.render(jsx, document.getElementById('app'));
}

render();