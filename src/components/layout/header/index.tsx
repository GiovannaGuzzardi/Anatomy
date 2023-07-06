import useGlobalContext from "@/context/GlobalContext";
import { motion } from "framer-motion";
import { BodyStructures } from "./BodyStructures";

export const Header = () => {
    const { bodyStructure } = useGlobalContext()

    return (
        <div className=" relative">
            <div className="opacity-90 flex justify-between items-center bg-slate-50 px-[2.5rem] py-[0.6rem]">
                <div className="flex text-center items-center space-x-2 text-primary-300">
                    <img src="/favicon.png" alt="" className=" h-[2rem]" />
                    <div className=" text-2xl font-bold">Por Dentro</div>
                </div>
                <BodyStructures />
            </div>
            {
                bodyStructure && (
                    <motion.div
                        initial={{ opacity: 0, y: -100 }}
                        animate={{ opacity: 0.6, y: 0 }}
                        exit={{ opacity: 0 }}
                        transition={{
                            delay: 0.5,
                        }}
                        className="flex items-center justify-center p-6 bg-slate-50 shadow-inner shadow-slate-300 absolute w-screen"
                    >
                        <div className="grid grid-cols-4 gap-4">
                            <div>saa</div>
                            <div>sda</div>
                        </div>
                    </motion.div>
                )
            }
        </div>
    )
}