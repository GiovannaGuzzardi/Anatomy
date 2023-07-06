import useGlobalContext from "@/context/GlobalContext"
import { ArrowDown2 } from "iconsax-react"

export const BodyStructures = () => {
    const { setBodyStructure, bodyStructure } = useGlobalContext()


    const handleClick = () => {
        setBodyStructure(!bodyStructure)
    }
    return (
        <button
            onClick={handleClick}
            className={`text-lg font-bold hover:text-primary-500 cursor-pointer p-2 rounded-lg transition-all duration-300 ease-in delay-100 flex items-start space-x-4 ${bodyStructure ? "text-primary-500" : "text-primary-300"}`}

        >
            <p>Estruturas do Corpo</p>
            <ArrowDown2 size="20" />
        </button>
    )
}