import React from "react";
import links from "../data/links";
import "../components/App.css";

function App() {
  return (
    <div>
      <nav className="navbar navbar-drak bg-light">
        <form className="form-cls">
          <input
            placeholder="Search"
            onFocus={(e) => (e.target.placeholder = " ")}
            onBlur={(e) => (e.target.placeholder = "Search")}
            className="search-box mx-auto "
            type="text"
          ></input>
        </form>
      </nav>
      <main>
        <div className="container">
          {links.map((link) => (
            <div className="row">
              <div className="text-center">
                <div className="card mt-3">
                  {" "}
                  <div className="card-body">
                    <center>
                      <h6 class="card-title">{link.NAME}</h6>

                      <a href={link.LINK} className="card-link">
                        Download
                      </a>
                    </center>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}

// {links.map((link) => (
//   <div>{link.NAME + " " + link.LINK}</div>
// ))}

export default App;
