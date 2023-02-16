import { MouseEvent } from 'react';

type CategoryProps = {
    categorys: string[];
    setCategory: (value: string) => void;
};

export default function Category({ categorys, setCategory }: CategoryProps) {
    const handleClick = (e: MouseEvent<HTMLButtonElement>) => {
        const { category } = e.currentTarget.dataset;

        if (!category) return;

        setCategory(category);
    };
    return (
        <div>
            {categorys.map((category) => (
                <button
                    key={category}
                    type="button"
                    onClick={handleClick}
                    data-category={category}
                >
                    {category}
                </button>
            ))}
        </div>
    );
}
