import { useState } from 'react';
import { validateEmail } from '../utils/helpers';

function Contact() {
  // State hooks to keep track of the form input values and error messages
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleBlur = (e) => {
    const { name, value } = e.target;
    if (value.trim() === '') {
      setErrorMessage(`${name} field is required`);
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    // Clear error message when user starts typing again
    setErrorMessage('');

    switch (name) {
      case 'name':
        setName(value);
        break;
      case 'email':
        setEmail(value);
        if (!validateEmail(value) && value.trim() !== '') {
          setErrorMessage("Email is invalid");
        }
        break;
      case 'message':
        setMessage(value);
        break;
      default:
        break;
    }
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();

    // Validate the entire form here
    if (!name || !email || !message) {
      setErrorMessage('All fields are required');
      return;
    }

    if (!validateEmail(email)) {
      setErrorMessage('Email is invalid');
      return;
    }

    // Assuming validation passed, you can proceed here
    setName('');
    setEmail('');
    setMessage('');
    setErrorMessage('');
    // Display a success message or handle form submission as needed
  };

  return (
    <div className="container text-center">
      <h1>Contact Me</h1>
      <form className="form" onSubmit={handleFormSubmit}>
        <input
          value={name}
          name="name"
          onChange={handleInputChange}
          onBlur={handleBlur}
          type="text" placeholder="Name"
        />

        <input
          value={email}
          name="email"
          onChange={handleInputChange}
          onBlur={handleBlur}
          type="email" placeholder="Email"
        />

        <input
          value={message}
          name="message"
          onChange={handleInputChange}
          onBlur={handleBlur}
          type="text"
          placeholder="Message"
        />

        <button type="submit">Submit</button>
      </form>
      {errorMessage && <p className="error-text">{errorMessage}</p>}
    </div>
  );
}

export default Contact;
