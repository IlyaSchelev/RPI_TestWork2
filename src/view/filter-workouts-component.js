// filter-workouts-component.js
import { createElement } from '../framework/render.js';

function createFilterWorkoutsTemplate() {
  return `
    <div class="workout-filter">
      <h2>Фильтры</h2>
      <label for="sport-filter">Вид спорта:</label>
      <select id="sport-filter">
        <option value="">Все виды спорта</option>
        <option value="running">Бег</option>
        <option value="cycling">Велосипед</option>
        <option value="swimming">Плавание</option>
      </select>
      <label for="date-filter">Дата:</label>
      <input type="date" id="date-filter">
    </div>
  `;
}

export default class FilterWorkoutsComponent {
  constructor() {
    this.element = null;
  }

  getTemplate() {
    return createFilterWorkoutsTemplate();
  }

  getElement() {
    if (!this.element) {
      this.element = createElement(this.getTemplate());
    }
    return this.element;
  }

  setFilterHandler(callback) {
    this.getElement().addEventListener('change', () => {
      const sport = this.getElement().querySelector('#sport-filter').value;
      const date = this.getElement().querySelector('#date-filter').value;
      callback({ sport, date });
    });
  }

  removeElement() {
    this.element = null;
  }
}
