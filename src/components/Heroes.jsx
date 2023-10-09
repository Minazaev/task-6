import { useState } from "react";


function Heroes() {

    const [names, setNames] = useState([
        "Шерлок Холмс", 
        "Доктор Ватсон", 
        "Профессор Мориарти",
        "Миссис Хадсон",
        "Ирен Адлер"])

const names2 = names.map(item => {
    return(
        <ul>
            <li>{item}</li>
        </ul>
    )
}   
)

return(<div>
    {names2}
</div>)
}

export default Heroes;


// return(<div>
//     <ul>
//         <li>{item[0]}</li>
//     </ul>
// </div>)