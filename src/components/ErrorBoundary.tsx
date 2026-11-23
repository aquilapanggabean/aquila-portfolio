import { Component, type ErrorInfo, type ReactNode } from 'react';

interface ErrorBoundaryProps {
  children: ReactNode;
}

interface ErrorBoundaryState {
  hasError: boolean;
  message: string;
}

export class ErrorBoundary extends Component<
  ErrorBoundaryProps,
  ErrorBoundaryState
> {
  public state: ErrorBoundaryState = {
    hasError: false,
    message: '',
  };

  public static getDerivedStateFromError(error: Error): ErrorBoundaryState {
    return {
      hasError: true,
      message: error.message || 'An unexpected application error occurred.',
    };
  }

  public componentDidCatch(error: Error, info: ErrorInfo) {
    console.error('Application ErrorBoundary caught:', error, info);
  }

  private handleReload = () => {
    this.setState({ hasError: false, message: '' });
    window.location.reload();
  };

  public render() {
    if (this.state.hasError) {
      let friendlyNotice =
        'A temporary connection or permission error occurred while loading portfolio data.';
      try {
        const parsed = JSON.parse(this.state.message) as {
          operationType?: string;
          error?: string;
        };
        if (parsed.error?.includes('permission')) {
          friendlyNotice =
            'Access was blocked by database security rules. Please verify you are signed in with the authorized owner account.';
        } else if (parsed.error?.includes('Quota exceeded')) {
          friendlyNotice =
            'Daily database quota has been reached. Quota resets automatically the next day.';
        }
      } catch {
        // Non-JSON runtime error; use safe generic notice
      }

      return (
        <div className="min-h-screen bg-[#F7F8FA] text-[#0B1220] flex items-center justify-center p-6">
          <div className="max-w-lg w-full bg-white border border-[#E2E8F0] rounded-[4px] p-8 space-y-4">
            <p className="font-mono text-xs tracking-[0.08em] uppercase text-[#2457D6]">
              SYSTEM RECOVERY
            </p>
            <h1 className="font-serif italic text-3xl text-[#0B1220]">
              Something interrupted the view
            </h1>
            <p className="text-sm leading-relaxed text-[#475569]">
              {friendlyNotice}
            </p>
            <button
              type="button"
              onClick={this.handleReload}
              className="min-h-[44px] inline-flex items-center justify-center px-5 py-2.5 font-mono text-xs tracking-[0.08em] uppercase font-medium text-white bg-[#2457D6] hover:bg-[#315FC8] rounded-[4px] transition-colors"
            >
              Reload Application
            </button>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}
