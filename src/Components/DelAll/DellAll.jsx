import "./DellAll.css"
export const DelAll = ({ data,setdata }) => {
    if (data.length == 0) return null
    return (
        <div className="allDelBox">
            <p>Delete All TODO`s</p>
            <button onClick={() => setdata([])}>Delete</button>
        </div>
    )
}