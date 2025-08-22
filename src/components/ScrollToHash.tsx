import { useEffect } from "react"
import { useLocation } from "react-router"

const ScrollToHash = () => {
  const { hash } = useLocation()

  useEffect(() => {
    if (hash) {
      const id = hash.replace("#", "")
      const el = document.getElementById(id)
      if (el) {
        el.scrollIntoView({ behavior: "smooth" })
      }
    }
  }, [hash])

  return null
}

export default ScrollToHash
