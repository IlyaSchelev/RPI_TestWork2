// views/workout-form-view.js
import { createElement } from '../framework/render.js';

function createWorkoutFormTemplate() {
  return `
    <form id="workout-form">
      <label for="sport">Вид спорта:</label>
      <select id="sport" required>
        <option value="running">Бег</option>
        <option value="cycling">Велосипед</option>
        <option value="swimming">Плавание</option>
      </select>
      <label for="duration">Длительность (мин):</label>
      <input type="number" id="duration" min="1" max="240" required>
      <label for="date">Дата:</label>
      <input type="date" id="date" required>
      <button type="submit">Добавить тренировку</button>
    </form>
  `;
}

export default class WorkoutFormView {
  constructor() {
    this.element = null;
  }

  getTemplate() {
    return createWorkoutFormTemplate();
  }

  getElement() {
    if (!this.element) {
      this.element = createElement(this.getTemplate());
    }
    return this.element;
  }

  setSubmitHandler(callback) {
    this.getElement().addEventListener('submit', (event) => {
      event.preventDefault();
      const sport = this.getElement().querySelector('#sport').value;
      const duration = parseInt(this.getElement().querySelector('#duration').value, 10) || 0;
      const date = this.getElement().querySelector('#date').value;
  
      if (sport && duration > 0 && date) {
        callback({ sport, duration, date });
        event.target.reset();
      } else {
        alert('Пожалуйста, заполните все поля корректно.');
      }
    });
  }
  

  removeElement() {
    this.element = null;
  }
}
