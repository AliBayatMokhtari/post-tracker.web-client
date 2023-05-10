import { BiArrowBack } from "react-icons/bi";
import { useNavigate } from "react-router-dom";

export default function BackButton() {
  const navigate = useNavigate();

  const onClick = () => {
    navigate(-1);
  };

  return <BiArrowBack className="text-xl cursor-pointer" onClick={onClick} />;
}
