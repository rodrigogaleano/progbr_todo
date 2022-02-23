import React from "react";
import Cards from "./Card";

function ListItem(props) {

    function DoneImg(props) {
        if (props.done) {
            return (<img src="./assets/on.png" alt="done"></img>);
        } else {
            return (<img src="./assets/off.png" alt="undone"></img>);
        }
    }

    return (


        <li>
            <Cards className={props.item.done ? "done item" : "item"}>
                {props.item.text}
                <div>
                    <button onClick={() => { props.onDone(props.item) }}>
                        <DoneImg done={props.item.done} />
                    </button>

                    <button onClick={() => { props.onItemDeleted(props.item) }}>
                        <img src="./assets/bin.png" alt="bin"></img>
                    </button>
                </div>
            </Cards>
        </li>

    );



}

export default ListItem;