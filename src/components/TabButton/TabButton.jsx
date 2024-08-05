export default function TabButton({children, isSelected, ...rest}) {
    return <li><button {...rest} className={isSelected ? "active" : undefined} >{children}</button></li>
}