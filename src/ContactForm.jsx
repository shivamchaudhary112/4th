
import { useState } from "react";

export default function ContactForm() {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Thank you for your feedback! We'll get back to you soon.");
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-xl mx-auto p-6 bg-white rounded shadow mt-8">
      <h2 className="text-2xl font-bold mb-4">Customer Feedback</h2>
      <input
        type="text"
        placeholder="Your Name"
        className="w-full mb-3 p-2 border rounded"
        value={formData.name}
        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
        required
      />
      <input
        type="email"
        placeholder="Your Email"
        className="w-full mb-3 p-2 border rounded"
        value={formData.email}
        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
        required
      />
      <textarea
        placeholder="Your Message"
        className="w-full mb-3 p-2 border rounded"
        rows="4"
        value={formData.message}
        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
        required
      ></textarea>
      <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">Send</button>
    </form>
  );
}
