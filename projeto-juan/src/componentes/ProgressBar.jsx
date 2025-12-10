function ProgressBar({label, value}) {
  return (
    <div className="progress-bar">
        <div className="fill" style={{ width: value }}></div>
      <span className="label">{label}</span>
    </div>
  )
}

export default ProgressBar;