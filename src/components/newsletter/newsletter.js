import React, { useState } from 'react'
import addToMailchimp from 'gatsby-plugin-mailchimp'

const Newsletter = () => {

  const [email, setEmail] = useState('')
  const [isSubscribed, setIsSubscribed] = useState(false)

  const submit = async (event) => {
    event.preventDefault()
    addToMailchimp(email)
    setIsSubscribed(true)
  }

  return (
    <div>
      <form onSubmit={submit}>
        {isSubscribed
          ? <p>Erfolgreich abonniert!</p>
          :
          <>
            <input
              type='email'
              onChange={event => setEmail(event.target.value)}
              placeholder='email'
              name='email'
            />
            <input type="submit" />Abbonieren</>
        }
      </form>
    </div>
  )
}

export default Newsletter
