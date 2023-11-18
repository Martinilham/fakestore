import React, { useState } from 'react';


export default function Cart() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  // Handler untuk memperbarui state saat nilai input berubah
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  // Handler untuk menangani pengiriman formulir
  const handleSubmit = (e) => {
    e.preventDefault();
    // Lakukan sesuatu dengan data formulir (misalnya, kirim ke server)
    console.log('Data Formulir:', formData);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        {/* Input Nama */}
        <label>
          Nama:
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleInputChange}
          />
        </label>

        {/* Input Email */}
        <label>
          Email:
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
          />
        </label>

        {/* Textarea Pesan */}
        <label>
          Pesan:
          <textarea
            name="message"
            value={formData.message}
            onChange={handleInputChange}
          />
        </label>

        {/* Tombol submit */}
        <button type="submit">Kirim</button>
      </form>
    </div>
  );
};
