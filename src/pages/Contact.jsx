import { useState } from 'react';
import { validateEmail } from '../../utils/helpers';

function Contact() {
  // State hooks to keep track of the form input values and error messages
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  // Handles the changes to the input fields and validating input values
  const handleInputChange = (e) => {
    const { name, value } = e.target;

    // Clear error message when user starts typing again
    setErrorMessage('');

    switch (name) {
      case 'name':
        setName(value);
        if (value.trim() === '') {
          setErrorMessage("Name field is required");
        }
        break;
      case 'email':
        setEmail(value);
        if (value.trim() === '') {
          setErrorMessage("Email field is required");
        } else if (!validateEmail(value)) {
          setErrorMessage("Email is invalid");
        }
        break;
      case 'message':
        setMessage(value);
        if (value.trim() === '') {
          setErrorMessage("Message field is required");
        }
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
        //The value of this input field will be the 'name' variable state. When the user types, React will re-render the component, and update the input filed with the value of 'name'
          value={name}
          //name attribue will identify the submitted data
          name="name"
          onChange={handleInputChange}
          type="text" placeholder="Name"
        />

        <input
          value={email}
          name="email"
          onChange={handleInputChange}
          type="email" placeholder="Email"
        />

        <input
          value={message}
          name="message"
          onChange={handleInputChange}
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
