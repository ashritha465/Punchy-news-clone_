import React from 'react'
import './RefreshIcon.css';
import { Button } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
function RefreshIcon(props) {
    return (
        <div>
             <div className="refreshicon">
          <Button variant="rgb(241,141,192)" onClick={props.onRefreshHandle}>
            <FontAwesomeIcon
                icon={["fas", "sync"]}
                size="2x"
                style={{ color: "rgb(241,141,192)" }}
              />
              </Button>
            </div>
        </div>
    )
}

export default RefreshIcon
