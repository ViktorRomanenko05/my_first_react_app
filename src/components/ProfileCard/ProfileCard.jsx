import "./styles.css";
import { personData } from "./data";

function LessonCard() {
    return (
        <div className="profile-card">
            <div className="profile-card_header">
            <h3>User profile</h3>
            </div>
            <img
                src={personData.photo}
                alt="Фото пользователя"
            />
            <p><span>Name:</span> {personData.name}</p>
            <p><span>Profession:</span> {personData.profession}</p>
            <p><span>Hobby:</span> {personData.hobby}</p>
        </div>
    );
}

export default LessonCard;