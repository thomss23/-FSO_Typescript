
export const calculateBmi = (height: number, weight: number) : string => {
    // const {height, weight} = parseArgumentsForBMICalculator(process.argv)
    const heightInMeters : number = height / 100;

    const result : number = (weight / heightInMeters ** 2);

    if (result < 18.5) {
        return "Underweight";
    } else if (result >= 18.5 && result <= 24.9) {
        return "Normal Weight";
    } else if (result >= 25.0 && result <= 29.9) {
        return "Obesity (Class 1)";
    } else if ( result >= 30.0 && result <= 34.9) {
        return "Obesity (Class 2)";
    } else if (result >= 35.0 && result <= 39.9) {
        return "Obesity (Class 3)";
    } else if (result >= 40.0) {
        return "Obesity (Class 4)";
    }
    return "Undefined";
};

// console.log(calculateBmi())
