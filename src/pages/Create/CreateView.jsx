const CreateView = ({ handleSubmit }) => {
  return (
    <div className="h-[90vh] grid place-items-center lg:m-10 lg:h-[50vh]">
      <form
        onSubmit={handleSubmit}
        className="bg-red-500 flex flex-col gap-4 w-2/4 max-w[700px] p-5 md:p-20 rounded-lg lg:p-10"
      >
        <h1 className="text-center text-xl">Create a New Post</h1>
        <div className="flex flex-col">
          <label className="mb-2 text-sm font-medium">Username</label>
          <input
            name="user"
            type="text"
            required
            placeholder="John"
            className="text-slate-900 text-sm rounded-lg p-2.5 w-full outline-none"
          />
        </div>

        <div className="flex flex-col">
          <label className="mb-2 text-sm font-medium">Title</label>
          <input
            name="title"
            type="text"
            required
            placeholder="How can I managed the components?"
            className="text-slate-900 text-sm rounded-lg  p-2.5 w-full outline-none"
          />
        </div>

        <div className="flex flex-col">
          <label className="mb-2 text-sm font-medium">Subject</label>
          <textarea
            name="text"
            type="text"
            required
            placeholder="..."
            className="max-h-[300px] min-h-[150px] text-slate-900 text-sm rounded-lg  p-2.5 w-full outline-none"
          />
        </div>

        <button
          className="bg-slate-900 rounded-lg p-2 transition hover:bg-slate-800"
          type="submit"
        >
          Send
        </button>
      </form>
    </div>
  );
};

export default CreateView;
