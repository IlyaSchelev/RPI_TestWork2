// model/workouts-model.js
import { workouts } from '../mock/workouts.js';

export default class WorkoutsModel {
  constructor() {
    this.workouts = [...workouts];
  }

  getWorkouts(filter = {}) {
    const { sport, date } = filter;
    return this.workouts.filter(workout => {
      const matchesSport = sport ? workout.sport === sport : true;
      const matchesDate = date ? workout.date === date : true;
      return matchesSport && matchesDate;
    });
  }

  addWorkout(workout) {
    this.workouts.push(workout);
  }

  removeWorkout(id) {
    this.workouts = this.workouts.filter(workout => workout.id !== id);
  }
}
