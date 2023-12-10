import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import axios from "axios";
import HeadTag from "../components/HeadTag";

function SingleStore() {
  const [loading, setLoading] = useState(false);
  const location = useLocation();
  const [post, setPost] = useState(location.state || {});
  const postId = location.pathname.split("/").slice(-1)[0];
  useEffect(() => {
    if (!location.state) {
      const fetchPost = async () => {
        setLoading(true);

        const res = await axios.get(
          `https://jsonplaceholder.typicode.com/posts/${+postId}`
        );
        setPost(res.data);
        setLoading(false);
      };
      fetchPost();
    }
  }, [postId, location.state]);

  return (
    <>
    
    <HeadTag key={"store"} title={post?.title||"single post"} description={post?.body || "best single books"} />
    <main className="bg-white flex flex-col">
      <div className="container mx-auto py-20 max-w-[960px] px-5">
        <h3 className="text-cyan-500"> Post</h3>
        <div className="grid sm:grid-cols-1 place-items-center gap-3">
          {loading ? (
            "Loading..."
          ) : (
            <div
              key={post.id}
              className="flex gap-2 shadow-md rounded-md bg-white flex-col p-4"
            >
              <h3 className="text-indigo-400 uppercase text-2xl md:text-3xl">
                {post.title}
              </h3>
              <p className="text-sm md:text-md text-slate-400 leading-loose text-justified py-2">
                {post.body}
              </p>
            </div>
          )}
        </div>
      </div>
    </main>
    </>
  );
}

export default SingleStore;
