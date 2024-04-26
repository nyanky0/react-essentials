export default function Tabs({ children, buttons, ButtonContainer }) {
    // const buttonContainer = ButtonContainer;
    return (
        <>
            <ButtonContainer>{buttons}</ButtonContainer>
            {children}
        </>
    );
}