import { useState } from 'react'

export default function App() {
  const [checks, setChecks] = useState(0)

  return (
    <main>
      <section className="card">
        <div className="status"><i /> Deployment successful</div>
        <p className="eyebrow">PARTITION / REACT + TYPESCRIPT</p>
        <h1>Your app is live.</h1>
        <p className="copy">
          This page was detected as a Vite application, built inside Docker, and
          routed through your local deployment platform.
        </p>
        <div className="details">
          <span><small>Runtime</small>nginx :8080</span>
          <span><small>Build</small>Vite production</span>
          <span><small>Checks</small>{checks}</span>
        </div>
        <button onClick={() => setChecks(value => value + 1)}>Test interaction</button>
      </section>
    </main>
  )
}
