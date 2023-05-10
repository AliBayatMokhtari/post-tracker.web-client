import Button from "./Button";

export default function AddTrackingListButton() {
  const onClick = () => {
    console.log("btn clicked");
  };

  return (
    <Button className="w-10 h-10 rounded-full" onClick={onClick}>
      <span className="text-3xl">+</span>
    </Button>
  );
}
