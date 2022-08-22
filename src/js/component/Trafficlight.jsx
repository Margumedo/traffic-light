import React,{useState} from "react";              // Primero importo React desde la libreria React



const TrafficLight = () => {               //Segundo declaro mi componente funcional y en Mayuscula
  
const [color,setColor] = useState("")

  
    return (
<>
        <div className="pole"></div>
        <div className="traffic-light">
            <div onClick={()=> setColor("red")} className={"red light"    + (color === "red"    ? " glow" : "")}></div>
            <div onClick={()=> setColor("yellow")} className={"yellow light" + (color === "yellow" ? " glow" : "")}></div>
            <div onClick={()=> setColor("green")} className={"green light"  + (color === "green"  ? " glow" : "")}></div>
        </div>
</>
    );
}


export default TrafficLight;            // Por ultimo exporto mi componente para que pueda ser leido en el layout