import React from 'react'
import './NextIcon.css'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Button } from "react-bootstrap";
function NextIcon(props) {
    return (
        <div>
             <div className="nexticon">
          <Button variant="rgb(241,141,192)" onClick={props.onNextHandle}>
            <FontAwesomeIcon
                icon={["fas", "arrow-right"]}
                size="2x"
                style={{ color: "rgb(241,141,192)" }}
              /></Button>
            </div>
        </div>
    )
}
export default NextIcon
