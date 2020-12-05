id = obj => obj.id;
h3 = obj => obj.h3;

headingFromId = Id => document.querySelector('#'+Id+' h3');



const english = [

{
  id: 'prehistoric',
  heading: 'Prehistoric era 8200 - 1050 B.C.',
  text: ''
},
{
  id: 'geometric',
  heading: 'Geometric era 1050 - 480 B.C.',
  text: ''
},
{
  id: 'classical',
  heading: 'Classical era 480-330 B.C.',
  text: ''
}
];

r = english.map(id);
console.log(r);





