import express from 'express';
import { calculateBmi } from './bmiCalculator';
import { calculateExercises } from './exerciseCalculator';
import { isNotNumber } from './utils';
// const qs = require('qs')
const app = express();
app.use(express.json());


app.get('/hello', (_req, res) => {
  res.send('Hello World');
});

app.get('/bmi', (req, res) => {
    if (typeof req.query.height === 'string' && typeof req.query.weight === 'string') {
        const height = Number.parseInt(req.query.height);
        const weight =  Number.parseInt(req.query.weight);

        if (isNotNumber(height) || isNotNumber(weight)) {
            res.send("malformated parameters");
        } else {
            res.send(calculateBmi(height, weight));
        }

    }
    res.send("Params not sent");
});


app.post('/exercises', (req, res) => {

    // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
    const {daily_exercises, target} = req.body;

    if (!daily_exercises || !target) {
        return res.status(400).json({
            error: "params missing"
        });
    }

    if ( !target || isNaN(Number(target)) ) {
        return res.status(400).json({ error: 'target should be a number'});
    }

    if (!Array.isArray(daily_exercises) || !daily_exercises.every(exercise => typeof exercise === 'number')) {
        return res.status(400).json({ error: 'daily_exercises should be an array of numbers'});
    }
    
    // eslint-disable-next-line @typescript-eslint/no-unsafe-argument
    return res.json(calculateExercises(daily_exercises, target));
});

const PORT = 3003;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});