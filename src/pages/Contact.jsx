import { useState } from "react";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: ""
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

    const handleSubmit = (e) => {
    e.preventDefault();

    console.log("Sending with data:", form);

    emailjs.send(
        "service_voqh4ue",       // ✅ Your actual Service ID
        "template_q0jik7j",      // ✅ Your actual Template ID
        {
        from_name: form.name,
        from_email: form.email,
        message: form.message
        },
        "NNEuU3vzcL-cJNNJ_"       // ✅ Your actual Public Key
    ).then(
        () => {
        alert("Message sent successfully!");
        setForm({ name: "", email: "", message: "" });
        },
        (error) => {
        console.error("EMAIL.JS Error Details:", error);  // ⛳️ This will show the exact reason
        alert("Something went wrong.");
        }
  );
};

  return (
    <section className="p-8 min-h-screen bg-white">
      <div className="max-w-xl mx-auto">
        <h1 className="text-4xl font-bold mb-4 text-center text-blue-800">Contact Us</h1>
        <form onSubmit={handleSubmit} className="space-y-4 bg-gray-100 p-6 rounded shadow">
          <input
            type="text"
            name="name"
            value={form.name}
            onChange={handleChange}
            placeholder="Your Name"
            required
            className="w-full border border-gray-300 p-2 rounded"
          />
          <input
            type="email"
            name="email"
            value={form.email}
            onChange={handleChange}
            placeholder="Your Email"
            required
            className="w-full border border-gray-300 p-2 rounded"
          />
          <textarea
            name="message"
            value={form.message}
            onChange={handleChange}
            placeholder="Your Message"
            rows="5"
            required
            className="w-full border border-gray-300 p-2 rounded"
          ></textarea>
          <button type="submit" className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700 transition">
            Send Message
          </button>
        </form>
      </div>
    </section>
  );


  <BookingForm />
};

export default Contact;
