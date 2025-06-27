import React from 'react';

const FromData = () => {
    
      const handleSubmit (e) =>{
        e.preventDefault();
        
        const name = e.target.name.value;
        const email = e.target.email.value;
        const password = e.target.password.vale;
        console.log(name, email, password)
    

      }

    return (
        <div>
            <form>
             <input type="text" name="name" placeholder="Your Name" required /><br />
             <input type="text" name="email" placeholder="Your email" required /><br />
             <input type="text" name="password" placeholder="password" required /><br />
             
            </form>

        </div>
    );
};

export default FromData;