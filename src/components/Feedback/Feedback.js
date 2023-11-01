export const Feedback = ({ options, onLeaveFeedback }) => {
  const items = Object.keys(options);
  return (
    <div>
      <h2>Please leave feedback</h2>
      {items.map(item => (
        <button key={item} onClick={onLeaveFeedback}>
          {item}
        </button>
      ))}
    </div>
  );
};
