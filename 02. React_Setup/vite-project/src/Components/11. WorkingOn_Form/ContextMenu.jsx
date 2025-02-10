import React from "react";

const ContextMenu = ({menuPosition, setMenuPosition, setExpenses, rowId, setExpense}) => {
  if (!menuPosition || menuPosition.left === undefined || menuPosition.top === undefined) return null;

  return (
    <div className="context-menu" style={menuPosition}>
      <div onClick={() => {
        setMenuPosition({})
      }}>Edit</div>
      <div onClick={() => {
        setExpenses((prevState) => prevState.filter((expense) => expense.id !== rowId))
        setMenuPosition({})
      }}>Delete</div>
    </div>
  );
};

export default ContextMenu;
