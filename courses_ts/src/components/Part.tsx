import { PartProps } from "../types";

const Part = (props: PartProps) => {
    const { coursePart } = props;

    const assertNever = (value: never): never => {
        throw new Error(`Unhandled discriminated union member: ${JSON.stringify(value)}`);
    };

    switch (coursePart.kind) {
        case "basic":
          return (
            <div>
              <p>
                {coursePart.name} {coursePart.exerciseCount} {coursePart.description}
              </p>
            </div>
          );
        case "group":
          return (
            <div>
              <p>
                {coursePart.name} {coursePart.exerciseCount} {coursePart.groupProjectCount}
              </p>
            </div>
          );
        case "background":
          return (
            <div>
              <p>
                {coursePart.name} {coursePart.exerciseCount} {coursePart.description} {coursePart.backroundMaterial}
              </p>
            </div>
          );
        case "special":
          return (
            <div>
              <p>
                {coursePart.name} {coursePart.exerciseCount} {coursePart.description} {coursePart.requirements.join(", ")}
              </p>
            </div>
          );
        default:
          return assertNever(coursePart);
    }
      
};

export default Part;