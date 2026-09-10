import type { CardType } from "../../types/type";
import Stack from "./Stack";
import TechnologyCard from "./TechnologyCard";

interface AllTechnologiesProps{
    technologiesData: CardType[];
}

const AllTechnologies = ({technologiesData}: AllTechnologiesProps) => {
    return (
        <div className="flex flex-col lg:flex-row">
            <div className="lg:w-[75%] grid grid-cols-1 lg:grid-cols-3 gap-8 my-10">
                {
                    technologiesData.map((tech: CardType, index: number) => {
                        return (
                            <TechnologyCard key={index} tech={tech} />
                        )
                    })
                }
            </div>

            <div className="my-10 ml-8">
                <Stack />
            </div>
        </div>
    );
};

export default AllTechnologies;