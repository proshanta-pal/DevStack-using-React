
const Stack = () => {
    return (
        <div className="border-2 border-gray-200 space-y-1 px-6 py-8 rounded-xl -ml-3 mr-5 lg:ml-0 lg:mr-0">
            <h3 className="text-2xl font-semibold">Your Stack</h3>
            <p className="text-gray-400 font-thin">0 Technology Selected</p>

            <div className="border-2 border-dashed border-gray-300 py-5 px-10 rounded-lg text-gray-300 mt-4 text-center text-xl">
                Your stack is empty
            </div>
        </div>
    );
};

export default Stack;