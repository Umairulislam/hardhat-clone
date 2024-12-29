import { useSelector } from "react-redux"

const DebugHardhatNetwork = () => {
  const isDarkMode = useSelector((state) => state.theme.isDarkMode)
  return (
    <section
      className={`p-6 lg:px-32 mx-auto max-w-4xl text-sm font-light flex flex-col space-y-6 ${
        isDarkMode ? "text-black" : "text-gray-300"
      } `}
    >
      <h1>DebugHardhatNetwork</h1>
    </section>
  )
}

export default DebugHardhatNetwork
