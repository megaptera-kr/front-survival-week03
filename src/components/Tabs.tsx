import React from 'react';

type TabsProps = {
  tabs: string[]
  setTabIndex: (index: number) => void;
};

function Tabs({ tabs, setTabIndex }: TabsProps) {
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    const { value } = event.currentTarget;
    setTabIndex(+value);
  };

  return (
    <div style={{ display: 'flex', gap: '14px' }}>
      {tabs.map((tab, index) => (
        <button
          type="button"
          key={tab}
          onClick={handleClick}
          value={index}
        >
          {tab}
        </button>
      ))}
    </div>
  );
}

export default Tabs;
