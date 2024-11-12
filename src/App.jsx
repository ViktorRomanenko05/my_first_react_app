import "./App.css";
import Button from "./components/Button/Button";
import LessonCard from "./components/lessonCard/LessonCard";
import ProfileCard from "./components/ProfileCard/ProfileCard";

function App() {
    return (
        <div className="App">
            <LessonCard />
            <Button />
            <Button />
            <ProfileCard />
            <ProfileCard />
            <ProfileCard />
        </div>
    );
}

export default App;