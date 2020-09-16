import * as React from 'react';
import "./CloseButton.scss"

export interface CloseButtonProps {
    onClick: () => void;
}
 
const CloseButton: React.SFC<CloseButtonProps> = (props) => {
    return ( 
        <div className="close-button" role="button" onClick={props.onClick} >
            <div className="close-sign-cross">
                <span className="close-sign-cross-left"/>
                <span className="close-sign-cross-right"/>
            </div>
        </div> 
    );
}
 
export default CloseButton;