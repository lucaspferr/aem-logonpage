import React from "react";
import { MapTo } from "@adobe/aem-react-editable-components";

const ImageExample = ({ image = {}}) => {
    return <img src={image.src}/>;
}

ImageExample.defaultProps = {
    image: {
        src: "https://via.placeholder.com/150"
    }
}

export default MapTo('reactapp/components/image-example')(ImageExample);