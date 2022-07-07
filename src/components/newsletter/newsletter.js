import React, { useState } from 'react'
import addToMailchimp from 'gatsby-plugin-mailchimp'

const Newsletter = () => {

  const [ email, setEmail ] = useState("");
  const [ isSubscribed, setIsSubscribed ] = useState(false);
  
  const submit = async (event) => {
    event.preventDefault();
    addToMailchimp(email);
    setIsSubscribed(true);
  }

  return (
    <div>
      <form onSubmit={submit}>
        {isSubscribed ?
          <>
            <input
              type="email"
              onChange={event => setEmail(event.target.value)}
              placeholder="email"
              name="email"
            />
            <button>Abbonieren</button>
          </>
          :
          <p>Erfolgreich abonniert!</p>
        }
      </form>
      Abbonieren
    </div>
  )
}

export default Newsletter
