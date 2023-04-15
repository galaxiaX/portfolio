import { FormEvent, useRef, useState } from "react";
import { toast } from "react-hot-toast";
import emailjs from "@emailjs/browser";

const MessageForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const form = useRef<HTMLFormElement>(null);

  const serviceId = import.meta.env.VITE_SERVICE_ID;
  const templateId = import.meta.env.VITE_SERVICE_ID;
  const publicId = import.meta.env.VITE_SERVICE_ID;

  const labelClassName = "block text-white font-bold mb-2";
  const inputClassName =
    "shadow border rounded w-full py-2 px-3 focus:outline-none";

  const sendEmail = async (ev: FormEvent<HTMLFormElement>) => {
    ev.preventDefault();

    try {
      if (form.current) {
        const result = await emailjs.sendForm(
          serviceId,
          templateId,
          form.current,
          publicId
        );

        console.log(result.text);
        setName("");
        setEmail("");
        setMessage("");
        toast.success("Message sent");
      }
    } catch (error: any) {
      console.log(error.text);
      toast.error("Message not sent");
    }
  };

  return (
    <form ref={form} onSubmit={sendEmail}>
      <div className="mb-4">
        <label htmlFor="name" className={labelClassName}>
          Name:
        </label>
        <input
          type="text"
          id="name"
          name="name"
          value={name}
          onChange={(ev) => setName(ev.target.value)}
          required
          className={inputClassName}
          placeholder="Your Name"
        />
      </div>
      <div className="mb-4">
        <label htmlFor="email" className={labelClassName}>
          Email:
        </label>
        <input
          type="email"
          id="email"
          name="email"
          value={email}
          onChange={(ev) => setEmail(ev.target.value)}
          required
          className={inputClassName}
          placeholder="Your Email Address"
        />
      </div>
      <div className="mb-4">
        <label htmlFor="message" className={labelClassName}>
          Message:
        </label>
        <textarea
          id="message"
          name="message"
          value={message}
          onChange={(ev) => setMessage(ev.target.value)}
          rows={5}
          required
          className={inputClassName}
          placeholder="Your Message"
        />
      </div>
      <button
        type="submit"
        className="slide border-4 border-white duration-300 text-white hover:text-[#02aeaf] font-bold py-2 px-4"
      >
        Send Message
      </button>
    </form>
  );
};

export default MessageForm;
