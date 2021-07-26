import React, { useState } from "react";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fab } from "@fortawesome/free-brands-svg-icons";
import { fas } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./VoiceSocial.css";
function VoiceSocial(props) {
  const [speaking, setSpeaking] = useState(0);
  const iconState = speaking === 0 ? "volume-down" : "volume-up";
  function HandleSpeech() {
    if (speaking === 0) {
      setSpeaking(1);
      var msg = new SpeechSynthesisUtterance();
      msg.text = props.heading_note + " " + props.content;
      window.speechSynthesis.speak(msg);
    } else {
      window.speechSynthesis.cancel();
      setSpeaking(0);
    }
  }

  return (
    <div className="icondiv">
      <div className="right">
        <a href="https://www.facebook.com/" target="_blank">
          <FontAwesomeIcon
            icon={["fab", "facebook"]}
            size="2x"
            style={{ color: "rgb(59,89,152)" }}
          />
        </a>
        &nbsp; &nbsp;
        <a href="https://twitter.com/login" target="_blank">
          <FontAwesomeIcon
            icon={["fab", "twitter"]}
            size="2x"
            style={{ color: "rgb(0,172,238)" }}
          />
        </a>
        &nbsp; &nbsp;
        <a href="https://www.linkedin.com/feed/" target="_blank">
          <FontAwesomeIcon
            icon={["fab", "linkedin"]}
            size="2x"
            style={{ color: "rgb(14,118,168)" }}
          />
        </a>
        &nbsp;
      </div>
      <div className="left">
        <button onClick={HandleSpeech} className="stylevoicebutton">
          <FontAwesomeIcon
            icon={["fas", iconState]}
            size="2x"
            style={{ color: "rgb(241,141,192)" }}
          />
        </button>
        &nbsp; &nbsp;
        <a href="www.google.com" target="_blank">
          <FontAwesomeIcon
            icon={["fas", "paste"]}
            size="2x"
            style={{ color: "rgb(241,141,192)" }}
          />
        </a>
      </div>
    </div>
  );
}

export default VoiceSocial;
