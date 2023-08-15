import styles from "../css/app.module.css";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer, Bounce } from "react-toastify";
import { LandingPage, SignUp, Login } from "../pages";
import { Profile, Ideas, Leaderboard, Task } from "../Dashboard/pages";

const App = () => {
  return (
    <div className={styles.app}>
      <ToastContainer transition={Bounce} />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/login" element={<Login />} />

          <Route path="/dashboard/profile" element={<Profile />} />
          <Route path="/dashboard/ideas" element={<Ideas />} />
          <Route path="/dashboard/leaderboard" element={<Leaderboard />} />
          <Route path="/dashboard/task" element={<Task />} />

          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
