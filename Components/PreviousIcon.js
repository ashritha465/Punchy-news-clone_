import React from 'react'
import './PreviousIcon.css'
import { Button } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
function PreviousIcon(props) {
    return (
        <div>
            <div className="previousicon">
            <Button variant="rgb(241,141,192)"
              onClick={props.onPrevHandle}
            ><FontAwesomeIcon
                icon={["fas", "arrow-left"]}
                size="2x"
                style={{ color: "rgb(241,141,192)" }}
              /></Button>
            </div>
        </div>
    )
}

export default PreviousIcon
