import { ReactNode } from 'react';

interface ListProps<T> {
    items: T[],
    render: (item: T) => ReactNode
}

const List = <T,>({ items, render }: ListProps<T>) => {
    return (
        <ul className="list-disc list-inside mt-4">
            {items.map((item, i) => (
                <li key={i} className="custom-bullet text-lg text-yellow-500">
                    {render(item)}
                </li>
            ))}
        </ul>
    );
};

export default List;
