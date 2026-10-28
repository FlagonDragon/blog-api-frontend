function PostDiv({post}) {

    return(
    <div className="postContainer"> 
        <ul>
          <li>{post.title}</li>
          <li>{post.content}</li>
          <li>By {post.authorName}</li>
        </ul>
      </div>
    )

}

export default PostDiv