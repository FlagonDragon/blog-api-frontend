import { useLocation } from "react-router";



function Post() {

  const post = useLocation().state;

  console.log(post);


// const { post } = state;


    // const [posts, setPosts] = useState(null);

    return(
    <>
      <h1> Post </h1>

        <div> THIS IS A POST!!!
          <ul>
            <li>{post.title}</li>
            <li>{post.content}</li>
          </ul>
        </div>
    </>
    )

}

export default Post;