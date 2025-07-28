export default function Tabs({ children, buttons, buttonsWrapper = 'menu' }) {
  const ButtonsWrapper = buttonsWrapper;
  return (
    <>
      <ButtonsWrapper>{buttons}</ButtonsWrapper>
      {children}
    </>
  );
}
