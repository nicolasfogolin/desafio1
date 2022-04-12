import './App.css';

function App() {

  function onClick(){
    alert('Hola Mundo React!')
  }

  return (
    <div className="App">
      <form action="/my-handling-form-page" method="post">
        <ul>
          <li>
            <label htmlFor="name">Name:</label>
            <input type="text" id="name" name="user_name" />
          </li>
          <li>
            <label htmlFor="mail">E-mail:</label>
            <input type="email" id="mail" name="user_mail" />
          </li>
          <li>
            <label htmlFor="msg">Message:</label>
            <textarea id="msg" name="user_message"></textarea>
          </li>
          <li className="button">
            <button type="button" onClick={onClick}>Send your message</button>
          </li>
        </ul>
      </form>
    </div>
  );
}

export default App;
