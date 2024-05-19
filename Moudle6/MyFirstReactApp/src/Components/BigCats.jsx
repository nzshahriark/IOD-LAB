import React from 'react';
import SingleCat from './Singlecat'
import AddCatForm from './AddCatForm' //update Bigcats.jsx
const cats = [
  { id: 1, name: 'Cheetah', latinName: 'Acinonyx jubatus', image: 'https://en.wikipedia.org/wiki/Cheetah#/media/File:Cheetah_at_Working_with_Wildlife.jpg' },
  { id: 2, name: 'Cougar', latinName: 'Puma concolor', image: 'https://en.wikipedia.org/wiki/Cougar#/media/File:Mountain_Lion_in_Glacier_National_Park.jpg' },
  { id: 3, name: 'Jaguar', latinName: 'Panthera onca', image: 'https://en.wikipedia.org/wiki/Jaguar#/media/File:Standing_jaguar.jpg' },
  { id: 4, name: 'Leopard', latinName: 'Panthera pardus', image: 'https://en.wikipedia.org/wiki/Leopard#/media/File:African_leopard_male_(cropped).jpg' },
  { id: 5, name: 'Lion', latinName: 'Panthera leo', image: 'https://en.wikipedia.org/wiki/Lion#/media/File:Lion_waiting_in_Namibia.jpg' },
  { id: 6, name: 'Snow leopard', latinName: 'Panthera uncia', image: 'https://en.wikipedia.org/wiki/Snow_leopard#/media/File:Irbis4.JPG' },
  { id: 7, name: 'Tiger', latinName: 'Panthera tigris', image: 'https://en.wikipedia.org/wiki/Tiger#/media/File:Walking_tiger_female.jpg' },
];

function BigCats() {
  return (
    <div>
      <h2>Big Cats List</h2>
      <div style={{ display: 'flex', flexWrap: 'wrap' }}>
        {cats.map(cat => (
          <SingleCat key={cat.id} cat={cat} />
        ))}
      </div>
    </div>
  );
}

export default BigCats;