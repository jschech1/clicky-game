import React from "react";


const styles ={
    card: {
        display: "inline-block",
        position: "relative",
        background: "white",
        textAlign: "left",
        borderRadius: 5,
        margin: "1%",
        boxShadow: "0 3px 6px #999, 0 3px 6px #999"
    },
    img: {
        // height: "100%",
        overflow: "hidden",
        textAlign: "center",
        background: "white",
        height: 100,
        width: 220,
        marginRight: "4%",
        padding: 10
    }
}



const Card = props => (
    <div className="card" style={styles.card} onClick={() => props.clickCount(props.id)}>
        <div className="img" >
            <img alt={props.name} src={props.image} style={styles.img} />
        </div>

    </div>
);

export default Card;