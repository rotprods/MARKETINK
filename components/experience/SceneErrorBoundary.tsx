"use client";

import type { ErrorInfo, ReactNode } from "react";
import { Component } from "react";

type Props = {
  children: ReactNode;
  fallback?: ReactNode;
};

type State = {
  hasError: boolean;
};

export class SceneErrorBoundary extends Component<Props, State> {
  state: State = { hasError: false };

  static getDerivedStateFromError(): State {
    return { hasError: true };
  }

  componentDidCatch(error: Error, info: ErrorInfo) {
    console.error("MARKET.INK immersive scene failed; using static fallback.", {
      error,
      componentStack: info.componentStack,
    });
  }

  render() {
    if (this.state.hasError) {
      return (
        this.props.fallback ?? (
          <div
            className="hero-scene__fallback hero-scene__fallback--static"
            aria-hidden="true"
          />
        )
      );
    }

    return this.props.children;
  }
}
