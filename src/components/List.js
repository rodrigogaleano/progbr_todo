import React from "react";
import ListItem from "./ListItem";

function List(props) {



    return (
        <ul>
            {props.items.map(item =>
                <ListItem item={item} key={item.id} onDone={props.onDone} onItemDeleted={props.onItemDeleted} />
            )
            }
        </ul >
    );
}

export default List;