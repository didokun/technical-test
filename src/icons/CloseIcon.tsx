import React, {FunctionComponent} from 'react';
import SvgIcon, {IconType} from "./SvgIcon";

const CloseIcon: FunctionComponent<IconType> = ({height, width, fillColor}) => {
    return <>
        <SvgIcon height={height} width={width} fillColor={fillColor}>
            <g data-name="Layer 2" id="Layer_2">
                <path d="M4,29a1,1,0,0,1-.71-.29,1,1,0,0,1,0-1.42l24-24a1,1,0,1,1,1.42,1.42l-24,24A1,1,0,0,1,4,29Z" />
                <path d="M28,29a1,1,0,0,1-.71-.29l-24-24A1,1,0,0,1,4.71,3.29l24,24a1,1,0,0,1,0,1.42A1,1,0,0,1,28,29Z" />
            </g>
        </SvgIcon>
    </>;
}

export default CloseIcon;