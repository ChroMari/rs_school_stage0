import ItemType from "./ItemType.js";
import ItemAmount from "./ItemAmount.js";

const bodyFrom = document.querySelector('.form');

const wrapperForm = document.createElement('div');
wrapperForm.classList.add('form-wrapper');
bodyFrom.appendChild(wrapperForm);

const typeSection = document.createElement('fieldset');
wrapperForm.appendChild(typeSection);

const typeSectionTitle = document.createElement('legend');
typeSectionTitle.classList.add('form-type__title');
typeSectionTitle.textContent = 'Ticket Type';
typeSection.appendChild(typeSectionTitle);

const typeSectionItems = document.createElement('ul');
typeSection.appendChild(typeSectionItems);

const wrapperCost = document.createElement('div'); 
bodyFrom.appendChild(wrapperCost);

const cost = document.createElement('p');
cost.classList.add('form-cost__text');
cost.textContent = `Total € 220`;
190
let typeValueDB = [{text: 'Permanent exhibition', cost: 190}, {text: 'Temporary exhibition', cost: 100}, {text: 'Combined Admissionn', cost: 140}];
const typeValueArrays = typeValueDB.map(item => {
  item = new ItemType(typeSectionItems, item.text, item.cost).render();
  return item;
});
typeValueArrays[0].checked = true; 

const amountSection = document.createElement('fieldset');
wrapperForm.appendChild(amountSection);

const amountSectionTitle = document.createElement('legend');
amountSectionTitle.classList.add('form-type__title', 'form-amount__title');
amountSectionTitle.textContent = 'Amount';
amountSection.appendChild(amountSectionTitle);

const amountSectionItems = document.createElement('ul');
amountSection.appendChild(amountSectionItems);

let amounttitleDB = [{text: 'Basic 18+', cost: 20}, {text: 'Senior 65+', cost: 10}]; 
const amountValueArrays = amounttitleDB.map(item => {
  item = new ItemAmount(amountSectionItems, item.text, item.cost).render();
  return item;
});

const costButton = document.createElement('button');
costButton.classList.add('form-cost__button');
costButton.textContent = 'Buy Now';

wrapperCost.appendChild(cost);
wrapperCost.appendChild(costButton);

const retrievalData = () => {
  let sum = 0;
  typeValueArrays.forEach(item => {
    if (item.checked) {
      console.log(item)
      sum += Number(item.getAttribute('cost'));
    }
    return item;
  });

  amountValueArrays.forEach(item => {
    sum += (Number(item.value) * Number(item.getAttribute('cost')));
    return item;
  });

  cost.textContent = `Total € ${sum}`;
}

wrapperForm.addEventListener('click', retrievalData);
costButton.onclick = () => retrievalData();
