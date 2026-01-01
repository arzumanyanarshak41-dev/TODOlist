import './Oneof.css'
import { useState } from 'react'
export const Oneof = ({ text, data, ind, setdata }) => {
    const [isRead, setIsRead] = useState(true)
    const [value, setValue] = useState(text) 
    function edit(e) {
        if(isRead==true){
            setIsRead(false)
        }else{
            setIsRead(true)
        }
    }
    function editdone(e) {
        if (e.key == "Enter") {
            setIsRead(true)
            const newData = [...data]
            newData[ind] = value
            setdata(newData)
        }
    }
    function deleter(e) {
        const newData = [...data]
        newData.splice(ind, 1)
        setdata(newData)
    }
    function isdone(){
        
    }
    return (
        <div className="oneofbox">
            <input type="text" value={value}
                disabled={isRead}
                onKeyDown={(e) => editdone(e)}
                onChange={(e) => setValue(e.target.value)} /> {/* //??????????????????????? */}
                <img src="https://cdn-icons-png.flaticon.com/512/6459/6459980.png" className="done" />
            <img src="https://icons.veryicon.com/png/o/miscellaneous/linear-small-icon/edit-246.png" className="edit" onClick={(e) => { edit(e) }} />
            <img src="https://cdn-icons-png.flaticon.com/512/6861/6861362.png" className="delete" onClick={(e) => { deleter(e) }} />
        </div>
    )
}