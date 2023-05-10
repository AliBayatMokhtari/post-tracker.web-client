import { useNavigate } from "react-router-dom";
import Button from "./Button";

export default function AddTrackingListButton() {
  const navigate = useNavigate();

  const onClick = () => {
    navigate("/add-tracking");
  };

  return (
    <Button className="w-10 h-10 rounded-full" onClick={onClick}>
      <span className="text-3xl">+</span>
    </Button>
  );
}
