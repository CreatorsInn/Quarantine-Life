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
                <div className="text-center col">
                  <div className="card mt-3 mb-3">
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
      <footer>
        <i
          class="fa fa-plus float"
          onClick={(e) => console.log("Clicked")}
          aria-hidden="true"
          data-toggle="modal"
          data-target="#model"
        ></i>
        <div
          class="modal fade"
          id="model"
          tabindex="-1"
          role="dialog"
          aria-labelledby="exampleModalCenterTitle"
          aria-hidden="true"
        >
          <div class="modal-dialog modal-dialog-centered" role="document">
            <div class="modal-content">
              <div class="modal-header">
                <h5 class="modal-title" id="exampleModalCenterTitle">
                  Contribute
                </h5>
                <form action="https://smartforms.dev/submit/5e8b7264d7d0665194d11f0c" method="POST" >
                  <input type="text" name="name"/>
                  <input type="email" name="email"/>
                  <input type="text" name="tel"/>
                  <button type="submit">Send</button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
