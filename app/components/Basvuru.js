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
        <div className="form-container">
            <h1 className="form-title">Başvuru Sayfası</h1>
            <form className="form" onSubmit={step === 5 ? handleSubmit : handleNext}>
                <input type="hidden" name="step" value={step} />
    
                {step === 1 && (
                    <div className="form-step">
                        <h2 className="step-title">Adım 1: Kişisel Bilgiler</h2>
                        <div className="form-group">
                            <label htmlFor="name" className="form-label">İsim:</label>
                            <input
                                type="text"
                                name="name"
                                id="name"
                                placeholder="Adınız"
                                value={formData.name}
                                onChange={handleChange}
                                className="form-input"
                            />
                            {errors.name && <small className="form-error">{errors.name}</small>}
                        </div>
                        <div className="form-group">
                            <label htmlFor="surname" className="form-label">Soyad:</label>
                            <input
                                type="text"
                                name="surname"
                                id="surname"
                                placeholder="Soyadınız"
                                value={formData.surname}
                                onChange={handleChange}
                                className="form-input"
                            />
                            {errors.surname && <small className="form-error">{errors.surname}</small>}
                        </div>
                        <div className="form-group">
                            <label htmlFor="phone" className="form-label">Telefon:</label>
                            <input
                                type="number"
                                name="phone"
                                id="phone"
                                placeholder="Telefon Numaranız"
                                value={formData.phone}
                                onChange={handleChange}
                                className="form-input"
                            />
                            {errors.phone && <small className="form-error">{errors.phone}</small>}
                        </div>
                        <div className="form-group">
                            <label htmlFor="tcno" className="form-label">TC No:</label>
                            <input
                                type="number"
                                name="tcno"
                                id="tcno"
                                placeholder="TC Numaranız"
                                value={formData.tcno}
                                onChange={handleChange}
                                className="form-input"
                            />
                            {errors.tcno && <small className="form-error">{errors.tcno}</small>}
                        </div>
                        <div className="form-group">
                            <label htmlFor="dogumTarihi" className="form-label">Doğum Tarihi:</label>
                            <input
                                type="date"
                                name="dogumTarihi"
                                id="dogumTarihi"
                                value={formData.dogumTarihi}
                                onChange={handleChange}
                                className="form-input"
                            />
                            {errors.dogumTarihi && (
                                <small className="form-error">{errors.dogumTarihi}</small>
                            )}
                        </div>
                        <div className="form-group">
                            <span className="form-label">Cinsiyet:</span>
                            <div className="radio-group">
                                <div className="radio-option">
                                    <input
                                        type="radio"
                                        id="female"
                                        name="gender"
                                        value="female"
                                        checked={formData.gender === "female"}
                                        onChange={handleChange}
                                        className="form-radio"
                                    />
                                    <label htmlFor="female" className="form-radio-label">Kadın</label>
                                </div>
                                <div className="radio-option">
                                    <input
                                        type="radio"
                                        id="male"
                                        name="gender"
                                        value="male"
                                        checked={formData.gender === "male"}
                                        onChange={handleChange}
                                        className="form-radio"
                                    />
                                    <label htmlFor="male" className="form-radio-label">Erkek</label>
                                </div>
                                <div className="radio-option">
                                    <input
                                        type="radio"
                                        id="other"
                                        name="gender"
                                        value="other"
                                        checked={formData.gender === "other"}
                                        onChange={handleChange}
                                        className="form-radio"
                                    />
                                    <label htmlFor="other" className="form-radio-label">Diğer</label>
                                </div>
                            </div>
                            {errors.gender && <small className="form-error">{errors.gender}</small>}
                        </div>
                    </div>
                )}
    
                {step === 2 && (
                    <div className="form-step">
                        <h2 className="step-title">Adım 2: Mülakat Bilgileri</h2>
                        <div className="form-group">
                            <label htmlFor="examScore" className="form-label">Ön Sınav Puanı:</label>
                            <input
                                type="number"
                                step="0.01"
                                name="examScore"
                                id="examScore"
                                placeholder="Ön Sınav Puanınız"
                                value={formData.examScore}
                                onChange={handleChange}
                                className="form-input"
                            />
                            {errors.examScore && <small className="form-error">{errors.examScore}</small>}
                        </div>
                        <div className="form-group">
                            <label htmlFor="interviewNotes" className="form-label">Mülakat Notları:</label>
                            <textarea
                                name="interviewNotes"
                                id="interviewNotes"
                                placeholder="Mülakat Notlarınız"
                                value={formData.interviewNotes}
                                onChange={handleChange}
                                className="form-textarea"
                            ></textarea>
                            {errors.interviewNotes && (
                                <small className="form-error">{errors.interviewNotes}</small>
                            )}
                        </div>
                        <div className="form-group">
                            <label htmlFor="interviewScore" className="form-label">Mülakat Puanı:</label>
                            <input
                                type="number"
                                name="interviewScore"
                                id="interviewScore"
                                placeholder="Mülakat Puanınız"
                                value={formData.interviewScore}
                                onChange={handleChange}
                                className="form-input"
                            />
                            {errors.interviewScore && (
                                <small className="form-error">{errors.interviewScore}</small>
                            )}
                        </div>
                        <div className="form-group">
                            <span className="form-label">Mülakattan Geçti mi?</span>
                            <div className="radio-group">
                                <div className="radio-option">
                                    <input
                                        type="radio"
                                        id="evet"
                                        name="interviewPassed"
                                        value="evet"
                                        checked={formData.interviewPassed === "evet"}
                                        onChange={handleChange}
                                        className="form-radio"
                                    />
                                    <label htmlFor="evet" className="form-radio-label">Evet</label>
                                </div>
                                <div className="radio-option">
                                    <input
                                        type="radio"
                                        id="hayır"
                                        name="interviewPassed"
                                        value="hayır"
                                        checked={formData.interviewPassed === "hayır"}
                                        onChange={handleChange}
                                        className="form-radio"
                                    />
                                    <label htmlFor="hayır" className="form-radio-label">Hayır</label>
                                </div>
                            </div>
                            {errors.interviewPassed && (
                                <small className="form-error">{errors.interviewPassed}</small>
                            )}
                        </div>
                    </div>
                )}
    
                {step === 3 && (
                    <div className="form-step">
                        <h2 className="step-title">Adım 3: Eğitim Bilgileri</h2>
                        <div className="form-group">
                            <label htmlFor="term" className="form-label">Dönem:</label>
                            <input
                                type="text"
                                name="term"
                                id="term"
                                placeholder="Dönem"
                                value={formData.term}
                                onChange={handleChange}
                                className="form-input"
                            />
                            {errors.term && <small className="form-error">{errors.term}</small>}
                        </div>
                        <div className="form-group">
                            <label htmlFor="teacher" className="form-label">Eğitmen:</label>
                            <input
                                type="text"
                                name="teacher"
                                id="teacher"
                                placeholder="Eğitmen Adı"
                                value={formData.teacher}
                                onChange={handleChange}
                                className="form-input"
                            />
                            {errors.teacher && <small className="form-error">{errors.teacher}</small>}
                        </div>
                        <div className="form-group">
                            <label htmlFor="department" className="form-label">Bölüm:</label>
                            <input
                                type="text"
                                name="department"
                                id="department"
                                placeholder="Bölümünüz"
                                value={formData.department}
                                onChange={handleChange}
                                className="form-input"
                            />
                            {errors.department && (
                                <small className="form-error">{errors.department}</small>
                            )}
                        </div>
                        <div className="form-group">
                            <label htmlFor="studentNumber" className="form-label">Öğrenci Numarası:</label>
                            <input
                                type="text"
                                name="studentNumber"
                                id="studentNumber"
                                placeholder="Öğrenci Numaranız"
                                value={formData.studentNumber}
                                onChange={handleChange}
                                className="form-input"
                            />
                            {errors.studentNumber && (
                                <small className="form-error">{errors.studentNumber}</small>
                            )}
                        </div>
                    </div>
                )}
    
               
            {step === 4 && (
                <div className="form-step">
                    <h2 className="step-title">Adım 4: Değerlendirme</h2>
                    <div className="form-group">
                        <span className="form-label">Ödevlerin tamamını tamamladı mı?</span>
                        <div className="radio-group">
                            <div className="radio-option">
                                <input
                                    type="radio"
                                    id="homeworkEvet"
                                    name="homeworkCompleted"
                                    value="evet"
                                    checked={formData.homeworkCompleted === "evet"}
                                    onChange={handleChange}
                                    className="form-radio"
                                />
                                <label htmlFor="homeworkEvet" className="form-radio-label">Evet</label>
                            </div>
                            <div className="radio-option">
                                <input
                                    type="radio"
                                    id="homeworkHayir"
                                    name="homeworkCompleted"
                                    value="hayır"
                                    checked={formData.homeworkCompleted === "hayır"}
                                    onChange={handleChange}
                                    className="form-radio"
                                />
                                <label htmlFor="homeworkHayir" className="form-radio-label">Hayır</label>
                            </div>
                        </div>
                        {errors.homeworkCompleted && (
                            <small className="form-error">{errors.homeworkCompleted}</small>
                        )}
                    </div>

                    <div className="form-group">
                        <span className="form-label">Sınıfta derse katılım sağlandı mı?</span>
                        <div className="radio-group">
                            <div className="radio-option">
                                <input
                                    type="radio"
                                    id="participationEvet"
                                    name="classParticipation"
                                    value="evet"
                                    checked={formData.classParticipation === "evet"}
                                    onChange={handleChange}
                                    className="form-radio"
                                />
                                <label htmlFor="participationEvet" className="form-radio-label">Evet</label>
                            </div>
                            <div className="radio-option">
                                <input
                                    type="radio"
                                    id="participationHayir"
                                    name="classParticipation"
                                    value="hayır"
                                    checked={formData.classParticipation === "hayır"}
                                    onChange={handleChange}
                                    className="form-radio"
                                />
                                <label htmlFor="participationHayir" className="form-radio-label">Hayır</label>
                            </div>
                        </div>
                        {errors.classParticipation && (
                            <small className="form-error">{errors.classParticipation}</small>
                        )}
                    </div>

                    <div className="form-group">
                        <span className="form-label">Eğitmenlere söylemediği halde proje geliştirdi mi?</span>
                        <div className="radio-group">
                            <div className="radio-option">
                                <input
                                    type="radio"
                                    id="projectEvet"
                                    name="projectDeveloped"
                                    value="evet"
                                    checked={formData.projectDeveloped === "evet"}
                                    onChange={handleChange}
                                    className="form-radio"
                                />
                                <label htmlFor="projectEvet" className="form-radio-label">Evet</label>
                            </div>
                            <div className="radio-option">
                                <input
                                    type="radio"
                                    id="projectHayir"
                                    name="projectDeveloped"
                                    value="hayır"
                                    checked={formData.projectDeveloped === "hayır"}
                                    onChange={handleChange}
                                    className="form-radio"
                                />
                                <label htmlFor="projectHayir" className="form-radio-label">Hayır</label>
                            </div>
                        </div>
                        {errors.projectDeveloped && (
                            <small className="form-error">{errors.projectDeveloped}</small>
                        )}
                    </div>

                    <div className="form-group">
                        <span className="form-label">Derse her zaman ders saatinde geldi mi?</span>
                        <div className="radio-group">
                            <div className="radio-option">
                                <input
                                    type="radio"
                                    id="ontimeEvet"
                                    name="alwaysOnTime"
                                    value="evet"
                                    checked={formData.alwaysOnTime === "evet"}
                                    onChange={handleChange}
                                    className="form-radio"
                                />
                                <label htmlFor="ontimeEvet" className="form-radio-label">Evet</label>
                            </div>
                            <div className="radio-option">
                                <input
                                    type="radio"
                                    id="ontimeHayir"
                                    name="alwaysOnTime"
                                    value="hayır"
                                    checked={formData.alwaysOnTime === "hayır"}
                                    onChange={handleChange}
                                    className="form-radio"
                                />
                                <label htmlFor="ontimeHayir" className="form-radio-label">Hayır</label>
                            </div>
                        </div>
                        {errors.alwaysOnTime && (
                            <small className="form-error">{errors.alwaysOnTime}</small>
                        )}
                    </div>

                    <div className="form-group">
                        <span className="form-label">Ders esnasında sadece derse odaklandı mı?</span>
                        <div className="radio-group">
                            <div className="radio-option">
                                <input
                                    type="radio"
                                    id="focusedEvet"
                                    name="focusedDuringClass"
                                    value="evet"
                                    checked={formData.focusedDuringClass === "evet"}
                                    onChange={handleChange}
                                    className="form-radio"
                                />
                                <label htmlFor="focusedEvet" className="form-radio-label">Evet</label>
                            </div>
                            <div className="radio-option">
                                <input
                                    type="radio"
                                    id="focusedHayir"
                                    name="focusedDuringClass"
                                    value="hayır"
                                    checked={formData.focusedDuringClass === "hayır"}
                                    onChange={handleChange}
                                    className="form-radio"
                                />
                                <label htmlFor="focusedHayir" className="form-radio-label">Hayır</label>
                            </div>
                        </div>
                        {errors.focusedDuringClass && (
                            <small className="form-error">{errors.focusedDuringClass}</small>
                        )}
                    </div>

                    <div className="form-group">
                        <span className="form-label">Sertifika almayı hak ediyor mu?</span>
                        <div className="radio-group">
                            <div className="radio-option">
                                <input
                                    type="radio"
                                    id="certificateEvet"
                                    name="certificate"
                                    value="evet"
                                    checked={formData.certificate === "evet"}
                                    onChange={handleChange}
                                    className="form-radio"
                                />
                                <label htmlFor="certificateEvet" className="form-radio-label">Evet</label>
                            </div>
                            <div className="radio-option">
                                <input
                                    type="radio"
                                    id="certificateHayir"
                                    name="certificate"
                                    value="hayır"
                                    checked={formData.certificate === "hayır"}
                                    onChange={handleChange}
                                    className="form-radio"
                                />
                                <label htmlFor="certificateHayir" className="form-radio-label">Hayır</label>
                            </div>
                        </div>
                        {errors.certificate && (
                            <small className="form-error">{errors.certificate}</small>
                        )}
                    </div>
                </div>
            )}
    
                {step === 5 && (
                    <div className="form-step">
                        <h2 className="step-title">Başvuru Tamamlandı</h2>
                        <p className="completion-message">
                            Teşekkürler, {formData.name} {formData.surname}, başvurunuz başarıyla alındı.
                        </p>
                        {formData.certificate === "evet" ? (
                            <>
                                <p className="completion-submessage">
                                    Sertifika almayı hak ediyorsunuz. Sertifikanız işleme alınacaktır.
                                </p>
                                <a href="/" className="button">Başvuru Sayfasına Geri Dön</a>
                            </>
                        ) : (
                            <div>
                                <p className="completion-submessage">
                                    Maalesef sertifika almayı hak etmediniz.
                                </p>
                                <a href="/" className="button">Başvuru Sayfasına Geri Dön</a>
                            </div>
                        )}
                    </div>
                )}
    
                <div className="form-navigation">
                    {step > 1 && step < 5 && (
                        <button type="button" onClick={handleBack} className="button button-back">
                            Geri
                        </button>
                    )}
                    {step < 4 && (
                        <button type="button" onClick={handleNext} className="button button-next">
                            İlerle
                        </button>
                    )}
                    {step === 4 && (
                        <button type="submit" className="button button-submit">Tamamla</button>
                    )}
                </div>
            </form>
        </div>
    );
}    