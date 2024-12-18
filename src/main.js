import WorkoutsPresenter from './presenter/workouts-presenter.js';

const appContainer = document.querySelector('.app');

const workoutsPresenter = new WorkoutsPresenter({ appContainer });
workoutsPresenter.init();
