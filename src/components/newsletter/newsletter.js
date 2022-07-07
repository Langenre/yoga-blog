import React, { useState } from 'react'
import addToMailchimp from 'gatsby-plugin-mailchimp'

const Newsletter = () => {

  const [ email, setEmail ] = useState("");
  const [ isSubscribed, setIsSubscribed ] = useState(false);
  
  const submit = async (email) => {
    e.preventDefault();
    const result = await addToMailchimp(email);
    setIsSubscribed(true);
  }

  return (
    <div>
      <form onSubmit={submit(email)}>
        {isSubscribed ?
          <input
            type="email"
            onChange={event => setEmail(event.target.value)}
            placeholder="email"
            name="email"
          />
          :
          <p>Erfolgreich abonniert!</p>
        }
      </form>
      Abbonieren
    </div>
  )
}

export default Newsletter
