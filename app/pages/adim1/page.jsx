//'use client';

export default function adim1(){
    


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
      <a href="/">sonraki sayfa</a> {/*şimdilik önceki sayfaya aktardım */}

    </form>
  </div>
);
}

