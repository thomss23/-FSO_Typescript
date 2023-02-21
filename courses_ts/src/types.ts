export interface HeaderProps {
    courseName: string;
}

export interface ContentProps {
    courseParts : CoursePart[]
}

export interface PartProps {
    coursePart : CoursePart
}

export interface TotalProps {
    courseParts : CoursePart[]
}

interface CoursePartBase {
    name: string;
    exerciseCount: number;
}

interface CoursePartBaseDescription extends CoursePartBase {
    description: string;
}

interface CoursePartBasic extends CoursePartBaseDescription {
    kind: "basic"
}

interface CoursePartGroup extends CoursePartBase {
    groupProjectCount: number;
    kind: "group"
}

interface CoursePartBackround extends CoursePartBaseDescription {
    backroundMaterial: string;
    kind: "background"
}

interface CoursePartSpecial extends CoursePartBaseDescription {
    requirements: string[],
    kind: "special"
}
  
export type CoursePart = CoursePartBasic | CoursePartGroup | CoursePartBackround | CoursePartSpecial;
  