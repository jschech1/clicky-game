import React from "react";
import Background from "./Images/coding-background.png";



const styles = {
    wrapper: {
       backgroundImage: `url(${Background})`
    }
}

const Wrapper = props => <div className="wrapper" style={styles.wrapper}>{props.children}</div>;

export default Wrapper;