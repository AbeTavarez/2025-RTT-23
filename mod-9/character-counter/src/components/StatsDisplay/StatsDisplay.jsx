function TestComponent() {
    return <h3>Test</h3>
} 

function StatsDisplay({stats, showReadingTime=false}) {
  return (
    <div>
      <div>
        <div>Characters {stats.characterCount}</div>
      </div>
      <div>
        <div>Words {stats.wordCount}</div>
      </div>
      <div>
        <div>Reading Time {showReadingTime ? stats.readingTime : "0:00"}</div>
        <div>Min: 25 | Max: 100</div>
      </div>
    </div>
  );
}

export default StatsDisplay;
