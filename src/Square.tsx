import * as React from 'react';

interface SquareProps {
  value: number
}

class Square extends React.Component<SquareProps> {
  public render() {
    return (
      <button className="square">
        {this.props.value}
      </button>
    );
  }
}

export default Square