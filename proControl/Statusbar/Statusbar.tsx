import { useNavigationCommands } from "@proControl/Navigation"

export const Statusbar = () => {
  //hooks
  const { navigateTo } = useNavigationCommands()

  return (
    <>
      <div>
        Statusbar niy!
        <button
          onClick={() => {
            navigateTo("playground")
          }}
        >
          Playground
        </button>
      </div>
    </>
  )
}
