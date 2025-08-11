"use client"
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectGroup, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { motion, AnimatePresence } from "framer-motion";
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";
import emailjs from 'emailjs-com';

const info = [
  {
    icon: <FaPhoneAlt />,
    title: "Phone",
    description: "+963 935 280 318",
  },
  {
    icon: <FaEnvelope />,
    title: "Email",
    description: "saeedhoms289@gmail.com",
  },
  {
    icon: <FaMapMarkerAlt />,
    title: "Address",
    description: "Syria , Homs",
  },
];

export default function Contact() {
  const [formData, setFormData] = useState({
    firstname: '',
    lastname: '',
    email: '',
    phone: '',
    workType: '',
    message: ''
  });
  const [formSubmitted, setFormSubmitted] = useState(false); // New state variable

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const templateParams = {
      firstname: formData.firstname,
      lastname: formData.lastname,
      email: formData.email,
      phone: formData.phone,
      workType: formData.workType,
      message: formData.message,
    };

    emailjs.send('service_p1nrlga', 'template_f2iinu3', templateParams, '2RNOgf4YD_fM7dQQi')
      .then((response) => {
        console.log('SUCCESS!', response.status, response.text);
        setFormSubmitted(true); // Update state on success
      }, (err) => {
        console.error('FAILED...', err);
      });
  };

  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { delay: 2.4, duration: 0.4, ease: "easeIn" } }}
      className="py-6"
    >
      <div className="container">
        <div className="flex flex-col xl:flex-row gap-[30px]">
          <div className="xl:w-[54%] order-2 xl:order-none ">
            <AnimatePresence>
              {!formSubmitted ? (
                <motion.form
                  onSubmit={handleSubmit}
                  className="flex flex-col gap-6 p-10 bg-[#27272c] rounded-xl"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.5 }}
                >
                  <h3 className="text-accent text-4xl">Let's work together</h3>
                  <p className="text-white/60">Feel free to reach out to me for any collaboration opportunities or inquiries.</p>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 ">
                    <Input type="text" name="firstname" placeholder="Firstname" onChange={handleChange} />
                    <Input type="text" name="lastname" placeholder="Lastname" onChange={handleChange} />
                    <Input type="email" name="email" placeholder="Email Address" onChange={handleChange} />
                    <Input type="text" name="phone" placeholder="Phone Number" onChange={handleChange} />
                  </div>
                  <Select onValueChange={(value) => setFormData({ ...formData, workType: value })}>
                    <SelectTrigger className="w-full">
                      <SelectValue placeholder="Select Work Type" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectGroup>
                        <SelectItem value="Remote">Remote</SelectItem>
                        <SelectItem value="On Site">On Site</SelectItem>
                      </SelectGroup>
                    </SelectContent>
                  </Select>
                  <Textarea name="message" className="h-[200px]" placeholder="Type your message here." onChange={handleChange} />
                  <Button type="submit" size="md" className="max-w-40 py-3">Send message</Button>
                </motion.form>
              ) : (
                <motion.div
                  className="p-10 bg-[#27272c] rounded-xl text-white"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.5 }}
                >
                  <h3 className="text-accent text-4xl">Thank you!</h3>
                  <p>Your message has been sent successfully. I will get back to you as soon as possible.</p>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
          <div className="flex-1 flex items-center xl:justify-end order-1 xl:order-none mb-8 xl:mb-0">
            <ul className="flex flex-col gap-10">
              {info.map((item, index) => {
                return (
                  <li key={index} className="flex items-center gap-6 flex-wrap">
                    <div className="w-[52px] h-[52px] xl:w-[72px] xl:h-[72px] bg-[#27272c] text-accent rounded-md flex items-center justify-center">
                      <div className="text-[28px]">{item.icon}</div>
                    </div>
                    <div className="flex-1">
                      <p className="text-white/60">{item.title}</p>
                      <h3 className="text-xl">{item.description}</h3>
                    </div>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </div>
    </motion.section>
  );
}
