import React from 'react'
import { Form, Input, Textarea, Button, InputDiv } from "../../utils/style/contact"
import { useRef } from 'react'
import emailjs from 'emailjs-com'

function FormContact() {
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_ohqoijk', 'template_w9q6vir', form.current, 'dWzWUkYBQ9ERFSUxC')

    e.target.reset();
    alert('message envoyé')

  };
  return (
    <>
      <Form ref={form} onSubmit={sendEmail}>
        <InputDiv>
          <Input id='name' type="text" name='name' placeholder='Nom / Prénom' required />
          <Input id='email' type="email" name='email' placeholder='email' required />
        </InputDiv>
        <Textarea id='textarea' name="message" placeholder='Message ( étirer le champ en bas à droite si besoin )' rows="7" required></Textarea>
        <Button type='submit' className='btn btn-primary'>Envoyer</Button>
      </Form>
    </>
  )
}

export default FormContact