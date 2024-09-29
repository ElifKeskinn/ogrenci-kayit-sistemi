//"use client";
//bu dosyaya form data verisini tutan state tanımlayabilirm
//çünkü mülakat puanına göre nasıl ayarlıcam sonraki sayfayı
export default function adim2(){
    return (
        <div>
          <h1>Öğrenci Kayıt - Adım 2</h1>
          <form>
            <p>
              <label>Ön Sınav Puanı:</label>
              <input type="number" step="0.01" name="examScore" />
            </p>
            <p>
              <label>Mülakat Notları:</label>
              <textarea name="interviewNotes"></textarea>
            </p>
            <p>
              <label>Mülakat Puanı:</label>
              <input type="number" name="interviewScore" />
            </p>
            <p>
              <label>Mülakattan Geçti mi?</label>
              <input type="radio" name="interviewPassed" value="yes" /> Evet
              <input type="radio" name="interviewPassed" value="no" /> Hayır
            </p>
            <a href="/pages/adim3">sonraki sayfa </a>
          </form>
        </div>
      );
    }
