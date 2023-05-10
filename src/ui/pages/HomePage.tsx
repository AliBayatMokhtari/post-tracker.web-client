import { useEffect, useState } from "react";
import useGetTrackingList from "../../application/tracking/getTrackingList.use-case";
import AddTrackingListButton from "../components/AddTrackingListButton";

export default function HomePage() {
  const [list, setList] = useState<{ id: string; title: string }[]>([]);
  const { getTrackingList } = useGetTrackingList();

  useEffect(() => {
    getTrackingList().then(data => setList(data));
  }, []);

  return (
    <div className="h-full relative">
      <div className="p-2">
        <ul>
          {list.map(i => (
            <li key={i.id}>{i.title}</li>
          ))}
        </ul>
      </div>
      <div className="absolute bottom-2 end-2">
        <AddTrackingListButton />
      </div>
    </div>
  );
}
