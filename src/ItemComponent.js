import React from "react";

export default function ItemComponent(props){
    const status = props.status
    return(
        <div>
            <li>{props.name} Status: { status ? <p>Finalizado</p> : <p>Não Finalizado</p>}</li>
        </div>
    )
}