const PopupView = ({ close, user, userPosts }) => {
  return (
    <div className="grid place-items-center w-full h-full fixed bg-slate-900 bg-opacity-50 inset-0">
      <div className="w-3/4 max-w-[600px] bg-slate-900 p-5 rounded-md">
        <div className="flex justify-between items-center">
          <h4>
            Posts by user<span className="font-bold text-red-500"> {user}</span>
          </h4>
          <button className="bg-red-500 rounded-md p-2" onClick={close}>
            Close
          </button>
        </div>

        {userPosts.length === 0 ? (
          <p>Loading</p>
        ) : (
          userPosts.map((post) => (
            <div className="bg-slate-600 p-3 rounded-md my-4">
              <h2 className="font-bold">{post.title}</h2>
              <p>{post.text}</p>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default PopupView;
