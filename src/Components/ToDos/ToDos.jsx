import "./ToDos.css"
import { Oneof } from "../Oneof/Oneof"

export const ToDos = ({ data, setdata}) => {
    
    return (
        <div className="ToDos">
            {data.map((el, index) => (
                <Oneof
                    key={index}
                    text={el.info}
                    data={data}
                    ind={index}
                    setdata={setdata} 
                />
            ))}
        </div>
    )
}
