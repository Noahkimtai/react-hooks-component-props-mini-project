import React, {ReactDOM} from "react";
import Article from "./Article";
function ArticleList({posts}){
    const postComponent =posts.map((post) => <Article post={post}/>)
    return(
        <main >
             {postComponent}   
        </main>        
    );
}
export default ArticleList;