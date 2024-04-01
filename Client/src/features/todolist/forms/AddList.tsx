import { FaCheck, FaPlus } from "react-icons/fa";
import { FaX } from "react-icons/fa6";
import eventHandler from "../eventHandler/eventHandler";

const AddList = () => {

  const {
    listEvent,
    ListValue,
    inputKeyUpHandler,
    closeInputHandler,
    OnChangeInput,
    onClickToInputHandler,
    saveChanges
  } = eventHandler.AddListEventHandler();

  return !listEvent ? (
    <>
      <div
        className="flex space-x-3 items-center ml-2 cursor-pointer"
        onClick={onClickToInputHandler}
      >
        <FaPlus />
        <p>Add New List</p>
      </div>
    </>
  ) : (
    <>
      <div className="flex space-x-1">
        <input
          autoFocus
          id="AddListBtn"
          type="text"
          placeholder="New List Name"
          value={ListValue}
          onChange={OnChangeInput}
          className="p-2 bg-slate-100 shadow-inner rounded w-full outline-none"
          onKeyUp={inputKeyUpHandler}
        />
        <button className="p-2 shadow-lg rounded" onClick={saveChanges}>
          <FaCheck />
        </button>
        <button className="p-2 shadow-lg rounded" onClick={closeInputHandler}>
          <FaX />
        </button>
      </div>
    </>
  );
};

export default AddList;
