import { useState, useEffect } from "react"

function Docs() {
// reglas de los hooks
// 1. deben estar dentro del componente, no pueden estar ni fuera del componente ni después del return
// 2. no deben estar dentro de un scope (condicionales, ciclos y funciones)
// 3.
const [number, setNumber] = useState(1000)
const [isView, setIsView] = useState(false)

const sumar = ()=> {
  setNumber(9000 + 1)
}
// se ejecuta cada vez que cambia el estado
// useEffect(()=>{
//   sumar()
//   console.log("useEffect")
// })

// se ejecuta solamente la primera vez que carga el componente, le pasamos un segundo parámetro, un arreglo de dependencias
// useEffect(()=>{
//   sumar()
//   console.log("useEffect")
// }, [])

// se ejecuta cada que cambia el estado de la dependencia
// useEffect(()=>{
//   sumar()
//   console.log("useEffect")
// }, [isView])

// se ejecuta al momento de que desmonta el componente
useEffect(()=>{

  return() =>{
    console.log("Desmontar")
  }
}, [])

  return (
    <div className="app text-white">
      <p className="text-danger">Consumo de APIs con React</p>
      <h2>{number}</h2>
      <button className="d-block btn btn-primary" onClick={()=> setNumber(number + 1)} 
      >
        Sumar
        </button>
        <button className="d-block btn btn-info"onClick={()=> setIsView(!isView)}>Visible</button>
        {
          isView && <p>Es visible</p>
        }
    </div>
  )
}

export default Docs
