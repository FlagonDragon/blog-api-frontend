import { useState, useEffect } from "react";
import { useLocation } from "react-router";
import PostDiv from "./PostDiv";
import CommentDiv from "./CommentDiv";
import NewComment from "./NewComment";

async function fetchComments(postId) {

  try {

  const response = await fetch(`https://blog-api-iv3t.onrender.com/posts/${postId}`)

  let postsData = await response.json();

  // console.log(postsData);
  // console.log(response.headers);
  // console.log(response.headers.map);
  // console.log(...response.headers);

  return postsData;

  } catch (error) {

    console.log(error);

  }

};

function Post() {
  const [comments, setComments] = useState(null);

  const post = useLocation().state;

  useEffect(() => {
      
    async function fetchCommentsWrapper() {

      try {        

        const data = await fetchComments(post.id);
        // console.log(data);
        setComments(data);
        
      } catch (error) {
        console.error(error);
      }

    }

    fetchCommentsWrapper();
      
  }, [post.id])


  return(
  <>

    <h1> Post </h1>

    <PostDiv post={post}></PostDiv>

    <h2> Comments </h2>

    <NewComment postId={post.id}></NewComment> 

    {comments && comments.map(comment => {

      return (
      <CommentDiv comment={comment}></CommentDiv>
      )

    })}
    
  </>
  )

}

export default Post;