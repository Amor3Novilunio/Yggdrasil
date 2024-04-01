interface Props {
  icon: any;
  name: string;
  count: number;
  active: boolean;
}

const NavigationItem = ({ icon, name, count, active }: Props) => {
  return (
    <div
      className={`flex justify-between p-1 px-2 rounded hover:shadow-lg hover:bg-slate-100 cursor-pointer ${
        active ? "shadow-inner bg-slate-100 " : ""
      }`}
    >
      <div className="flex items-center space-x-3">
        {icon}
        <p className="font-bold">{name}</p>
      </div>
      <p className="shadow-lg p-1 px-2 rounded text-center bg-white">{count}</p>
    </div>
  );
};

export default NavigationItem;
