import React from 'react';

const toolbarStyle = {
  padding: '16px 0',
};

function Toolbar({ toolbar }: {toolbar: React.ReactNode}) {
  return (
    <div className="toolbar" style={toolbarStyle}>{toolbar}</div>
  );
}

export default Toolbar;
