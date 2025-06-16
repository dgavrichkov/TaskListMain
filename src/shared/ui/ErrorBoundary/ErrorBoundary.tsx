import React from 'react';

type Props = {
  children: React.ReactNode;
  fallback?: React.ReactNode;
};

export class ErrorBoundary extends React.Component<Props> {
  state = { hasError: false };

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  render() {
    if (this.state.hasError) {
      return (
        <div style={{ padding: '20px' }}>
          {this.props.fallback || <h2>Something went wrong.</h2>}
        </div>
      );
    }

    return this.props.children;
  }
}
