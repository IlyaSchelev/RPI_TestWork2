import WorkoutsModel from '../model/workouts-model.js';
import WorkoutsListView from '../view/workouts-list-view.js';
import WorkoutFormView from '../view/workout-form-view.js';
import FilterWorkoutsComponent from '../view/filter-workouts-component.js';
import ContainerComponent from '../view/container-component.js';


export default class WorkoutsPresenter {
  constructor({ appContainer }) {
    this.appContainer = appContainer;

    this.workoutsModel = new WorkoutsModel();
    this.workoutsListView = new WorkoutsListView();
    this.workoutFormView = new WorkoutFormView();
    this.filterComponent = new FilterWorkoutsComponent();
    this.containerComponent = new ContainerComponent();
  }

  init() {
    this.appContainer.appendChild(this.containerComponent.getElement());

    const contentContainer = this.containerComponent.getContentContainer();
    contentContainer.appendChild(this.workoutFormView.getElement());
    contentContainer.appendChild(this.filterComponent.getElement());
    contentContainer.appendChild(this.workoutsListView.getElement());

    this.workoutsListView.setDeleteHandler(this.handleDeleteWorkout.bind(this));
    this.workoutFormView.setSubmitHandler(this.handleAddWorkout.bind(this));
    this.filterComponent.setFilterHandler(this.handleFilter.bind(this));

    this.renderWorkouts();
  }

  renderWorkouts(filter = {}) {
    const workouts = this.workoutsModel.getWorkouts(filter);
    this.workoutsListView.renderWorkouts(workouts);
    this.containerComponent.updateTotalWorkouts(workouts.length);
  }

  handleAddWorkout(workout) {
    const newWorkout = { id: Date.now().toString(), ...workout };
    this.workoutsModel.addWorkout(newWorkout);
    this.renderWorkouts();
  }

  handleDeleteWorkout(id) {
    this.workoutsModel.removeWorkout(id);
    this.renderWorkouts();
  }

  handleFilter(filter) {
    this.renderWorkouts(filter);
  }
}
