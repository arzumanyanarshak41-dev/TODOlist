import { useState } from "react"
import "./ListBody.css"
import { ToDos } from "../ToDos/ToDos"
import { DelAll } from "../DelAll/DellAll"
export const ListBody = () => {
    const [data, setdata] = useState([])
    const [info, setInfo] = useState("")
    function setOnData(e) {
        e.preventDefault()
        if (info.trim() === "" || data.some(item => item.info === info)) return
        
        setdata([
            ...data,
            {
                id: Date.now(),
                info: info.trim(),
                done: false
            }
        ])
        setInfo("")
    }
    return (
        <div className="container">
            <div className="ListBody">
                <h1>TODO list</h1>
                <form className="inpbox" onSubmit={setOnData}>
                    <input type="text" className="adder" onChange={(e) => setInfo(e.target.value)} value={info} />
                    <button className="addbut">+</button>
                </form>
                <ToDos data={data} setdata={setdata} />
                <DelAll data={data} setdata={setdata} />
            </div>
        </div>
    )
}