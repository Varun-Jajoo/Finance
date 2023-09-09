import React, { useState } from "react";
import { HiTrophy } from "react-icons/hi2";
import trophy from "../images/44124-removebg-preview.png";
import calc from "../images/3d-calculator_10473465.png";
import piggy from "../images/piggy-bank_1511168.png";
import alert from "../images/notification_6206466.png";
import bar from "../images/bar-chart_9952711.png";
import benefit from "../images/benefits_9512431.png";
import rank from "../images/silver-medal_3188893.png";
import point from "../images/coin_9590150.png";
import quiz from "../images/search_3277438.png"
import study from "../images/education_3181724.png"
import video from "../images/video_7214114.png"
import walkthrough from "../images/team_9068396.png"

import "../css/gg.css";
export default function GG() {
  const [level, setlevel] = useState(0);
  const [display, setdisplay] = useState(false);
  return (
    <div style={{position:"relative"}}>
      <div className="top">
        <div className="trophy">
          <img src={trophy} alt="" style={{ height: "100px" }} />
        </div>
        <div className="level">Current Level : {level} </div>
        <div className="graph">
          <img src={bar} alt="" style={{ height: "70px" }} />
        </div>
      </div>
      <div className="status">
        <div id="rank" className="card">
          <img src={rank} alt="" style={{ height: "90px" }} />
          <div className="topcard">
            <span style={{ fontWeight: "bold", fontSize: "1.5em" }}>Rank</span>
            <span>
              Level 2/<span style={{ fontSize: "14px" }}>Level 5</span>
            </span>
          </div>
        </div>
        <div id="points" className="card">
          <img src={point} alt="" style={{ height: "90px" }} />
          <div className="topcard">
            <span style={{ fontWeight: "bold", fontSize: "1.5em" }}>
              Points
            </span>
            6969
          </div>
        </div>
      </div>
      <div className="courses">
        <div class="cards">
          <div
            class="card1 red"
            onClick={() => {
              setdisplay(!display);
            }}
          >
            <img src={calc} alt="" style={{ height: "120px" }} />
            <div className="text">
              <span className="tip">Basics of Finance</span> <br />
              <div style={{ whiteSpace: "nowrap" }}>
                <span className="second-text">
                  Level 2/<span style={{ fontSize: "14px" }}>Level 5</span>
                </span>
              </div>
              <progress value="75" max="100"></progress>
            </div>
          </div>
          <div
            class="card1 blue"
            onClick={() => {
              setdisplay(!display);
            }}
          >
            <img src={piggy} alt="" style={{ height: "120px" }} />
            <div className="text" style={{ margin: "0" }}>
              <span className="tip">Entreprenuship Guide</span> <br />
              <div style={{ whiteSpace: "nowrap" }}>
                <span className="second-text">
                  Level 2/<span style={{ fontSize: "14px" }}>Level 5</span>
                </span>
              </div>
              <progress value="75" max="100"></progress>
            </div>
          </div>
          <div
            class="card1 orange"
            onClick={() => {
              setdisplay(!display);
            }}
          >
            <img src={alert} alt="" style={{ height: "120px" }} />
            <div className="text">
              <span className="tip">Scam Prevention</span> <br />
              <div style={{ whiteSpace: "nowrap" }}>
                <span className="second-text">
                  Level 2/<span style={{ fontSize: "14px" }}>Level 5</span>
                </span>
              </div>
              <progress value="75" max="100"></progress>
            </div>
          </div>
          <div class="card1 green" onClick={() => {
                setdisplay(!display);
              }}>
            <img
              src={benefit}
              alt=""
              style={{ height: "120px" }}
              
            />
            <div className="text" style={{ margin: 0 }}>
              <span className="tip">Why Financial literacy?</span> <br />
              <div style={{ whiteSpace: "nowrap" }}>
                <span className="second-text">
                  Level 2/<span style={{ fontSize: "14px" }}>Level 5</span>
                </span>
              </div>
              <progress value="75" max="100"></progress>
            </div>
          </div>
        </div>
      </div>
      {display?(<>
      <div className="popup">
       <div className="tip" style={{marginTop:"20px"}}>Learn about Basics of Finance</div> 
      <div className="edu">
        
        <div className="popcard" id="study">
            <img style={{height:"120px" ,marginBottom:"20px"}} src={study} alt="" />
            <div className="poptext">Learn and Study</div>
        </div>
        <div className="popcard" id="quiz">
            <img style={{height:"120px",marginBottom:"20px"}} src={quiz} alt="" />
            <div className="poptext">Take Quiz</div>
        </div>
        <div className="popcard" id="walk">
            <img style={{height:"120px" ,marginBottom:"20px"}} src={walkthrough} alt="" />
            <div className="poptext">Walkthrough</div>
        </div>
        <div className="popcard" id="video">
            <img style={{height:"120px" ,marginBottom:"20px"}} src={video} alt="" />
            <div className="poptext">Video Tutorials</div>
        </div>
        </div>
      </div> </>):<></>
}
    </div>
  );
}
