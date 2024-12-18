import { createElement } from '../framework/render.js';

function createContainerTemplate() {
  return `
    <div class="fitness-tracker-container">
      <h1>Мой Фитнес Трекер</h1>
      <h2>Всего тренировок: <span id="total-workouts">0</span></h2>
      <div class="fitness-tracker-content"></div>
    </div>
  `;
}

export default class ContainerComponent {
  constructor() {
    this.element = null;
  }

  getTemplate() {
    return createContainerTemplate();
  }

  getElement() {
    if (!this.element) {
      this.element = createElement(this.getTemplate());
    }
    return this.element;
  }

  updateTotalWorkouts(count) {
    this.getElement().querySelector('#total-workouts').textContent = count;
  }

  getContentContainer() {
    return this.getElement().querySelector('.fitness-tracker-content');
  }

  removeElement() {
    this.element = null;
  }
}
