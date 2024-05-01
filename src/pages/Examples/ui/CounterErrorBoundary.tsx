import React from 'react';

type Props = {
  children: React.ReactNode;
};

class CounterErrorBoundary extends React.Component<Props> {
  state = { hasError: false };

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  render() {
    if (this.state.hasError) {
      return <div style={{ padding: '20px' }}>Что-то пошло не так</div>;
    }

    return this.props.children;
  }
}

export default CounterErrorBoundary;
