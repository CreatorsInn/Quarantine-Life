import React from "react";
import links from "../data/links";
import "../components/App.css";

const handleChange = (e, setLinksToShow) => {
  e.preventDefault();
  const searchString = document
    .getElementById("searchText")
    .value.toString()
    .toLowerCase();
  const linksToShow = links.filter((link) =>
    link.NAME.toLowerCase().includes(searchString)
  );
  console.log(linksToShow);
  setLinksToShow(linksToShow);
};

function App() {
  const [linksToShow, setLinksToShow] = React.useState(links);
  const [modelOpen, setModelOpen] = React.useState(false);

  return (
    <div>
      <nav className="navbar sticky-top navbar-drak bg-light nav">
        <input
          placeholder="Search"
          onFocus={(e) => (e.target.placeholder = " ")}
          onBlur={(e) => (e.target.placeholder = "Search")}
          onChange={(e) => handleChange(e, setLinksToShow)}
          className="search-box mx-auto "
          type="text"
          id="searchText"
          autocomplete="off"
        ></input>
      </nav>
      <main>
        <div className="container">
          {linksToShow.length === 0 ? (
            <center>
              <h6 class="card-title">Not Found</h6>
            </center>
          ) : (
            linksToShow.map((link) => (
              <div className="row">
                <div className="col-md-12">
                  <div className="card  mt-3 mb-3">
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
            ))
          )}
        </div>
      </main>
      <dialog
        open={modelOpen ? true : false}
        onBlur={(e) => (e.target.open = false)}
        id="model"
      >
        <center>
          <form
            action="https://smartforms.dev/submit/5e8b7264d7d0665194d11f0c"
            method="POST"
            className="form-cls"
          >
            <input
              placeholder="Search"
              onFocus={(e) => (e.target.placeholder = " ")}
              onBlur={(e) => (e.target.placeholder = "Search")}
              type="text"
              name="name"
              className="search-box"
            />
            <input
              placeholder="Search"
              onFocus={(e) => (e.target.placeholder = " ")}
              onBlur={(e) => (e.target.placeholder = "Search")}
              type="email"
              name="email"
              className="search-box"
            />
            <input
              placeholder="Search"
              onFocus={(e) => (e.target.placeholder = " ")}
              onBlur={(e) => (e.target.placeholder = "Search")}
              type="text"
              name="tel"
              className="search-box"
            />
            <button
              type="submit"
              onClick={(e) => e.preventDefault()}
              className="search-box"
            >
              Send
            </button>
            <button
              type="button"
              onClick={(e) => setModelOpen(false)}
              className="search-box"
            >
              Close
            </button>
          </form>
        </center>
      </dialog>
      <footer>
        <i
          className="fa fa-plus float"
          onClick={(e) => {
            e.preventDefault();
            setModelOpen(!modelOpen);
          }}
        ></i>
      </footer>
    </div>
  );
}

export default App;
