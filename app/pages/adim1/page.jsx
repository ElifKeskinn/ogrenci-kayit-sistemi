'use client';
import { useState } from 'react';
import Link from 'next/link';
import { BasvuruYapAksiyonu } from '../../../action/basvuru';

export default function adim1(){
    
    const [formData, setFormData] = useState({
        name: "",
        surname: "",
        birthDate: "",
        tcno: "",
        phone: "",
        gender: ""
          });

    const [formState, setFormState] = useState({});

    const handleChange = (e) => {
      setFormData({ ...formData, [e.target.name]: e.target.value });
    };
  
    const handleSubmit = async (e) => {
      e.preventDefault();
      const result = await BasvuruYapAksiyonu(null, formData);
      if (Object.keys(result.errors).length) {
        setFormState({ errors: result.errors });
      }
    };

return ( 
    <div>
    <h1>Öğrenci Kayıt - Adım 1</h1>
    <form>
      <p>
        <label>İsim:</label>
        <input type="text" name="name"  />
      </p>
      <p>
        <label>Soyisim:</label>
        <input type="text" name="surname"  />
      </p>
      <p>
        <label>Doğum Tarihi:</label>
        <input type="date" name="birthDate"  />
      </p>
      <p>
        <label>TC No:</label>
        <input type="number" name="tcno"  />
      </p>
      <p>
        <label>Telefon:</label>
        <input type="number" name="phone"  />
      </p>
      <p>
        <label>Cinsiyet:</label>
        <select name="gender" >
          <option value="">Seçiniz</option>
          <option value="female">Kadın</option>
          <option value="male">Erkek</option>
          <option value="other">Diğer(atak helikopteri?)</option>
        </select>
      </p>
      <a href="/pages/adim2">sonraki sayfa</a> 

    </form>
  </div>
);
}

