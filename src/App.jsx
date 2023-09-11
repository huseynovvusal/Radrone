import React, { useEffect, useState } from "react"

import Hero from "./components/Hero"
import Loader from "./components/Loader"
import Services from "./components/Services"

export default function App() {
  const [loading, setLoading] = useState(false)

  const handleDOMLoaded = () => setLoading(true)

  useEffect(() => {
    window.addEventListener("DOMContentLoaded", handleDOMLoaded)

    return () => window.removeEventListener("DOMContentLoaded", handleDOMLoaded)
  }, [])

  return (
    <>
      {loading ? (
        <Loader />
      ) : (
        <main>
          <Hero />

          <Services />
        </main>
      )}
    </>
  )
}
