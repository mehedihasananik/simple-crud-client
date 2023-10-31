const Home = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const email = form.email.value;
    const user = { name, email };
    form.reset();

    fetch("http://localhost:5000/users", {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(user),
    })
      .then((response) => response.json())
      .then((json) => {
        console.log(json);
        alert("user added");
      });
  };

  return (
    <div>
      <div className="flex justify-center pt-5">
        <form className="flex flex-col w-[25%] gap-y-2" onSubmit={handleSubmit}>
          <input
            className="border px-2 py-1 capitalize "
            type="text"
            name="name"
            id=""
            placeholder="name"
          />
          <input
            className="border px-2 py-1 capitalize "
            type="email"
            name="email"
            id=""
            placeholder="email"
          />
          <div className="flex justify-center">
            <button
              className="text-white bg-blue-600 py-1.5 w-28 rounded-md"
              type="submit"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Home;
