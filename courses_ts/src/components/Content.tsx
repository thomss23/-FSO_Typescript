import { ContentProps } from "../types"
import Part from "./Part"

const Content = (props: ContentProps) => {
    return(
        <div>
            {props.courseParts.map(part => {
                return <Part key={part.name} coursePart={part}/>
            })}
        </div>
        // <>
        // {props.courseParts.forEach(part => {
        //     return <Part key={part.name} coursePart={part}></Part>
        // })}
        //     <p>
        //         {props.courseParts[0].name} {props.courseParts[0].exerciseCount}
        //     </p>
        //     <p>
        //         {props.courseParts[1].name} {props.courseParts[1].exerciseCount}
        //     </p>
        //     <p>
        //         {props.courseParts[2].name} {props.courseParts[2].exerciseCount}
        //     </p>
        // </>
    )
}

export default Content