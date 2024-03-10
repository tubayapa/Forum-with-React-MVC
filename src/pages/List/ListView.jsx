//view kullanici tarafindan gorunen arayuz

import PopupController from "../../components/Popup/PopupController";

const ListView = ({ posts, selectedUser, setSelectedUser }) => {
  return (
    <div className=" text-white container-sm px-5 md:px-4- lg:px-52 py-4">
      <h1>
        Number of Posts <span className="font-bold">{posts.length}</span>
      </h1>

      <div>
        {posts.length === 0 ? (
          <p>Loading</p>
        ) : (
          posts.map((post) => (
            <div
              className="bg-red-500 w-full my-5 p-4 rounded-md cursor-pointer transition shadow-md shadow-gray-400 hover:shadow-cyan-400 hover:shadow-lg "
              key={post.id}
            >
              <div className="flex justify-between">
                <h3>{post.title}</h3>
                <p
                  onClick={() => setSelectedUser(post.user)}
                  className="font-bold"
                >
                  {post.user}
                </p>
              </div>

              <p className="max-w-[600px] lg:max-w-[900px] mt-2">{post.text}</p>
            </div>
          ))
        )}
      </div>

      {/* bir kullanici seciliyse onun gonderilerini gosterecegimiz pencere ac */}

      {selectedUser && (
        <PopupController
          user={selectedUser}
          close={() => setSelectedUser(null)}
        />
      )}
    </div>
  );
};

export default ListView;
