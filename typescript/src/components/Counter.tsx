import { ReactNode } from 'react';

type CounterProps = {
    setCount: React.Dispatch<React.SetStateAction<number>>,
    children: ReactNode,
};

const Counter = ({ setCount, children }: CounterProps) => {
    return (
        <div>
            <h1 className="text-2xl mb-4">{children}</h1>
            <div className="space-x-2">
                <button 
                    className="text-2xl bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700"
                    onClick={() => setCount(prev => prev + 1)}
                >
                    +
                </button>
                <button 
                    className="text-2xl bg-red-600 text-white py-2 px-2 rounded-lg hover:bg-red-700"
                    onClick={() => setCount(prev => prev - 1)}
                >
                    -
                </button>
            </div>
        </div>
    );
};

export default Counter;
