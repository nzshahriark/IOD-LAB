import SingleCat from './Singlecat'

const cats = [
    { id: 1, name: 'Cheetah', latinName: 'Acinonyx jubatus', image: 'https://en.wikipedia.org/wiki/Cheetah#/media/File:Cheetah_at_Working_with_Wildlife.jpg' },
    { id: 2, name: 'Cougar', latinName: 'Puma concolor', image: 'https://en.wikipedia.org/wiki/Cougar#/media/File:Mountain_Lion_in_Glacier_National_Park.jpg' },
    { id: 3, name: 'Jaguar', latinName: 'Panthera onca', image: 'https://en.wikipedia.org/wiki/Jaguar#/media/File:Standing_jaguar.jpg' },
    { id: 4, name: 'Leopard', latinName: 'Panthera pardus', image: 'https://en.wikipedia.org/wiki/Leopard#/media/File:African_leopard_male_(cropped).jpg' },
    { id: 5, name: 'Lion', latinName: 'Panthera leo', image: 'https://en.wikipedia.org/wiki/Lion#/media/File:Lion_waiting_in_Namibia.jpg' },
    { id: 6, name: 'Snow leopard', latinName: 'Panthera uncia', image: 'https://en.wikipedia.org/wiki/Snow_leopard#/media/File:Irbis4.JPG' },
    { id: 7, name: 'Tiger', latinName: 'Panthera tigris', image: 'https://en.wikipedia.org/wiki/Tiger#/media/File:Walking_tiger_female.jpg' },
  ];

  const BigCats = () => {
    const [catList, setCatList] = useState(cats);
  
    const sortAlphabetically = () => {
      const sortedCats = [...catList].sort((a, b) => a.name.localeCompare(b.name));
      setCatList(sortedCats);
    };
  
    const reverseList = () => {
      const reversedCats = [...catList].reverse();
      setCatList(reversedCats);
    };
  
    const filterPanthera = () => {
      const filteredCats = cats.filter(cat => cat.latinName.includes('Panthera'));
      setCatList(filteredCats);
    };
  
    const resetList = () => {
      setCatList(cats);
    };
  
    return (
      <div>
        <button onClick={sortAlphabetically}>Sort Alphabetically</button>
        <button onClick={reverseList}>Reverse List</button>
        <button onClick={filterPanthera}>Show Panthera Family</button>
        <button onClick={resetList}>Reset List</button>
        <div className="cat-list">
          {catList.map(cat => (
            <SingleCat key={cat.id} cat={cat} />
          ))}
        </div>
      </div>
    );
  };
  
  export default ExtendBigCats;