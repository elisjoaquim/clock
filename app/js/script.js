const secondHand = document.querySelector('.seconds');
const minuteHand = document.querySelector('.minutes');
const hourHand = document.querySelector('.hours');
const date = document.querySelector('.clock__date');

setInterval(setClock, 1000);

/**
 * The @function setClock() is the callback of the setInterval
 * It takes no args, but make the clock work
 * With the helps of other functions
 *
 * */
function setClock() {
  const currentDate = new Date();
  const secondRatio = currentDate.getSeconds() / 60;
  const minuteRatio = (secondRatio + currentDate.getMinutes()) / 60;
  const hourRatio = (minuteRatio + currentDate.getHours()) / 12;

  date.textContent = formatDate(currentDate);

  moveHands(secondHand, secondRatio);
  moveHands(minuteHand, minuteRatio);
  moveHands(hourHand, hourRatio);
}

/**
 * @function moveHands()
 * This function moves the hands of the clock
 * by receiving as args the hand (the html element) and the ratio
 */

const moveHands = function (element, ratio) {
  element.style.setProperty('--rotation', `${ratio * 360}deg`);
};

/**
 *@function formatDate() take as argument a Date object
 * and format it like this: 'day of the week, day of month'
 * @example 'Mon, 6'
 */
const formatDate = function (date) {
  return `${date.toString().slice(0, 3)}, ${date.getDate()}`;
};

setClock();
