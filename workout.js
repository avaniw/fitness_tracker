const mongoose = require('mongoose');

const workoutSchema({
    day:{

    },
    excercises: {

    }
})

const Workout = mongoose.model("Workout", workoutSchema);

module.exports = Workout;
