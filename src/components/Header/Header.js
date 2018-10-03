import React from "react";

const styles ={
    header: {
        textAlign: "center",
        lineHeight: "150%",
        fontSize: 30,
        marginTop: 20

    }
}


const Header = props => (
    <div className="header" style={styles.header}>
    <div className="title">{props.children}</div>
    <div className="scores"><strong>Score: {props.score} Highscore: {props.highscore}</strong></div>
    </div>
);

export default Header;