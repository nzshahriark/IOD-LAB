
function AddCatForm({ addCat }) {
    const [name, setName] = useState('');
    const [latinName, setLatinName] = useState('');
    const [image, setImage] = useState('');
  
    const handleSubmit = (e) => {
      e.preventDefault();
      addCat({ name, latinName, image });
      setName('');
      setLatinName('');
      setImage('');
    };
  
    return (
      <form onSubmit={handleSubmit}>
        <div>
          <label>Name:</label>
          <input type="text" value={name} onChange={(e) => setName(e.target.value)} required />
        </div>
        <div>
          <label>Latin Name:</label>
          <input type="text" value={latinName} onChange={(e) => setLatinName(e.target.value)} required />
        </div>
        <div>
          <label>Image URL:</label>
          <input type="text" value={image} onChange={(e) => setImage(e.target.value)} required />
        </div>
        <button type="submit">Add Cat</button>
      </form>
    );
  }
  
  export default AddCatForm;