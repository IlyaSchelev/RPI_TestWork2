import { createElement } from '../framework/render.js';
import { SportLabels } from '../const.js';

function createWorkoutsListTemplate() {
  return `
    <div class="workouts-list">
      <h2>Список тренировок</h2>
      <ul id="workouts-container" class="workouts-container"></ul>
    </div>
  `;
}

export default class WorkoutsListView {
  constructor() {
    this.element = null;
    this.deleteHandler = null;
  }

  getTemplate() {
    return createWorkoutsListTemplate();
  }

  getElement() {
    if (!this.element) {
      this.element = createElement(this.getTemplate());
    }
    return this.element;
  }

  renderWorkouts(workouts) {
    const container = this.getElement().querySelector('#workouts-container');
    container.innerHTML = workouts
      .map(
        workout => `
        <li class="workout-item">
          <span class="workout-details">
            <strong>${SportLabels[workout.sport] || 'Неизвестно'}</strong>, ${workout.duration || 0} мин, ${workout.date || 'Не указано'}
          </span>
          <button data-id="${workout.id}" class="delete-workout">Удалить</button>
        </li>`
      )
      .join('');

    container.querySelectorAll('.delete-workout').forEach(button => {
      button.addEventListener('click', () => {
        this.deleteHandler && this.deleteHandler(button.dataset.id);
      });
    });
  }

  setDeleteHandler(callback) {
    this.deleteHandler = callback;
  }

  removeElement() {
    this.element = null;
  }
}
