import React from "react";

const FormData = () => {
  const handleSubmit = (e) => {
    e.preventDefault();

    const name = e.target.name.value;
    const email = e.target.email.value;
    const password = e.target.password.value;

    console.log(name, email, password);
  };

  //git add this services


  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input type="text" name="name" placeholder="Your Name" required /><br />
        <input type="email" name="email" placeholder="Your Email" required /><br />
        <input type="password" name="password" placeholder="Password" required /><br />
        <button type="submit">Submit</button>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default FormData;
