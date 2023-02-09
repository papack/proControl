import { useCallback } from "react"
import { UserCommandType, UserInterface } from "./types"
import { useCommand } from "@proControl/sys"

export const useUserCommands = () => {
  const { send } = useCommand<UserCommandType, UserInterface>()

  //create user
  const createUser = useCallback(
    (user: UserInterface) => {
      send("createUser", user)
    },
    [send]
  )

  //delete user
  const deleteUser = useCallback(
    (user: UserInterface) => {
      send("deleteUser", user)
    },
    [send]
  )

  return { createUser, deleteUser }
}
