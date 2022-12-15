import React from 'react'
import { Form, Input, Textarea, Button, InputDiv, CardContact, ContentContactCard } from "../../utils/style/contact"
import { useRef } from 'react'
import emailjs from 'emailjs-com'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { MainTitle } from "../../utils/style/bio"
import "../../index.css"
import { Important } from "../../utils/style/prestation"
import { PostScriptum } from "../../utils/style/Cours"


function FormContact() {
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_ohqoijk', 'template_w9q6vir', form.current, 'dWzWUkYBQ9ERFSUxC')

    e.target.reset();
    toast.success('Message envoyé !', {
      className: "toast-message"
    })

  };


  return (
    <>
      <MainTitle>Contact</MainTitle>
      <ToastContainer />
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