import useScrollReveal from "../hooks/useScrollReveal ";
import MessageForm from "./MessageForm";
import ContactInfo from "./ContactInfo";
import contactData from "./ContactData";
import { useRef } from "react";

const Contact = () => {
  const revealTop = useRef(null);
  const revealForm = useRef(null);
  const revealContact = useRef(null);

  useScrollReveal(revealTop, { origin: "top", delay: 0, duration: 1000 });
  useScrollReveal(revealForm, { origin: "bottom" });
  useScrollReveal(revealContact, { origin: "bottom" });

  return (
    <section id="contact" className="min-h-screen pb-20 w-full bg-[#02aeaf]">
      <div className="pt-12 lg:pt-20">
        <div ref={revealTop}>
          <h2 className="text-5xl font-bold text-white text-center hover:scale-105 duration-200">
            CONTACT
          </h2>
        </div>
        <div className="flex flex-col items-center justify-center mt-12">
          <div className="w-full lg:w-2/3 gap-8 px-8 grid grid-cols-1 lg:grid-cols-[5fr_3fr]">
            <div ref={revealForm}>
              <MessageForm />
            </div>
            <div ref={revealContact} className="mt-8 text-white">
              <h4 className="font-bold mb-6 text-2xl">Contact Information:</h4>
              {contactData.map((item) => (
                <ContactInfo
                  key={item.contact}
                  contact={item.contact}
                  icon={item.icon}
                  href={item.href}
                  info={item.info}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
