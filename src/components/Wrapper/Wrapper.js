import React from "react";
// import Background from "../Images/coding-background.png";



const styles = {
    wrapper: {
        background: "#d3d3d3"
    }
}

const Wrapper = props => <div className="wrapper" style={styles.wrapper}>{props.children}</div>;

export default Wrapper;