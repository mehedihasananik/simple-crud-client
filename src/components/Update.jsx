import { useLoaderData } from "react-router-dom";

const Update = () => {
  const data = useLoaderData();

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const email = form.email.value;
    console.log(name, email);
  };

  return (
    <div>
      {" "}
      <div className="flex justify-center pt-5">
        <form onSubmit={handleSubmit} className="flex flex-col w-[25%] gap-y-2">
          <input
            className="border px-2 py-1 capitalize "
            type="text"
            name="name"
            id=""
            placeholder="name"
            defaultValue={data.name}
          />
          <input
            className="border px-2 py-1 capitalize "
            type="email"
            name="email"
            id=""
            placeholder="email"
            defaultValue={data.email}
          />
          <div className="flex justify-center">
            <button
              className="text-white bg-blue-600 py-1.5 w-28 rounded-md"
              type="submit"
            >
              Update
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Update;
