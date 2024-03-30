import "bootstrap/dist/css/bootstrap.min.css";
import React, { lazy, Suspense } from "react";
import ReactDOM from "react-dom";
import "./index.css";

// const StudentForm = lazy(() => import("StudentForm/form"));
import StudentForm from "StudentForm/form";

const App = () => (
  <>
    <nav className="navbar navbar-light bg-primary">
      <div className="container">
        <a className="navbar-brand" href="#">
          StudentApp2
        </a>
      </div>
    </nav>
    <main className="container mt-5">
      <StudentForm />
      {/* <Suspense fallback={<span>Loading...</span>}>
        <A />
      </Suspense> */}
    </main>
  </>
);

ReactDOM.render(<App />, document.getElementById("app"));
