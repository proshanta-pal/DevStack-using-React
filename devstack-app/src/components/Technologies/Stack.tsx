import type { Dispatch, SetStateAction } from "react";
import type { CardType } from "../../types/type";
import StackCard from "./StackCard";

interface StackProps{
    addedStacks: CardType[];
    setAddedStacks: Dispatch<SetStateAction<CardType[]>>;
}

const Stack = ({addedStacks, setAddedStacks}: StackProps) => {

    if(addedStacks.length === 0){
        return (
            <div className="border-2 border-gray-200 space-y-1 px-6 py-8 rounded-xl -ml-3 mr-5 lg:ml-0 lg:mr-0">
                <h3 className="text-2xl font-semibold">Your Stack</h3>
                <p className="text-gray-400 font-thin">No Technologies Selected yet.</p>

                <div className="border-2 border-dashed border-gray-300 py-5 px-10 rounded-lg text-gray-300 mt-4 text-center text-lg">
                    Your stack is empty
                </div>
            </div>
        )
    }

    const handleRemoveAllStack = () => {
        setAddedStacks([]);
    }

    return (
        <div className="border-2 border-gray-200 space-y-1 px-6 py-8 rounded-xl -ml-3 mr-5 lg:ml-0 lg:mr-0">
            <h3 className="text-2xl font-semibold">Your Stack</h3>
            <p className="text-gray-400 font-thin">{addedStacks.length} Technology Selected</p>

            {
                addedStacks.map((stack: CardType, index: number) => {
                    return <StackCard key={index} stack={stack} addedStacks={addedStacks} setAddedStacks={setAddedStacks} />
                })
            }

            <button onClick={handleRemoveAllStack} className="border-2 border-red-500 rounded-lg py-1 w-full text-center cursor-pointer text-red-500 font-bold">Remove All</button>
        </div>
    );
};

export default Stack;