import React, {FunctionComponent, PropsWithChildren} from 'react';

export type IconType = {
    height: number;
    width: number;
    fillColor: string;
}

const SvgIcon: FunctionComponent<PropsWithChildren<IconType>> =
    ({height, width, fillColor , children}) => {
        return <>
            <svg fill={fillColor} xmlns="http://www.w3.org/2000/svg"
                 viewBox={`0 0 ${height} ${width}`}
                 width={`${width}px`}
                 height={`${height}px`}>
                {children}
            </svg>
        </>;
    }

export default SvgIcon;