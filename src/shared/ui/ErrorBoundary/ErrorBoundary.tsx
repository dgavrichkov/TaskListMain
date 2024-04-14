import React from 'react';

type Props = {
  children: React.ReactNode;
};

export class ErrorBoundary extends React.Component<Props> {
  state = { hasError: false };

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  render() {
    if (this.state.hasError) {
      return <div style={{ padding: '20px' }}>Что-то вообще пошло не так</div>;
    }

    return this.props.children;
  }
}
