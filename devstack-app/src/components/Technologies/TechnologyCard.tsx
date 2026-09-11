import { useState, type Dispatch, type SetStateAction } from "react";
import type { CardType } from "../../types/type";
import { toast } from "react-toastify";

interface TechnologyCardProps{
    tech: CardType;
    addedStacks: CardType[];
    setAddedStacks: Dispatch<SetStateAction<CardType[]>>;
}

const TechnologyCard = ({tech, addedStacks, setAddedStacks}: TechnologyCardProps) => {

    const [isAdded, setIsAdded] = useState(false);

    const handleAddCard = () => {
        setIsAdded(true);
        toast.success(`${tech.name} added successfully on stack.`, {
            position: 'bottom-right'
        })
        setAddedStacks([...addedStacks, tech]);
    }

    return (
        <div className="border-2 border-gray-200 rounded-xl px-5 py-4 relative mx-5 lg:mx-0">
            <span className="absolute right-4 top-4 border-2 border-blue-500 bg-blue-300 px-3 rounded-2xl">{tech.badge}</span>
            <img className="w-20 h-20" src={tech.icon} alt={tech.id} />
            <h3 className="text-2xl font-bold">{tech.name}</h3>
            <p className="text-gray-400 text-sm mt-3">{tech.description}</p>

            <div className="flex justify-between mt-5">
                <h4 className="bg-gray-200 py-1 px-2 rounded-lg font-medium">{tech.category}</h4>
                <p className="text-gray-400">{tech.difficulty}</p>
                <p className="font-medium">⭐{tech.rating}</p>
            </div>

            <button className={`text-center bg-slate-900 w-full text-white py-3 rounded-lg mt-5 ${isAdded ? 'disabled:cursor-not-allowed disabled:opacity-50' : 'cursor-pointer'}`}
            disabled={isAdded} onClick={() => handleAddCard()}>
                {isAdded ? 'Added to Stack' : 'Add to Stack'}
            </button>
        </div>
    );
};

export default TechnologyCard;