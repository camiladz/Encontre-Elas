import { useContext } from "react"
import { ChangePageContentContext } from "../context/index"

export const useChangePageContent = () => {
    const value = useContext(ChangePageContentContext)
    return value
}