import { use } from "react";
import type { CardType } from "../../types/type";
import AllTechnologies from "./AllTechnologies";

interface TechnologiesProps{
    dataPromise: Promise<CardType[]>;
}

const Technologies = ({dataPromise}: TechnologiesProps) => {
    const technologiesData: CardType[] = use(dataPromise);
    console.log(technologiesData);

    return (
        <div className="max-w-7xl mx-auto lg:px-0 py-5">
            <div className="space-y-3">
                <h2 className="text-4xl font-bold text-center lg:text-left">Explore the <span>Technologies</span></h2>
                <p className="text-gray-500 text-center lg:text-left">Pick one technology per category to build your ideal stack.</p>  
            </div>

            <div>
                <AllTechnologies technologiesData={technologiesData}/>
            </div>
        </div>
    );
};

export default Technologies;