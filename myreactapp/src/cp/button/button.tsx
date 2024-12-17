import { styles as sy } from "./button.style";
import { ButtonProps } from "./button.type";

const Button:React.FC<ButtonProps> = ({children,click}) => {
    
    const handleClick = () => {
        if (click) click();
    }

    return (
        <sy.container onClick={handleClick}>
            {children}
        </sy.container>
    )
}

export {Button}