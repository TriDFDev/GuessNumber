import { FC } from "react";
import { StyleProp, ViewStyle } from "react-native/types";

interface Props {
    title?: string,
    onPress : () => void,
    variant: "text"|"contained"|"outlined",
    style?: StyleProp<ViewStyle>;

}
 
const Btn  : FC<Props> = () => {
    return (  <>
    </>);
}
 
export default Btn;