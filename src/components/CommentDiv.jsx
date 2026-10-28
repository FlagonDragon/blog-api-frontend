function CommentDiv({comment}) {

    return(
    <div className="commentContainer"> 
        <ul>
          <li>{comment.content}</li>
          <li>By {comment.authorName}</li>
        </ul>
      </div>
    )

}

export default CommentDiv;