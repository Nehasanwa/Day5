import { useForm } from "react-hook-form"

function Contact() {
  const { register, handleSubmit } = useForm()
  function Output(data){
    alert(`Entered Users Name is ${data.FullName} User email is ${data.Email}`)
  }

  return (
    <div>

    
    <form onSubmit={handleSubmit(Output)}>
     <label>Enter Your Name</label>
     <input {...register('FullName')} type="text" />
     <br />
     <label htmlfor="">Enter Your Email</label>
      <input {...register('Email')} type="email" />
      <br />
      <label htmlfor="">Enter Your Message</label>
      <input {...register('msg')} type="text" />
      <br />
      <input type="submit" />
    </form>
    </div>
  )
}

export default Contact