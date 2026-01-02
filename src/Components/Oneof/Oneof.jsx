import './Oneof.css'
import { useState } from 'react'
export const Oneof = ({ text, data, ind, setdata }) => {
    const [isRead, setIsRead] = useState(true)
    const [value, setValue] = useState(text)
    function edit(e) {
        if (isRead == true) {
            setIsRead(false)
        } else if (value.trim() !== "") {
            setIsRead(true)
        }
        const newData = [...data]
        newData[ind].info = value
        setdata(newData)
    }
    function deleter(e) {
        const newData = [...data]
        newData.splice(ind, 1)
        setdata(newData)
    }
    function isdone(e) {
        const newData = [...data]
        newData[ind] = { ...newData[ind] }
        newData[ind].isdone = !newData[ind].isdone
        setdata(newData)
    }
    function saveEdit(e) {
        e.preventDefault()
        if (!value.trim()) return
        setIsRead(true)
        const newData = [...data]
        newData[ind].info = value 
        setdata(newData)
    }
    return (
        <form className={data[ind].isdone?"oneofbox donecolor":"oneofbox"} onSubmit={saveEdit}>
            <input type="text" value={value}
                id={`todoInp${ind}`}
                readOnly={isRead}
                className={data[ind].isdone ? "todoIsDone inpu" : !isRead ? "onedit inpu" : "inpu"}
                onChange={(e) => setValue(e.target.value)} />
            <img src="https://cdn-icons-png.flaticon.com/512/6459/6459980.png" onClick={isdone} className='done' />
            <img src="https://icons.veryicon.com/png/o/miscellaneous/linear-small-icon/edit-246.png" onClick={edit} className="edit" />
            <img src="https://cdn-icons-png.flaticon.com/512/6861/6861362.png" onClick={deleter} className="delete" />
        </form>
    )
}