import React, {FunctionComponent} from 'react';
import SvgIcon, {IconType} from "./SvgIcon";


const BurgerIcon: FunctionComponent<IconType> = ({height, width, fillColor}) => {
    return <>
        <SvgIcon height={height} width={width} fillColor={fillColor}>
            <g>
                <path d="M28,10H4A1,1,0,0,1,4,8H28a1,1,0,0,1,0,2Z"/>
                <path d="M28,17H4a1,1,0,0,1,0-2H28a1,1,0,0,1,0,2Z"/>
                <path d="M28,24H4a1,1,0,0,1,0-2H28a1,1,0,0,1,0,2Z"/>
            </g>
        </SvgIcon>
    </>;
}

export default BurgerIcon;