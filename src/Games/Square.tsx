import * as React from "react";

interface Props {
    value: string | null;
    onClick: () => void;
}

export const Square = (props: Props): any => {
    return (
        <button className="square" onClick={props.onClick}>
            {props.value}
        </button>
    );
}