import type { Dispatch, SetStateAction } from "react";
import type { CardType } from "../../types/type";
import { RxCross2 } from "react-icons/rx";

interface StackCardProps{
    stack: CardType;
    addedStacks: CardType[];
    setAddedStacks: Dispatch<SetStateAction<CardType[]>>;
}

const StackCard = ({stack, addedStacks, setAddedStacks}: StackCardProps) => {

    const handleRemoveStack = (stack: CardType) => {
        const remainingStack = addedStacks.filter(addedStack => addedStack.id !== stack.id);
        setAddedStacks(remainingStack);
    }

    return (
        <div className="flex items-center justify-between gap-10 my-5 border-2 border-gray-300 rounded-lg py-2 px-4">
            <div className="flex items-center gap-5">
                <img src={stack.icon} alt={stack.id} className="w-15 h-15" />

                <div>
                    <h2 className="font-semibold text-lg">{stack.name}</h2>
                    <h2 className="text-md text-gray-400">{stack.category}</h2>
                </div>
            </div>

            <div onClick={() => handleRemoveStack(stack)} className="font-bold cursor-pointer text-3xl">
                <RxCross2 />
            </div>
        </div>
    );
};

export default StackCard;