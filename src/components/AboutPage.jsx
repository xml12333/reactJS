import { Link } from "react-router-dom";

function AboutPage() {
  return (
    <div className="result">
      <h3>About This Project</h3>
        <p>This is a React app wiki search</p>
        <p>Version: 1.0.0</p>

        <p>
          <Link to="/">Back To Home</Link>
        </p>
    </div>
  );
}

export default AboutPage;
