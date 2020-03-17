import styled from 'styled-components'
import { useForm } from 'react-hook-form'
import formSerialize from 'form-serialize'
import React, { useState, useRef } from 'react'

const ContactForm = styled.form`
  max-width: 700px;
  margin: 0 auto;
  padding-bottom: 150px;

  #contact-msg {
    min-height: 150px;
  }

  input[type='submit'] {
    margin-top: 1rem;
    width: 80%;
    height: 3em;
    border-radius: 10px;
    cursor: pointer;

    background-color: ${props => props.theme.main.bg};
    color: ${props => props.theme.main.fg};

    :hover {
      // invert
      background-color: ${props => props.theme.main.fg};
      color: ${props => props.theme.main.bg};
    }
  }

  .error {
    color: red;
  }

  /* Shamelessly ripped from https://www.w3schools.com/howto/howto_css_responsive_form.asp */

  input:not([type='submit']),
  select,
  textarea {
    width: 100%;
    padding: 12px;
    border: 1px solid #ccc;
    border-radius: 4px;
    box-sizing: border-box;
    resize: vertical;
  }

  /* Style the label to display next to the inputs */
  label {
    padding: 12px 12px 12px 0;
    display: inline-block;
  }

  /* Style the submit button */
  input[type='submit'] {
    padding: 12px 20px;
    border: none;
    border-radius: 4px;
    cursor: pointer;
    float: right;
  }

  /* Style the container */
  .container {
    border-radius: 5px;
    background-color: #f2f2f2;
    padding: 20px;
  }

  /* Floating column for labels: 25% width */
  .col-25 {
    float: left;
    width: 25%;
    margin-top: 6px;
  }

  /* Floating column for inputs: 75% width */
  .col-75 {
    float: left;
    width: 75%;
    margin-top: 6px;
  }

  .row {
    text-align: left;
    :after {
      content: '';
      display: table;
      clear: both;
    }
  }

  /* Responsive layout - when the screen is less than 600px wide, make the two columns stack on top of each other instead of next to each other */
  @media screen and (max-width: 600px) {
    .col-25,
    .col-75,
    input[type='submit'] {
      width: 100%;
      margin-top: 0;
    }
  }
`

export default () => {
  const [formSent, setFormSent] = useState(false)
  const formRef = useRef()
  const { register, handleSubmit, errors } = useForm()

  return (
    <ContactForm
      ref={formRef}
      name="contact"
      method="POST"
      data-netlify="true"
      onSubmit={handleSubmit(() => {
        if (Object.entries(errors).length === 0) {
          const form = formRef.current
          const formData = formSerialize(form)
          const netlifyFormEndpoint = form.getAttribute('action')
          if (netlifyFormEndpoint) {
            fetch(netlifyFormEndpoint, {
              method: 'POST',
              body: formData
            }).then(() => setFormSent(true))
          } else {
            console.log('sending formdata to netlify:', formData)
          }
        }
      })}
    >
      <h1>Contact Us</h1>
      {formSent ? (
        <p>
          Thanks for your message!
          <br />
          We will be in contact with you as soon as possible 😃
        </p>
      ) : (
        <div>
          <div className="row">
            <div className="col-25">
              <label htmlFor="contact-name">Name:</label>
            </div>
            <div className="col-75">
              <input
                type="text"
                name="name"
                id="contact-name"
                ref={register({ required: true, pattern: /^[a-zA-Z ]+$/ })}
              />
            </div>
          </div>
          {errors.name ? (
            <div className="row error">Must be a valid name</div>
          ) : null}
          <div className="row">
            <div className="col-25">
              <label htmlFor="contact-email">Email:</label>
            </div>
            <div className="col-75">
              <input
                type="email"
                name="email"
                id="contact-email"
                ref={register({
                  required: true,
                  pattern: /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/i
                })}
              />
            </div>
          </div>
          {errors.email ? (
            <div className="row error">Must be a valid email</div>
          ) : null}
          <div className="row">
            <div className="col-25">
              <label htmlFor="contact-msg">Message:</label>
            </div>
            <div className="col-75">
              <textarea
                name="message"
                id="contact-msg"
                ref={register({ required: true })}
              ></textarea>
            </div>
          </div>
          {errors.message ? (
            <div className="row error">Message is a required field</div>
          ) : null}
          <input type="submit" value="Send" />
        </div>
      )}
    </ContactForm>
  )
}
