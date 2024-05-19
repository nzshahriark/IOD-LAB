function Emoji() {
    const [isHappy, setIsHappy] = useState(true);
  
    const toggleMood = () => {
      setIsHappy(!isHappy);
    };
  
    return (
      <div style={{ textAlign: 'center', margin: '20px' }}>
        <div style={{ fontSize: '50px' }}>
          {isHappy ? '😊' : '😢'}
        </div>
        <button onClick={toggleMood} style={{ padding: '10px', fontSize: '16px', marginTop: '10px' }}>
          Change Mood
        </button>
      </div>
    );
  }
  
  export default Emoji;