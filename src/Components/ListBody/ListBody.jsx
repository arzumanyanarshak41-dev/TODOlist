import { useState } from "react"
import "./ListBody.css"
import { ToDos } from "../ToDos/ToDos"
import { DelAll } from "../DelAll/DellAll"
export const ListBody = () => {
    const [data, setdata] = useState([])
    function setOnData(e) {
        e.preventDefault()
        let a = e.target.parentElement.querySelector("input")
        if (a.value.trim() !== "") {
            if (!data.includes(a.value.trim())) {
                setdata([...data, a.value.trim()])
            }
        } else { return }
        a.value = ""
    }
    return (
        <div className="container">
            <div className="ListBody">
                <h1>TODO list</h1>
                <form className="inpbox">
                    <input type="text" className="adder" />
                    <button className="addbut" onClick={(e) => { setOnData(e) }}>+</button>
                </form>
                <ToDos data={data} setdata={setdata} />
                <DelAll data={data} setdata={setdata}/>
            </div>
        </div>
    )
}