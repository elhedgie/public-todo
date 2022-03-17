import React from "react";

function Button (props) {
    return(
        <button {...props} className="my-button">{props.children}</button>
    )
}

export default Button