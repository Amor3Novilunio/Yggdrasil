import Boards from "../components/Board";

const KanbanDashboard = () => {
  return (
    <>
      <div className="flex justify-between mt-5">
        <h1 className="text-3xl font-bold">Kanban Board</h1>
        <button className="bg-sky-500 rounded p-1 px-4 text-white hover:bg-sky-400">
          Create a List
        </button>
      </div>
      {/* List */}
      <div className="flex flex-wrap">
        <Boards list={[{ 1: 2 }, { 1: 2 }, { 1: 2 }]} title="Work" />
      </div>
    </>
  );
};
export default KanbanDashboard;
