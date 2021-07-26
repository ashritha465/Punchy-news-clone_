import React from 'react'
import { Image } from "react-bootstrap";
function NewsImage(props) {
    return (
        <div>
            <Image
              src={props.image_url}
              rounded
              fluid
            />
        </div>
    )
}

export default NewsImage

