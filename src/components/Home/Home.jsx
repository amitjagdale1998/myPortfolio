import React from "react";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import YouTubeIcon from "@mui/icons-material/YouTube";
import InstagramIcon from "@mui/icons-material/Instagram";
import downloadResume from "../common/downloadResume";
import GitHubIcon from "@mui/icons-material/GitHub";
import "./Home.css";
const Home = () => {
  function email() {
    alert("amitjagdale1998@gmail.com");
  }

  var words = ["MERNstack Dev", "FullStack Dev", "Web Dev", "Web Designer"];
  var part;
  var i = 0;
  var offset = 0;
  var len = words.length;
  var forwards = true;
  var skip_count = 0;
  var skip_delay = 15;
  var speed = 80;

  // var wordflick = function () {
  //   setInterval(function () {
  //     if (forwards) {
  //       if (offset >= words[i].length) {
  //         ++skip_count;
  //         if (skip_count == skip_delay) {
  //           forwards = false;
  //           skip_count = 0;
  //         }
  //       }
  //     }
  //     else {
  //       if (offset == 0) {
  //         forwards = true;
  //         i++;
  //         offset = 0;
  //         if (i >= len) {
  //           i = 0;
  //         }
  //       }
  //     }
  //     part = words[i].substring(0, offset);
  //     if (skip_count == 0) {
  //       if (forwards) {
  //         offset++;
  //       }
  //       else {
  //         offset--;
  //       }
  //     }
  //     document.querySelector('.word').textContent = part;
  //   }, speed);
  // };
  var words = ["MERNstack Dev", "FullStack Dev", "Web Dev", "Web Designer"];
  var part;
  var i = 0;
  var offset = 0;
  var len = words.length;
  var forwards = true;
  var skip_count = 0;
  var skip_delay = 15;
  var speed = 80;

  var wordflick = function () {
    var lastFrameTime = null;
    var update = function (currentTime) {
      if (!lastFrameTime) lastFrameTime = currentTime;
      var deltaTime = currentTime - lastFrameTime;
      if (deltaTime >= speed) {
        lastFrameTime = currentTime;
        if (forwards) {
          if (offset >= words[i].length) {
            ++skip_count;
            if (skip_count == skip_delay) {
              forwards = false;
              skip_count = 0;
            }
          }
        } else {
          if (offset == 0) {
            forwards = true;
            i++;
            offset = 0;
            if (i >= len) {
              i = 0;
            }
          }
        }
        part = words[i].substring(0, offset);
        if (skip_count == 0) {
          if (forwards) {
            offset++;
          } else {
            offset--;
          }
        }
        document.querySelector(".word").textContent = part;
      }
      requestAnimationFrame(update);
    };
    requestAnimationFrame(update);
  };

  window.addEventListener("load", function () {
    wordflick();
  });

  return (
    <div className="home-page">
      {/* <WordFlick/> */}
      <div className="container ">
        <div className="row mt-5">
          <div className="col home-container  " id="self-image" align="center">
            <img
              className="image"
              src="https://www.linkpicture.com/q/1686658730159-removebg-preview-1.jpg"
            ></img>
          </div>
          <div className="col home-container">
            <div className="media-icons">
              <a href="https://github.com/amitjagdale1998" target="_blank">
                <GitHubIcon fontSize="large" />
              </a>
              <a
                href="https://www.linkedin.com/in/amitjagdale1998"
                target="_blank"
              >
                <LinkedInIcon fontSize="large" />
              </a>
              <a
                style={{ color: "red" }}
                href="https://www.youtube.com/@prosoftdev/playlists"
                target="_blank"
              >
                <YouTubeIcon fontSize="large" />
              </a>

              <InstagramIcon fontSize="large" />
            </div>
            <p style={{ fontSize: "2vw" }} className="myname">
              Hello,I'M{" "}
              <span
                style={{
                  color: "orangered",
                  fontFamily: "serif",
                }}
              >
                AMIT
              </span>{" "}
            </p>
            <div className="word"></div>

            <span
              style={{
                fontSize: "1.5vw",
              }}
              className="myname"
            >
              Knack of building applications with front and back-end operations.
            </span>
            <div className="btns mt-3" align="center">
              <button id="btn1" onClick={email}>
                Hire me
              </button>
              <button id="btn2" onClick={downloadResume}>
                Resume
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
