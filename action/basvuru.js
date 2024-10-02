export function BasvuruYapAksiyonu(values) {
  let errors = {};

  // Adım 1
  if (values.step === 1) {
    errors = {
      name: !values.name ? "İsim boş olamaz" : null,
      surname: !values.surname ? "Soyad boş olamaz" : null,
      phone: !values.phone ? "Telefon alanı boş olamaz" : null,
      tcno: !values.tcno ? "TCNO alanı boş olamaz" : null,
      dogumTarihi: !values.dogumTarihi ? "Doğum tarihi boş olamaz" : null,
      gender: !values.gender ? "Cinsiyet seçilmelidir" : null,
    };
  }

  // Adım 2
  if (values.step === 2) {
    errors = {
      examScore: !values.examScore ? "Sınav puanı boş olamaz" : null,
      interviewNotes: !values.interviewNotes ? "Mülakat notları boş olamaz" : null,
      interviewScore: !values.interviewScore ? "Mülakat puanı boş olamaz" : null,
      interviewPassed: !values.interviewPassed ? "Mülakat sonucu seçilmelidir" : null,
    };
  }

  // Adım 3
  if (values.step === 3) {
    errors = {
      term: !values.term ? "Dönem boş olamaz" : null,
      teacher: !values.teacher ? "Eğitmen boş olamaz" : null,
      department: !values.department ? "Bölüm boş olamaz" : null,
      studentNumber: !values.studentNumber ? "Öğrenci numarası boş olamaz" : null,
    };
  }

  // Adım 4
  if (values.step === 4) {
    errors = {
      homeworkCompleted: !values.homeworkCompleted ? "Bu alan doldurulmalıdır" : null,
      classParticipation: !values.classParticipation ? "Bu alan doldurulmalıdır" : null,
      projectDeveloped: !values.projectDeveloped ? "Bu alan doldurulmalıdır" : null,
      alwaysOnTime: !values.alwaysOnTime ? "Bu alan doldurulmalıdır" : null,
      focusedDuringClass: !values.focusedDuringClass ? "Bu alan doldurulmalıdır" : null,
      certificate: !values.certificate ? "Sertifika durumu belirtilmelidir" : null,
    };
  }

  Object.keys(errors).forEach((key) => {
    if (errors[key] === null) {
      delete errors[key];
    }
  });

  return { errors };
}
