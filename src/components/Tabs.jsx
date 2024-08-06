export default function Tabs({ children, buttons, buttonsContainer }) {

    /// Can be used directly without assigning to ButtonContainer by accepting ButtonsContainer as arg
    /// Ex: export default function Tabs({ children, buttons, ButtonsContainer }) 
    const ButtonsContainer = buttonsContainer;

    return (<>
        <ButtonsContainer>
            {buttons}
        </ButtonsContainer>
        {children}
    </>);
}