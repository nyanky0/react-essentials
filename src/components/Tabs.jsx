export default function Tabs({ children, buttons, ButtonContainer = 'menu' }) {
    // const buttonContainer = ButtonContainer;
    return (
        <>
            <ButtonContainer>{buttons}</ButtonContainer>
            {children}
        </>
    );
}