import React from 'react'

const ContactForm = () => {
  return (
    <div>
        <form>
            <input type="text" placeholder='Enter Name' />
            <br />
            <input type="email" placeholder='Enter Email' />
            <br />
            <textarea placeholder='Message'></textarea>
            <br />
            <button type='submit'>Submit</button>
        </form>
    </div>
  )
}

export default ContactForm