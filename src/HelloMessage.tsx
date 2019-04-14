import * as React from 'react';

interface IProps {
  name: string | null;
}

class HelloMessage extends React.Component<IProps> {

  public render() {
    const name = this.props.name;
    return (
      <div>
        Hello {name}
      </div>
    )
  }
}

export default HelloMessage;