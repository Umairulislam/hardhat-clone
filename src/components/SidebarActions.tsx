import { CgDarkMode } from "../assets"

interface SidebarActionsProps {
  renderSocialIcons: () => React.ReactNode
  toggleTheme: () => void
}

const SidebarActions = ({ renderSocialIcons, toggleTheme }: SidebarActionsProps) => {
  return (
    <div className="flex justify-between items-center border-t border-border pt-4 mt-2">
      {renderSocialIcons()}
      <button
        className="text-2xl cursor-pointer"
        onClick={toggleTheme}
        aria-label="Toggle dark mode"
      >
        <CgDarkMode />
      </button>
    </div>
  )
}

export default SidebarActions
