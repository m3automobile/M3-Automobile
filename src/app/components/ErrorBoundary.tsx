import { Component } from 'react';
import type { ReactNode, ErrorInfo } from 'react';

interface Props {
  children: ReactNode;
}

interface State {
  hasError: boolean;
}

export default class ErrorBoundary extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(): State {
    return { hasError: true };
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error('Erreur capturée par ErrorBoundary:', error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="min-h-screen bg-[#060B12] flex items-center justify-center px-4">
          <div className="text-center max-w-md">
            <h1 className="text-3xl font-bold text-white mb-4">Oups, une erreur est survenue</h1>
            <p className="text-gray-400 mb-8">
              Quelque chose s'est mal passé. Veuillez rafraîchir la page.
            </p>
            <button
              onClick={() => window.location.reload()}
              className="bg-white text-black font-bold px-6 py-3 rounded-xl hover:bg-white/90 transition-all"
            >
              Rafraîchir la page
            </button>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}
