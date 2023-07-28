import './_vendor';
import vars from './_vars';
import './_functions';
import './_components';


const theme = document.querySelector('.page');
const btnChangeTheme = document.querySelector('.btn-change-theme');
// console.log(theme)

function toggleTheme() {
  if (theme.classList.contains('light-theme')) {
    theme.classList.remove('light-theme')
    theme.classList.add('dark-theme')
  } else if (theme.classList.contains('dark-theme')){
    theme.classList.remove('dark-theme')
    theme.classList.add('light-theme')
  }
}

btnChangeTheme.addEventListener('click', (e) => {
  toggleTheme()

});



class GraphAccordion {

	constructor(selector, options) {
		let defaultOptions = {
		};  // создаем переменную-объект оcтавляю ее пустую

		this.options = Object.assign(options);    // объединяем свойства объектвов, так, если свойство не записано, оно добавляется, если записано то перезавписывается новое значение
		this.accordion = document.querySelector(selector);  // получаем объект с значением '.accordion-1'
		this.control = this.accordion.querySelector('.accordion__control'); // получаем объект с значением '.accordion__control'
		this.content = this.accordion.querySelector('.accordion__content');  // получаем объект с значением '.accordion__content'
		this.event();

	}

	event() {          // добавляем событие

		if (this.accordion) {
			this.accordion.addEventListener('click', (e) => {
				this.accordion.classList.toggle('open');   // добавляет класс если его нет и убирает если он есть (в этом случае добавляет не класс, а событие (функцию 'open'), а ф функции содержится добавление класса)

				if (this.accordion.classList.contains('open')) {    // проверяем наличие класса, если класс есть запускаем опен, если нет клоус
					this.open();
				} else {
					this.close();
				}
			});
		}
	}

	open() {

		this.accordion.style.setProperty('--accordion-time', `${this.options.speed / 1000}s`); // setProperty() Интерфейс метода устанавливает новое значение для свойства объекта объявления стиля CSS.
		this.accordion.classList.add('is-open'); // добавляем класс объекту с классом '.accordion-1'
		this.content.style.maxHeight = this.content.scrollHeight + 'px';   // max-height CSS задает максимальную высоту элемента

		// Element.scrollHeight Свойство, доступное только для чтения, - это измерение высоты содержимого элемента, включая содержимое, не видимое на экране из-за переполнения.
		// таким образом мы задаем новое свойство блоку с классом '.accordion__content' равное scrollHeight этого блока
	}



	close() {
		this.accordion.classList.remove('is-open');
		this.content.style.maxHeight = null;  // обнуляем высоту элемента '.accordion__content'



	}
}


const accordion1 = new GraphAccordion('.accordion-1', {
	speed: 500,
});

const accordion2 = new GraphAccordion('.accordion-2', {
	speed: 500,
});

const accordion3 = new GraphAccordion('.accordion-3', {
	speed: 500,
});




