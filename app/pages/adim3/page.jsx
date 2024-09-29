export default function adim3(){

    return (
        <div>
        <h1>Öğrenci Kayıt - Adım 3</h1>
        <form>
          <p>
            <label>Dönem:</label>
            <input type="text" name="term" />
          </p>
          <p>
            <label>Eğitmen:</label>
            <input type="text" name="teacher" />
          </p>
          <p>
            <label>Bölüm:</label>
            <input type="text" name="department" />
          </p>
          <p>
            <label>Sınıf:</label>
            <input type="text" name="class" />
          </p>
          <p>
            <label>Öğrenci Numarası:</label>
            <input type="number" name="studentNumber" />
          </p>
          <a href="/pages/adim2">sonraki sayfa</a> 
        </form>
      </div>
    );
  }