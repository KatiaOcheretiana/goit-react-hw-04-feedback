import { ButtonItem, ButtonField } from './Feedback.styled';

export const Feedback = ({ options, onLeaveFeedback }) => {
  const items = Object.keys(options);
  return (
    <ButtonField>
      {items.map(item => (
        <ButtonItem key={item} onClick={onLeaveFeedback}>
          {item}
        </ButtonItem>
      ))}
    </ButtonField>
  );
};
