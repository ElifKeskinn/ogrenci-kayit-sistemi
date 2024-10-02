"use server";

export async function BasvuruYapAksiyonu(prevState, values) {
  let errors = {};
  
  // Adım 1 
  if (values.step == 1) {
    errors = {
      name: !values.name && "İsim boş olamaz",
      surname: !values.surname && "Soyad boş olamaz",
      phone: !values.phone && "Telefon alanı boş olamaz",
      tcno: !values.tcno && "TCNO alanı boş olamaz"
    };
  }
  
  // Adım 2 
  if (values.step == 2) {
    errors = {
      examScore: !values.examScore && "Sınav puanı boş olamaz",
      interviewScore: !values.interviewScore && "Mülakat puanı boş olamaz",
      interviewPassed: !values.interviewPassed && "Mülakat sonucu seçilmelidir"
    };
  }

  // Adım 3 
  if (values.step == 3) {
    errors = {
      term: !values.term && "Dönem boş olamaz",
      teacher: !values.teacher && "Eğitmen boş olamaz",
      department: !values.department && "Bölüm boş olamaz",
      studentNumber: !values.studentNumber && "Öğrenci numarası boş olamaz"
    };
  }

  // Adım 4 
  if (values.step == 4) {
    errors = {
      certificate: !values.certificate && "Sertifika durumu belirtilmelidir"
    };
  }

  return { errors };
}


/*

portfolio sitesi next.js ile yapılsın
cv yeni sekmede açılsın indirilmesin
quiz app next.js ile yapılacak
supabase.comdan kendine bir hesap aç
supabase nasıl kullanılır öğren


*/