var App = React.createClass({
  render: function () {
    return (
      <div className='main'>
        Hello World! I render in JSX
      </div>
    );
  }
});

ReactDOM.render(
  <App />,
  document.getElementById('content')
);
