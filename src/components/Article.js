import React from "react";

function Article({post}){ 
    return(
        <article>
            <h3>{post.title}</h3>
            <small>
                {post.date="January 1, 1970"+'.' } 
                + {post.minutes<30?  "☕️"+post.minutes + "min read":
                "🍱".repeat(Math.round(post.minutes/10))+Math.round(post.minutes/5)*5 + "min read"}
                </small>
            <p>{post.preview}</p>
        </article>
        )
}
export default Article;