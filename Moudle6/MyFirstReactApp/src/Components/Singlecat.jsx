function SingleCat({ cat }) {
    return (
      <div style={{ border: '1px solid #ccc', padding: '10px', margin: '10px', textAlign: 'center' }}>
        <img src={cat.image} alt={cat.name} style={{ width: '150px', height: '150px', objectFit: 'cover' }} />
        <h3>{cat.name}</h3>
        <p><i>{cat.latinName}</i></p>
      </div>
    );
  }
  
  export default SingleCat;