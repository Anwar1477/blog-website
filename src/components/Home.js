import React, { useEffect, useState } from "react";
import { getDocs, collection, deleteDoc, doc } from "firebase/firestore";
import { db, auth } from "../firebase.init";


function Home({ isAuth }) {
  const [postLists, setPostList] = useState([]);
  const postsCollectionRef = collection(db, "posts");

  useEffect(() => {
    const getPosts = async () => {
      const data = await getDocs(postsCollectionRef);
      setPostList(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    };

    getPosts();
  });

  const deletePost = async (id) => {
    const postDoc = doc(db, "posts", id);
    window.confirm("Are You want to delete this post?")
    await deleteDoc(postDoc);


  };
  return (
    <div className="homePage">
      {postLists.map((post) => {
        return (
          <div className="post">
            <div className="postHeader">
              <div className="title">
                <h1> {post.title}</h1>
              </div>
              <div className="deletePost">
                {isAuth && post.author.id === auth.currentUser.uid && (
                  <button style={{'backgroundColor':"green",'borderRadius':'5px','padding':"10px", "fontSize":"12px","color":"white"}}
                    onClick={() => {
                      deletePost(post.id);
                    }}
                  >
                    Delete Post
                  </button>
                )}
              </div>
            </div>
            <div className="postTextContainer"> {post.postText} </div>
            <h3 style={{color: "blue",'fontSize':"10px"}}><span style={{color: "red"}}>Author:</span> {post.author.name}</h3>
          </div>
        );
      })}
    </div>
  );
}

export default Home;