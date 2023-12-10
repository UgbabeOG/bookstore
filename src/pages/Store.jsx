import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
function Store() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    // const controller = new AbortController();
    let fetching = true;
    const fetchPost = async () => {
      setLoading(true);
      if (fetching) {
        const res = await axios.get(
          "https://jsonplaceholder.typicode.com/posts"
        );

        setPosts(res.data);
      }
      setLoading(false);
    };
    fetchPost();
    return () => {
      // controller.abort();
      fetching = false;
    };
  }, []);

  return (
    <main className="bg-white flex flex-col">
      <div className="container mx-auto py-20 max-w-[960px] px-5">
        <h3 className="text-cyan-500">All Posts</h3>
        <div className="grid sm:grid-cols-2 md:grid-col3 gap-3">
          {loading
            ? "Loading..."
            : posts.map((post) => (
                <Link
                  state={post}
                  to={`/store/${post.id}`}
                  key={post.id}
                  className="flex hover:text-slate-300 hover:bg-sky-700 p-4 text-slate-400  gap-2 shadow-md rounded-md bg-white flex-col "
                >
                  <h3 className="text-indigo-400 uppercase text-2xl md:text-3xl">
                    {post.title}
                  </h3>
                  <p className="text-sm md:text-md leading-loose text-justified py-2">
                    {post.body}
                  </p>
                </Link>
              ))}
        </div>
      </div>
    </main>
  );
}

export default Store;
