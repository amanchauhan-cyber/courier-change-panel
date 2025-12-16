function App() {
  return (
    <div style={{ padding: '20px', fontFamily: 'Arial' }}>
      <h1>Courier Change Panel</h1>

      <p>This is a frontend-only hosted app on Vercel.</p>

      <button
        onClick={() => alert('API call will go here')}
        style={{
          padding: '10px 16px',
          borderRadius: '6px',
          border: 'none',
          cursor: 'pointer',
          background: '#2563eb',
          color: 'white'
        }}
      >
        Test Button
      </button>
    </div>
  );
}

export default App;
