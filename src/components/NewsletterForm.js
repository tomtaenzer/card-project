import React from "react";


export default function NewsletterForm(){

    const [email, setEmail] = React.useState('')

    function handleChange(event) {

        const value = event.target.value;
        setEmail(value);

    }

    function handleSubmit(event) {

       event.preventDefault();
       console.log("The Newsletter will be sent to " + email);


    }


    return(
      <form onSubmit={handleSubmit}>
            <input value={email}
                   placeholder="email"
                   onChange={handleChange}
                   type="text"
            />
            <button type="submit">submit</button>
        </form>

    )
}