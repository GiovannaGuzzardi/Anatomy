import useGlobalContext from "@/context/GlobalContext"
import { Inter } from "next/font/google"


const inter = Inter({ subsets: ['latin'] })

export default function Lib() {
    const { value } = useGlobalContext()
    return (
        <main
            className={``}
        >

            <div className=' '>sss{value}</div>
        </main>
    )
}
