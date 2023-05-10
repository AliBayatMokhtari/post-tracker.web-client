import BackButton from "../components/BackButton";
import Button from "../components/Button";
import Input from "../components/Input";

export default function AddTrackingPage() {
  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  };

  return (
    <div className="h-full w-full justify-center flex">
      <div className="w-full h-full flex justify-center items-center">
        <form
          className="flex flex-col justify-center items-center w-[90%] h-[90%] bg-white rounded-lg shadow-md space-y-4 relative"
          onSubmit={onSubmit}
        >
          <div className="absolute top-3 start-3">
            <BackButton />
          </div>
          <h1 className="absolute top-7 text-2xl font-bold underline text-slate-900">
            New Tracking
          </h1>
          <div>
            <div className="ps-1 mb-1 text-slate-700">
              <label htmlFor="title">Title:</label>
            </div>
            <div>
              <Input
                required
                aria-required
                type="text"
                name="title"
                placeholder="Title"
                role="textbox"
              />
            </div>
          </div>
          <div>
            <div className="ps-1 mb-1 text-slate-700">
              <label htmlFor="code">Code:</label>
            </div>
            <div>
              <textarea
                required
                aria-required
                name="code"
                placeholder="Code"
                className="bg-white border p-4 rounded-md focus:outline-blue-500 resize-none"
              />
            </div>
          </div>
          <div>
            <Button
              name="loginButton"
              className="w-[220px] mt-10"
              role="button"
            >
              Login
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
}
