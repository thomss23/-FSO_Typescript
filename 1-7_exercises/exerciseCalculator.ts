
interface Result {
    periodLength: number,
    trainingDays : number,
    success : boolean, 
    rating : number,
    ratingDescription : string,
    target: number,
    average: number
}

export const calculateExercises = (dailyExerciseHours: number[], target: number) : Result => {

    const periodLength = dailyExerciseHours.length;
    const trainingDays = dailyExerciseHours.filter(exercise => exercise > 0).length;
    const success = trainingDays === target;
    const rating = calculateRating(trainingDays, periodLength);
    const ratingDescription = createDescriptionFromRating(rating);
    const average = dailyExerciseHours.reduce((a, b) => a + b, 0) / dailyExerciseHours.length;

    return { periodLength, trainingDays, success, rating, ratingDescription, target, average };
};

const calculateRating = (trainingDays: number, periodLength: number): number => {
    
    return trainingDays > 0 && trainingDays <= periodLength / 3 
        ? 1
        : trainingDays > periodLength / 3 &&  trainingDays <= periodLength / 2
            ? 2
            : trainingDays > periodLength / 2
                ? 3
                : 0;
};

const createDescriptionFromRating = (rating: number): string => {
    switch (rating) {
        case 1:
            return "doing really bad";
        case 2:
            return "not too bad but could be better";
        case 3:
            return "excellent";
        default:
            return "invalid rating";
    }
};
