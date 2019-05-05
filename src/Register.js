import React, { useState } from 'react';

const initialState = {
  username: '',
  email: '',
  password: '',
};

function Register() {
  const [form, setForm] = useState(initialState);
  const [user, setUser] = useState(null);

  const handleChange = event => {
    const name = event.target.name;
    const value = event.target.value;

    setForm(prevState => {
      return {
        ...prevState,
        ...{ [name]: value },
      };
    });
  };

  const handleSubmit = event => {
    event.preventDefault();
    setUser(form);
    setForm(initialState);
  };

  return (
    <div style={{ textAlign: 'center' }}>
      <h1>Register form</h1>

      <form
        style={{
          display: 'grid',
          alignItems: 'center',
          justifyItems: 'center',
        }}
        onSubmit={handleSubmit}
      >
        <input
          type="text"
          placeholder="Username"
          name="username"
          onChange={handleChange}
          value={form.username}
        />
        <input
          type="email"
          placeholder="Email address"
          name="email"
          onChange={handleChange}
          value={form.email}
        />
        <input
          type="password"
          placeholder="Password"
          name="password"
          onChange={handleChange}
          value={form.password}
        />
        <button type="submit">Submit</button>
      </form>

      {user && JSON.stringify(user, null, 2)}
    </div>
  );
}

export default Register;
