interface BMIValues {
    height: number,
    weight: number
}

interface ExerciseInputValues {
    target: number,
    dailyExerciseHours: number[]
}


export const isNotNumber = (argument: any): boolean => isNaN(Number(argument));

export const parseArgumentsForBMICalculator = (args: string[]) : BMIValues => {
    if (args.length < 4) throw new Error('Not enough arguments');
    if (args.length > 4) throw new Error('Too many arguments');
  
    if (!isNotNumber(args[2]) && !isNotNumber(args[3])) {
      return {
        height: Number(args[2]),
        weight: Number(args[3])
      };

    } else {
      throw new Error('Provided values were not numbers!');
    }
};

export const parseArgumentsForExerciseCalculator = (args: string[]) : ExerciseInputValues => {
    if (args.length < 3) throw new Error('Not enough arguments');

    if (isNotNumber(args[2])) {
        throw new Error(`Provided target value ${args[2]} is not a number!`);
    }

    const dailyExerciseHours = [];

    for(let i = 3; i < args.length; i++) {
        if (isNotNumber(args[i])) {
            throw new Error(`Provided exercise value ${args[i]} is not a number!`);
        }
        dailyExerciseHours.push(Number(args[i]));
    }
    return {
        target : Number(args[2]),
        dailyExerciseHours : dailyExerciseHours
    };
};