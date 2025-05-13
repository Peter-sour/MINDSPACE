export default function WellnessProgress({ completedDays }) {
  const totalDays = 7;

  return (
    <div className="progress-container">
      <h3 className="progress-title">Your Wellness Journey</h3>
      <div className="progress-grid">
        {Array.from({ length: totalDays }).map((_, index) => (
          <div
            key={index}
            className={`progress-day ${index < completedDays ? 'completed' : ''}`}
          ></div>
        ))}
      </div>
      <div className="progress-legend">
        <div className="legend-item">
          <div className="legend-color completed"></div>
          <span>Completed</span>
        </div>
        <div className="legend-item">
          <div className="legend-color pending"></div>
          <span>Upcoming</span>
        </div>
      </div>
    </div>
  );
}
