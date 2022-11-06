import './App.css';
import React from 'react';
import useInput from './components/form/useInput'

function App() {
  const [usernameProps, resetUsername] = useInput("");
  const [passwordProps, resetPassword] = useInput("")

  const submit = (e) => {
    e.preventDefault();
    alert(`${usernameProps.value}, ${passwordProps.value}`)
    resetUsername();
    resetPassword();
  }
  return (
    <div className="App">
      <h1>Hello Cats</h1>
      <form onSubmit={submit}>
        <input
          {...usernameProps}
          type="text"
          placeholder="User Name"
        />
        <input
          {...passwordProps}
          type="text"
          placeholder="Password"
        />
        <button>Log In</button>
      </form>
    </div>
  );
}

export default App;
