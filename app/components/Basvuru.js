"use client";

import { useState } from "react";
import { BasvuruYapAksiyonu } from "@/action/basvuru";

export default function Basvuru() {
    const [step, setStep] = useState(1);
    const [formData, setFormData] = useState({
        // Adım 1
        name: "",
        surname: "",
        phone: "",
        tcno: "",
        dogumTarihi: "",
        gender: "",
        // Adım 2
        examScore: "",
        interviewNotes: "",
        interviewScore: "",
        interviewPassed: "",
        // Adım 3
        term: "",
        teacher: "",
        department: "",
        studentNumber: "",
        // Adım 4
        homeworkCompleted: "",
        classParticipation: "",
        projectDeveloped: "",
        alwaysOnTime: "",
        focusedDuringClass: "",
        certificate: "",
    });
    const [errors, setErrors] = useState({});

    const handleChange = (e) => {
        const { name, value, type } = e.target;
        let val = value;
        if (type === "radio") {
            val = e.target.value; 
        }
        setFormData({
            ...formData,
            [name]: val,
        });
    };

    const validateStep = () => {
        const response = BasvuruYapAksiyonu({ ...formData, step });
        setErrors(response.errors || {});
        return Object.keys(response.errors || {}).length === 0;
    };

    const handleNext = (e) => {
        e.preventDefault();
        const isValid = validateStep();
        if (isValid) {
            if (step === 2 && formData.interviewPassed === "hayır") {
                alert("Kayıdınız alındı");
                window.location.href = "/"; 
            } else if (step === 4) {
                setStep(5);
            } else {
                setStep(step + 1);
            }
        }
    };


    const handleBack = (e) => {
        e.preventDefault();
        setStep(step - 1);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const isValid = validateStep();
        if (isValid) {
            alert("Başvurunuz başarıyla tamamlandı.");
            console.log("Form Verileri:", formData);
            window.location.href = "/"; 
        }
    };

    return (
        <div>
            <h1>Başvuru Sayfası</h1>
            <form onSubmit={step === 5 ? handleSubmit : handleNext}>
                <input type="hidden" name="step" value={step} />

                {step === 1 && (
                    <div>
                        <h2>Adım 1: Kişisel Bilgiler</h2>
                        <div>
                            <label htmlFor="name">İsim:</label>
                            <input
                                type="text"
                                name="name"
                                id="name"
                                placeholder="Adınız"
                                value={formData.name}
                                onChange={handleChange}
                            />
                            {errors.name && <small style={{ color: "red" }}>{errors.name}</small>}
                        </div>
                        <div>
                            <label htmlFor="surname">Soyad:</label>
                            <input
                                type="text"
                                name="surname"
                                id="surname"
                                placeholder="Soyadınız"
                                value={formData.surname}
                                onChange={handleChange}
                            />
                            {errors.surname && <small style={{ color: "red" }}>{errors.surname}</small>}
                        </div>
                        <div>
                            <label htmlFor="phone">Telefon:</label>
                            <input
                                type="number"
                                name="phone"
                                id="phone"
                                placeholder="Telefon Numaranız"
                                value={formData.phone}
                                onChange={handleChange}
                            />
                            {errors.phone && <small style={{ color: "red" }}>{errors.phone}</small>}
                        </div>
                        <div>
                            <label htmlFor="tcno">TC No:</label>
                            <input
                                type="number"
                                name="tcno"
                                id="tcno"
                                placeholder="TC Numaranız"
                                value={formData.tcno}
                                onChange={handleChange}
                            />
                            {errors.tcno && <small style={{ color: "red" }}>{errors.tcno}</small>}
                        </div>
                        <div>
                            <label htmlFor="dogumTarihi">Doğum Tarihi:</label>
                            <input
                                type="date"
                                name="dogumTarihi"
                                id="dogumTarihi"
                                value={formData.dogumTarihi}
                                onChange={handleChange}
                            />
                            {errors.dogumTarihi && (
                                <small style={{ color: "red" }}>{errors.dogumTarihi}</small>
                            )}
                        </div>
                        <div>
                            <span>Cinsiyet:</span>
                            <div>
                                <input
                                    type="radio"
                                    id="female"
                                    name="gender"
                                    value="female" 
                                    checked={formData.gender === "female"}
                                    onChange={handleChange}
                                />
                                <label htmlFor="female">Kadın</label>
                                <input
                                    type="radio"
                                    id="male"
                                    name="gender"
                                    value="male" 
                                    checked={formData.gender === "male"}
                                    onChange={handleChange}
                                />
                                <label htmlFor="male">Erkek</label>
                                <input
                                    type="radio"
                                    id="other"
                                    name="gender"
                                    value="other" 
                                    checked={formData.gender === "other"}
                                    onChange={handleChange}
                                />
                                <label htmlFor="other">Diğer</label>
                            </div>
                            {errors.gender && <small style={{ color: "red" }}>{errors.gender}</small>}
                        </div>
                    </div>
                )}

                {step === 2 && (
                    <div>
                        <h2>Adım 2: Mülakat Bilgileri</h2>
                        <div>
                            <label htmlFor="examScore">Ön Sınav Puanı:</label>
                            <input
                                type="number"
                                step="0.01"
                                name="examScore"
                                id="examScore"
                                placeholder="Ön Sınav Puanınız"
                                value={formData.examScore}
                                onChange={handleChange}
                            />
                            {errors.examScore && <small style={{ color: "red" }}>{errors.examScore}</small>}
                        </div>
                        <div>
                            <label htmlFor="interviewNotes">Mülakat Notları:</label>
                            <textarea
                                name="interviewNotes"
                                id="interviewNotes"
                                placeholder="Mülakat Notlarınız"
                                value={formData.interviewNotes}
                                onChange={handleChange}
                            ></textarea>
                            {errors.interviewNotes && (
                                <small style={{ color: "red" }}>{errors.interviewNotes}</small>
                            )}
                        </div>
                        <div>
                            <label htmlFor="interviewScore">Mülakat Puanı:</label>
                            <input
                                type="number"
                                name="interviewScore"
                                id="interviewScore"
                                placeholder="Mülakat Puanınız"
                                value={formData.interviewScore}
                                onChange={handleChange}
                            />
                            {errors.interviewScore && (
                                <small style={{ color: "red" }}>{errors.interviewScore}</small>
                            )}
                        </div>
                        <div>
                            <span>Mülakattan Geçti mi?</span>
                            <div>
                                <input
                                    type="radio"
                                    id="evet"
                                    name="interviewPassed"
                                    value="evet" 
                                    checked={formData.interviewPassed === "evet"}
                                    onChange={handleChange}
                                />
                                <label htmlFor="evet">Evet</label>
                                <input
                                    type="radio"
                                    id="hayır"
                                    name="interviewPassed"
                                    value="hayır" 
                                    checked={formData.interviewPassed === "hayır"}
                                    onChange={handleChange}
                                />
                                <label htmlFor="hayır">Hayır</label>
                            </div>
                            {errors.interviewPassed && (
                                <small style={{ color: "red" }}>{errors.interviewPassed}</small>
                            )}
                        </div>
                    </div>
                )}

                {step === 3 && (
                    <div>
                        <h2>Adım 3: Eğitim Bilgileri</h2>
                        <div>
                            <label htmlFor="term">Dönem:</label>
                            <input
                                type="text"
                                name="term"
                                id="term"
                                placeholder="Dönem"
                                value={formData.term}
                                onChange={handleChange}
                            />
                            {errors.term && <small style={{ color: "red" }}>{errors.term}</small>}
                        </div>
                        <div>
                            <label htmlFor="teacher">Eğitmen:</label>
                            <input
                                type="text"
                                name="teacher"
                                id="teacher"
                                placeholder="Eğitmen Adı"
                                value={formData.teacher}
                                onChange={handleChange}
                            />
                            {errors.teacher && <small style={{ color: "red" }}>{errors.teacher}</small>}
                        </div>
                        <div>
                            <label htmlFor="department">Bölüm:</label>
                            <input
                                type="text"
                                name="department"
                                id="department"
                                placeholder="Bölümünüz"
                                value={formData.department}
                                onChange={handleChange}
                            />
                            {errors.department && (
                                <small style={{ color: "red" }}>{errors.department}</small>
                            )}
                        </div>
                        <div>
                            <label htmlFor="studentNumber">Öğrenci Numarası:</label>
                            <input
                                type="text"
                                name="studentNumber"
                                id="studentNumber"
                                placeholder="Öğrenci Numaranız"
                                value={formData.studentNumber}
                                onChange={handleChange}
                            />
                            {errors.studentNumber && (
                                <small style={{ color: "red" }}>{errors.studentNumber}</small>
                            )}
                        </div>
                    </div>
                )}

                {step === 4 && (
                    <div>
                        <h2>Adım 4: Değerlendirme</h2>
                        <div>
                            <span>Ödevlerin tamamını tamamladı mı?</span>
                            <div>
                                <input
                                    type="radio"
                                    id="homeworkEvet"
                                    name="homeworkCompleted"
                                    value="evet" 
                                    checked={formData.homeworkCompleted === "evet"}
                                    onChange={handleChange}
                                />
                                <label htmlFor="homeworkEvet">Evet</label>
                                <input
                                    type="radio"
                                    id="homeworkHayir"
                                    name="homeworkCompleted"
                                    value="hayır" 
                                    checked={formData.homeworkCompleted === "hayır"}
                                    onChange={handleChange}
                                />
                                <label htmlFor="homeworkHayir">Hayır</label>
                            </div>
                            {errors.homeworkCompleted && (
                                <small style={{ color: "red" }}>{errors.homeworkCompleted}</small>
                            )}
                        </div>

                        <div>
                            <span>Sınıfta derse katılım sağlandı mı?</span>
                            <div>
                                <input
                                    type="radio"
                                    id="participationEvet"
                                    name="classParticipation"
                                    value="evet" 
                                    checked={formData.classParticipation === "evet"}
                                    onChange={handleChange}
                                />
                                <label htmlFor="participationEvet">Evet</label>
                                <input
                                    type="radio"
                                    id="participationHayir"
                                    name="classParticipation"
                                    value="hayır" 
                                    checked={formData.classParticipation === "hayır"}
                                    onChange={handleChange}
                                />
                                <label htmlFor="participationHayir">Hayır</label>
                            </div>
                            {errors.classParticipation && (
                                <small style={{ color: "red" }}>{errors.classParticipation}</small>
                            )}
                        </div>

                        <div>
                            <span>Eğitmenlere söylemediği halde proje geliştirdi mi?</span>
                            <div>
                                <input
                                    type="radio"
                                    id="projectEvet"
                                    name="projectDeveloped"
                                    value="evet" 
                                    checked={formData.projectDeveloped === "evet"}
                                    onChange={handleChange}
                                />
                                <label htmlFor="projectEvet">Evet</label>
                                <input
                                    type="radio"
                                    id="projectHayir"
                                    name="projectDeveloped"
                                    value="hayır" 
                                    checked={formData.projectDeveloped === "hayır"}
                                    onChange={handleChange}
                                />
                                <label htmlFor="projectHayir">Hayır</label>
                            </div>
                            {errors.projectDeveloped && (
                                <small style={{ color: "red" }}>{errors.projectDeveloped}</small>
                            )}
                        </div>

                        <div>
                            <span>Derse her zaman ders saatinde geldi mi?</span>
                            <div>
                                <input
                                    type="radio"
                                    id="ontimeEvet"
                                    name="alwaysOnTime"
                                    value="evet" 
                                    checked={formData.alwaysOnTime === "evet"}
                                    onChange={handleChange}
                                />
                                <label htmlFor="ontimeEvet">Evet</label>
                                <input
                                    type="radio"
                                    id="ontimeHayir"
                                    name="alwaysOnTime"
                                    value="hayır" 
                                    checked={formData.alwaysOnTime === "hayır"}
                                    onChange={handleChange}
                                />
                                <label htmlFor="ontimeHayir">Hayır</label>
                            </div>
                            {errors.alwaysOnTime && (
                                <small style={{ color: "red" }}>{errors.alwaysOnTime}</small>
                            )}
                        </div>

                        <div>
                            <span>Ders esnasında sadece derse odaklandı mı?</span>
                            <div>
                                <input
                                    type="radio"
                                    id="focusedEvet"
                                    name="focusedDuringClass"
                                    value="evet" 
                                    checked={formData.focusedDuringClass === "evet"}
                                    onChange={handleChange}
                                />
                                <label htmlFor="focusedEvet">Evet</label>
                                <input
                                    type="radio"
                                    id="focusedHayir"
                                    name="focusedDuringClass"
                                    value="hayır" 
                                    checked={formData.focusedDuringClass === "hayır"}
                                    onChange={handleChange}
                                />
                                <label htmlFor="focusedHayir">Hayır</label>
                            </div>
                            {errors.focusedDuringClass && (
                                <small style={{ color: "red" }}>{errors.focusedDuringClass}</small>
                            )}
                        </div>

                        <div>
                            <span>Sertifika almayı hak ediyor mu?</span>
                            <div>
                                <input
                                    type="radio"
                                    id="certificateEvet"
                                    name="certificate"
                                    value="evet" 
                                    checked={formData.certificate === "evet"}
                                    onChange={handleChange}
                                />
                                <label htmlFor="certificateEvet">Evet</label>
                                <input
                                    type="radio"
                                    id="certificateHayir"
                                    name="certificate"
                                    value="hayır" 
                                    checked={formData.certificate === "hayır"}
                                    onChange={handleChange}
                                />
                                <label htmlFor="certificateHayir">Hayır</label>
                            </div>
                            {errors.certificate && (
                                <small style={{ color: "red" }}>{errors.certificate}</small>
                            )}
                        </div>
                    </div>
                )}

                {step === 5 && (
                    <div>
                        <h2>Başvuru Tamamlandı</h2>
                        <p>
                            Teşekkürler, {formData.name} {formData.surname}, başvurunuz başarıyla alındı.
                        </p>
                        {formData.certificate === "evet" ? (
                            <>
                                <p>Sertifika almayı hak ediyorsunuz. Sertifikanız işleme alınacaktır.</p>
                                <a href="/" className="button">Başvuru Sayfasına Geri Dön</a>
                            </>
                        ) : (
                            <div>
                                <p>Maalesef sertifika almayı hak etmediniz.</p>
                                <a href="/" className="button">Başvuru Sayfasına Geri Dön</a>

                            </div>
                        )}
                    </div>
                )}

                <div>
                    {step > 1 && step < 5 && (
                        <button onClick={handleBack}>Geri</button>
                    )}
                    {step < 4 && (
                        <button type="button" onClick={handleNext}>
                            İlerle
                        </button>
                    )}
                    {step === 4 && (
                        <button type="submit">Tamamla</button>
                    )}
                </div>
            </form>
        </div>
    );
}
