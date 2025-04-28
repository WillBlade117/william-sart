"use client";

import { useState } from 'react';

export default function ContactForm() {
  const [status, setStatus] = useState(null);
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    company: '',
    email: '',
    message: '',
    website: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await fetch('/api/contact', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    });
    if (response.ok) {
      setStatus('Message envoyé avec succès.');
      setFormData({
        firstName: '',
        lastName: '',
        company: '',
        email: '',
        message: '',
      });
    } else {
      setStatus('Erreur lors de l\'envoi du message. Veuillez réessayer.');
    }
  };

  return (
    <section id="contact" className="mt-20 pt-20">
      <h2 className="text-4xl font-bold">
        Vous voulez en savoir plus ?<br />
        <span className="text-fuchsia-500">Contactez moi !</span>
      </h2>
      <div className="isolate mt-10 mb-10 rounded-md bg-fuchsia-200 px-6 py-6 sm:py-4 lg:px-8">
        <form onSubmit={handleSubmit} className="mx-auto max-w-xl">
          <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">

            <input
              name="website"
              type="text"
              value={formData.website}
              onChange={handleChange}
              autoComplete="off"
              className="hidden"
              tabIndex="-1"
            />

            <div>
              <label htmlFor="firstName" className="block text-sm/6 font-semibold text-gray-600">
                Prénom
              </label>
              <div className="mt-2.5">
                <input
                  id="firstName"
                  name="firstName"
                  type="text"
                  value={formData.firstName}
                  onChange={handleChange}
                  autoComplete="given-name"
                  required
                  className="block w-full rounded-md bg-white px-3.5 py-2 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-fuchsia-500"
                />
              </div>
            </div>
            <div>
              <label htmlFor="lastName" className="block text-sm/6 font-semibold text-gray-600">
                Nom
              </label>
              <div className="mt-2.5">
                <input
                  id="lastName"
                  name="lastName"
                  type="text"
                  value={formData.lastName}
                  onChange={handleChange}
                  autoComplete="family-name"
                  required
                  className="block w-full rounded-md bg-white px-3.5 py-2 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-fuchsia-500"
                />
              </div>
            </div>
            <div>
              <label htmlFor="email" className="block text-sm/6 font-semibold text-gray-600">
                Email
              </label>
              <div className="mt-2.5">
                <input
                  id="email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  autoComplete="email"
                  required
                  className="block w-full rounded-md bg-white px-3.5 py-2 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-fuchsia-500"
                />
              </div>
            </div>
            <div>
              <label htmlFor="company" className="block text-sm/6 font-semibold text-gray-600">
                Entreprise
              </label>
              <div className="mt-2.5">
                <input
                  id="company"
                  name="company"
                  type="text"
                  value={formData.company}
                  onChange={handleChange}
                  autoComplete="organization"
                  className="block w-full rounded-md bg-white px-3.5 py-2 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-fuchsia-500"
                />
              </div>
            </div>
            <div className="sm:col-span-2">
              <label htmlFor="message" className="block text-sm/6 font-semibold text-gray-600">
                Message
              </label>
              <div className="mt-2.5">
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  value={formData.message}
                  onChange={handleChange}
                  required
                  className="block w-full rounded-md bg-white px-3.5 py-2 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-fuchsia-500"
                />
              </div>
            </div>
          </div>
          <div className="mt-10">
            <button
              type="submit"
              className="block w-full rounded-md bg-fuchsia-500 px-3.5 py-2.5 text-center text-sm font-bold text-white shadow-xs hover:bg-white hover:text-fuchsia-500 hover:border-fuchsia-500"
            >
              Envoyer
            </button>
          </div>
        </form>
        {status && <p>{status}</p>}
      </div>
    </section>
  );
}
