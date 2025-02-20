import { useState } from 'react';
import toast, { Toaster } from 'react-hot-toast';

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      const result = await response.json();
      setLoading(false);

      if (response.ok) {
        toast.success('Message sent successfully!');
        setFormData({ name: '', email: '', message: '' }); // Reset form
      } else {
        toast.error(result.error || 'Failed to send message.');
      }
    } catch (error) {
      setLoading(false);
      toast.error('Something went wrong. Please try again.');
    }
  };

  return (
    <section id="contact" className="mb-20">
      <Toaster position="bottom-right" reverseOrder={false} />

      <h2 className="text-white text-3xl font-medium mb-6">Contact</h2>
      <div className="max-w-xl">
        <p className="text-gray-300 mb-6">
          Feel free to reach out if you have a project in mind or just want to
          connect.
        </p>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label htmlFor="name" className="block text-white mb-2">
              Name
            </label>
            <input
              type="text"
              id="name"
              value={formData.name}
              onChange={handleChange}
              className="w-full bg-neutral-900 border border-neutral-700 rounded-md px-4 py-2 text-white focus:outline-none focus:ring-1 focus:ring-indigo-500"
              required
            />
          </div>
          <div>
            <label htmlFor="email" className="block text-white mb-2">
              Email
            </label>
            <input
              type="email"
              id="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full bg-neutral-900 border border-neutral-700 rounded-md px-4 py-2 text-white focus:outline-none focus:ring-1 focus:ring-indigo-500"
              required
            />
          </div>
          <div>
            <label htmlFor="message" className="block text-white mb-2">
              Message
            </label>
            <textarea
              id="message"
              rows="4"
              value={formData.message}
              onChange={handleChange}
              className="w-full bg-neutral-900 border border-neutral-700 rounded-md px-4 py-2 text-white focus:outline-none focus:ring-1 focus:ring-indigo-500 min-h-32"
              required
            ></textarea>
          </div>
          <button
            type="submit"
            className="bg-indigo-600 text-white px-6 py-3 rounded-md font-medium hover:bg-indigo-700 transition"
            disabled={loading}
          >
            {loading ? 'Sending...' : 'Send Message'}
          </button>
        </form>
      </div>
    </section>
  );
};

export default ContactSection;
