import { Component } from 'react'

export default class ErrorBoundary extends Component {
  state = { hasError: false }

  static getDerivedStateFromError() {
    return { hasError: true }
  }

  render() {
    if (this.state.hasError) {
      return (
        <main className="error-screen">
          <span className="brand-symbol">N</span>
          <p>NAKA / portfolio</p>
          <h1>Un instant.</h1>
          <span>Cette vue n’a pas pu être affichée correctement.</span>
          <button type="button" onClick={() => window.location.reload()}>Recharger la page</button>
        </main>
      )
    }

    return this.props.children
  }
}
