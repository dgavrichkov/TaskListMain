import React from 'react';

// Определяем интерфейс для пропсов компонента
interface MyComponentProps {}

// Определяем состояние компонента (если необходимо)
interface MyComponentState {
  // здесь могут быть определены поля состояния компонента
  counter: number;
}

class Oldschool extends React.Component<MyComponentProps, MyComponentState> {
  a: number;

  state = {
    counter: 0,
  };

  constructor(props: any) {
    super(props);
    this.a = 14;
  }

  componentDidMount() {
    console.log('Component did mount')
  }

  componentDidUpdate() {
    console.log('Component did update')
  }

  handleClick = () => {
    this.setState({
      counter: this.state.counter + this.a,
    });
  };

  render() {
    if (this.state.counter === 5) {
      // throw new Error('Я упал!');
    }

    return (
      <div>
        <h1>Oldschool - {this.state.counter}</h1>
        <button onClick={this.handleClick}>+</button>
      </div>
    );
  }
}

export default Oldschool;
