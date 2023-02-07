console.log('Index.js was loaded!');
const element = document.getElementById('figure');

element.addEventListener('mouseover', () => {
  console.log('MouseOver');
});

// eslint-disable-next-line no-unused-vars
function clickFn(e) {
  console.log('OnClickEvent');
  console.log('Event: ', e);
}
