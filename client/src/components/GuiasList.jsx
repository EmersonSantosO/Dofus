import { useEffect, useState } from "react";
import { getAllGuias } from "../api/guias.api";

export function GuiasList() {
    const [guias,setGuias] = useState();

    useEffect(()=>{

            async function loadGuias() {
            const res = await getAllGuias()
            setGuias(res.data)
            console.log(res)
        } 
        loadGuias();
    },
    [

    ])
    return <div>
        {guias.map(guias =>(
            <div>
                <h1>{guias.}</h1>
            </div>
        ))}
        </div>
    
    
}