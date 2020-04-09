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
      <nav
        className="navbar sticky-top navbar-drak bg-light nav"
        onClick={(e) => setModelOpen(false)}
      >
        <input
          placeholder="Search"
          onFocus={(e) => (e.target.placeholder = "")}
          onBlur={(e) => (e.target.placeholder = "Search")}
          onChange={(e) => handleChange(e, setLinksToShow)}
          className="search-box mx-auto "
          type="text"
          id="searchText"
          autocomplete="off"
        ></input>
      </nav>{" "}
      <main>
        {!modelOpen ? (
          <React.Fragment>
            {linksToShow.length === 0 ? (
              <center>
                <h6 className="card-title">Not Found</h6>
              </center>
            ) : (
            <React.Fragment>
             <h6 className="text-center mt-3 mb-3">
        <strong>NOTE : </strong>Use torrent clients like bitTorrent , μTorrent
        etc. to download.
      </h6>
              {linksToShow.map((link) => (
                <div className="row fullWidth">
                  <div className="col-md-12 fullWidth">
                    <div className="card  mt-3 mb-3">
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
              )) }
              </React.Fragment>
            )}
          </React.Fragment>
        ) : (
          <div className="row fullWidth">
            <div className="col-md-12 fullWidth">
              <div className="card  mt-3 mb-3 ">
                {" "}
                <div className="card-body">
                  <center>
                    <h6 class="card-title">Contribute</h6>
                    <form
                      action="https://formsubmit.co/quarantinelife.creators@gmail.com"
                      method="POST"
                      className="form-cls"
                    >
                      <label className="mt-2 mb-2 inputWidth">
                        Have any requests ? Let us know.
                      </label>
                      <br />
                      <label className="mt-2 mb-2 inputWidth">
                        Have any Links ? Join us now.
                      </label>
                      <input
                        type="text"
                        name="media"
                        className="form-control mt-2 mb-2 inputWidth"
                        id="formGroupExampleInput"
                        placeholder="Media Name"
                        onFocus={(e) => (e.target.placeholder = "")}
                        onBlur={(e) => (e.target.placeholder = "Media Name")}
                        autocomplete="off"
                      ></input>
                      <input
                        type="text"
                        name="link"
                        className=" form-control mt-2 mb-2 inputWidth"
                        id="formGroupExampleInput"
                        placeholder="Link ( if Any )"
                        onFocus={(e) => (e.target.placeholder = "")}
                        onBlur={(e) =>
                          (e.target.placeholder = "Link ( if Any )")
                        }
                        autocomplete="off"
                      ></input>
                      <input
                        type="hidden"
                        name="_next"
                        value={window.location.href}
                      ></input>
                      <input
                        type="hidden"
                        name="_captcha"
                        value="false"
                      ></input>
                      <label className="mt-2 mb-2 inputWidth">
                        Wanna be notified ? Give your mail id or Social Media
                        username . We'll ping you once your request is served.
                      </label>
                      <input
                        type="text"
                        name="contact"
                        className=" form-control mt-2 mb-2 inputWidth"
                        id="formGroupExampleInput"
                        placeholder="Contact Id ( Optional )"
                        onFocus={(e) => (e.target.placeholder = "")}
                        onBlur={(e) =>
                          (e.target.placeholder = "Contact Id ( Optional )")
                        }
                        autocomplete="off"
                      ></input>
                      <button
                        type="submit"
                        id="submit"
                        className="mx-2 qu-btn  mt-3"
                      >
                        Send
                      </button>
                      <button
                        type="button"
                        onClick={(e) => setModelOpen(false)}
                        className="mx-2  qu-btn  mt-3"
                      >
                        Close
                      </button>
                    </form>
                  </center>
                </div>
              </div>
            </div>
          </div>
        )}
      </main>
      <i
        className="fa fa-plus float"
        onClick={(e) => {
          e.preventDefault();
          setModelOpen(!modelOpen);
        }}
      ></i>
    </div>
  );
}

export default App;
