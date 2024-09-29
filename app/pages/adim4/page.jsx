import Link from "next/link";
export default function adim4() {

    return (
        <div>
            <h1>Öğrenci Kayıt - Adım 4</h1>
            <form>
                <p>
                    <label>Ödevler Tamamlandı mı?</label>
                    <input type="radio" name="homeworkCompleted" value="yes" /> Evet
                    <input type="radio" name="homeworkCompleted" value="no" /> Hayır
                </p>
                <p>
                    <label>Sınıfta Derse Katılım?</label>
                    <input type="radio" name="classParticipation" value="yes" /> Evet
                    <input type="radio" name="classParticipation" value="no" /> Hayır
                </p>
                <p>
                    <label>Proje Geliştirdi mi?</label>
                    <input type="radio" name="developedProject" value="yes" /> Evet
                    <input type="radio" name="developedProject" value="no" /> Hayır
                </p>
                <p>
                    <label>Her Zaman Ders Saatinde Geldi mi?</label>
                    <input type="radio" name="onTime" value="yes" /> Evet
                    <input type="radio" name="onTime" value="no" /> Hayır
                </p>
                <p>
                    <label>Derse Odaklandı mı?</label>
                    <input type="radio" name="focused" value="yes" /> Evet
                    <input type="radio" name="focused" value="no" /> Hayır
                </p>
                <p>
                    <label>Sertifika Almayı Hak Etti mi?</label>
                    <input type="radio" name="certificate" value="yes" /> Evet
                    <input type="radio" name="certificate" value="no" /> Hayır
                </p>
                <Link href="/">
                    <button type="button" >
                        Tamamla
                    </button>
                </Link>
            </form>
        </div>
    );
}