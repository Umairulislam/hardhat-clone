import { Link } from "react-router"
import { FaArrowLeft, FaArrowRight } from "../assets"

interface PageNavigatorProps {
  prev?: {
    label: string
    href: string
  }
  next?: {
    label: string
    href: string
  }
}

const PageNavigator: React.FC<PageNavigatorProps> = ({ prev, next }) => {
  return (
    <div className="mt-10 border-t border-border pt-4 flex justify-between gap-1 text-xs sm:text-base">
      {prev ? (
        <Link to={prev.href} className="flex items-center gap-1">
          <FaArrowLeft />
          <u>{prev.label}</u>
        </Link>
      ) : (
        <div /> // keeps spacing if no prev
      )}
      {next ? (
        <Link to={next.href} className="flex items-center gap-1">
          <u>{next.label}</u>
          <FaArrowRight />
        </Link>
      ) : (
        <div /> // keeps spacing if no next
      )}
    </div>
  )
}

export default PageNavigator
