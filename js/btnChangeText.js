// Ändrar text från 'Dölj' till 'Visa' efter klick på knappen

const btnText = document.getElementById('showHideBtn');

btnText.addEventListener('click', function handleClick() {
  const initialText = 'Dölj';

  if (btnText.textContent.toLowerCase().includes(initialText.toLowerCase())) {
    btnText.textContent = 'Visa';
  } else {
    btnText.textContent = initialText;
  }
});