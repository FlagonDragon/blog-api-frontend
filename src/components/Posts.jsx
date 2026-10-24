import { useState, useEffect } from "react";

async function logPosts() {

    try {

    const response = await fetch(`https://blog-api-iv3t.onrender.com/posts`)

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

function Posts() {
    const [posts, setPosts] = useState(null);
    

    useEffect(() => {
    
        async function logPostsWrapper() {
    
          try {        
    
            const data = await logPosts();
            // console.log(data);
            setPosts(data);
            
          } catch (error) {
            console.error(error);
          }
    
        }
    
        logPostsWrapper();
    
    }, [])

    console.log('pre');
    console.log(posts);
    // console.log(Array.isArray(posts));
    console.log('post');

    // let myArr = [{id: 1, title: 'title1', content: 'content1'}, {id: 2, title: 'title2', content: 'content2'}]

    return(
    <>
      <h1> Posts </h1>

      {posts && posts.map(post => {

        return (
        <ul key={post.id}>
          <li>{post.title}</li>
          <li>{post.content}</li>
        </ul>
        )

      })}

    </>
    )


    // <div>

    //     {posts.map((post) => {
            
    //         return(
    //           <>
    //             <div>{post.title}</div>
    //             <div>{post.content}</div>
    //           </>
    //         )

    //     })}

    // </div>
    

    // for (const post of Object.entries(posts)) {

    //     return(
    //         <div>
    //             <div>{post.title}</div>
    //             <div>{post.content}</div>
    //         </div>
    //     )

    // }

}

export default Posts;