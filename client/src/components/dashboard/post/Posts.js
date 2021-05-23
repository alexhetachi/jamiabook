import React, { Component } from 'react';
import AddPost from './AddPost';
import InfiniteScroll from 'react-infinite-scroll-component';
import { connect } from 'react-redux';
import { fetchPosts } from '../../../actions/postActions';
import { addComment } from '../../../actions/postActions';
import { addLike } from '../../../actions/postActions';


class Posts extends Component {

    state = {
        posts:[],
        // cmt:'',
    }

    componentDidMount() {
        // this.setState({posts:this.props.posts})
        this.props.fetchPosts()
    }

    componentDidUpdate(prevProps){
        if(prevProps.posts !== this.props.posts){
            console.log('vro')
            this.setState({posts:this.props.posts})
        }else if(prevProps.post != this.props.post){
            if(this.props.post){
                let newposts = [...this.state.posts];
                newposts.unshift(this.props.post)
                console.log('vro add post:'+this.props.post.fname)
                this.setState({posts:newposts})
            }
        }else if(prevProps.comment != this.props.comment){
            if(this.props.comment){
                let newComments = [...this.state.posts];
                for(var i in newComments){
                    if(newComments[i]._id === this.props.comment.post_id){
                        newComments[i].comments.unshift(this.props.comment)
                        break;
                    }
                }
                this.setState({posts:newComments})
            }
        }else if(prevProps.like != this.props.like){
            if(this.props.like){
                let newLikes = [...this.state.posts];
                const newOneLike = {
                    user_id: this.props.like.user_id
                }
                for(var j in newLikes){
                    if(newLikes[j]._id === this.props.like.post_id){
                        newLikes[j].likes.unshift(newOneLike)
                        break;
                    }
                }
                this.setState({posts:newLikes})
            }
        }
    }

    fetchStatePosts = () => {
        this.props.fetchPosts()
    };


    // onChange = (e) => {
    //     this.setState({cmt:e.target.value})
    // }
    
    onKeyPress = (e) => {
        //it triggers by pressing the enter key
        if (e.key === 'Enter') {
            e.preventDefault()
            const post_id = e.target.id
            const user_id = this.props.user._id
            const comment = e.target.value
            console.log(comment)
            if(comment.length>0 && comment.trim() !== ''){
                const newComment = {
                    post_id,
                    user_id,
                    fname:this.props.user.fname,
                    lname:this.props.user.lname,
                    user_img:this.props.user.profile_imgsrc,
                    comment,
                }
                this.props.addComment(newComment)
                // this.setState({cmt:''})
                e.target.value = ''
            }
        }
    }

    onClick = (e, post) => {
        // if(e.target.id)
        let t=0;
        post.likes.map(userid => {
            if(userid.user_id === this.props.user._id){
                alert('Already Liked')
                t=1;
            }
        })
        if(t==0){
            const newLike = {
                post_id:post._id,
                user_id:this.props.user._id
            }
            this.props.addLike(newLike)
        }
    }


    render() {

        const postItems = this.state.posts.map((post) => (

            <div class="post">
                <table>
                <tr>
                    <td><img src={post.user_img} class="logo-img" alt=""/></td>
                    <td><strong>{post.fname} {post.lname} <br/>({this.props.user?this.props.user.branch:''}, {this.props.user?this.props.user.semester:''})</strong></td>

                    <button class="report">
                        <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" fill="currentColor" class="bi bi-backspace" viewBox="0 0 16 16">
                            <path d="M5.83 5.146a.5.5 0 0 0 0 .708L7.975 8l-2.147 2.146a.5.5 0 0 0 .707.708l2.147-2.147 2.146 2.147a.5.5 0 0 0 .707-.708L9.39 8l2.146-2.146a.5.5 0 0 0-.707-.708L8.683 7.293 6.536 5.146a.5.5 0 0 0-.707 0z"/>
                            <path d="M13.683 1a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2h-7.08a2 2 0 0 1-1.519-.698L.241 8.65a1 1 0 0 1 0-1.302L5.084 1.7A2 2 0 0 1 6.603 1h7.08zm-7.08 1a1 1 0 0 0-.76.35L1 8l4.844 5.65a1 1 0 0 0 .759.35h7.08a1 1 0 0 0 1-1V3a1 1 0 0 0-1-1h-7.08z"/>
                        </svg>
                    </button>
                </tr>
                </table>
                <hr style={{margin: '5px'}}/>
                <p class="post-text">
                    {post.discp}
                </p>
                {/* <img src={`./uploads/${post.post_img}`} class="post-img" alt=""/> */}
                <img src={post.post_img} class="post-img" alt=""/>
                <hr style={{marginTop:'0', backgroundColor:'black'}}/>
                <button class="like" id={post._id} onClick={(e)=>{this.onClick(e,post)}}>❤</button>
                <span class="no-of-likes">{post.likes.length}</span>

                <input 
                    type="text" 
                    class="comment" 
                    placeholder="Comment"
                    id={post._id}
                    // onChange={this.onChange}
                    onKeyPress={this.onKeyPress}
                    // value={this.state.cmt}
                />
                <span class="no-of-comments">{post.comments.length}</span>
                <hr/>

                {post.comments.map(comment => (
                    <div class="comment-by-others">
                    <img src={comment.user_img} class="comment-img" alt=""/>
                    <span class="commentor">{this.props.user?(this.props.user._id === comment.user_id?'You':(<span>{comment.fname} {comment.lname}</span>)):''}</span><br/>
                    <span class="actual-comment">   
                    {comment.comment}
                    </span>
                    </div>
                ))}
                {/* <div class="comment-by-others">
                <img src="Images/user.png" class="comment-img" alt=""/>
                <span class="commentor">Another User</span><br/>
                <span class="actual-comment">   
                This is a comment
                </span>
                </div> */}
            </div>

        ));


        return (
            // <div>
                <div class="col-md-6" style={{padding: '10px 30px 10px 30px'}}>
                    {/* <!-- posts go here --> */}

                    <AddPost/>

                    <InfiniteScroll
                        dataLength={this.props.posts.length}
                        next={this.fetchStatePosts}
                        hasMore={true}
                        loader={<center><h4 style={{color:'white'}}>Loading/End of posts...</h4></center>}
                    >
                        {postItems}
                    </InfiniteScroll>                 





        {/* <div class="post">
            <table>
               <tr>
                  <td><img src="Images/user.png" class="logo-img" alt=""/></td>
                  <td><strong>User name (CSE, Sem I)</strong></td>

                  <button class="report">
                     <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" fill="currentColor" class="bi bi-backspace" viewBox="0 0 16 16">
                        <path d="M5.83 5.146a.5.5 0 0 0 0 .708L7.975 8l-2.147 2.146a.5.5 0 0 0 .707.708l2.147-2.147 2.146 2.147a.5.5 0 0 0 .707-.708L9.39 8l2.146-2.146a.5.5 0 0 0-.707-.708L8.683 7.293 6.536 5.146a.5.5 0 0 0-.707 0z"/>
                        <path d="M13.683 1a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2h-7.08a2 2 0 0 1-1.519-.698L.241 8.65a1 1 0 0 1 0-1.302L5.084 1.7A2 2 0 0 1 6.603 1h7.08zm-7.08 1a1 1 0 0 0-.76.35L1 8l4.844 5.65a1 1 0 0 0 .759.35h7.08a1 1 0 0 0 1-1V3a1 1 0 0 0-1-1h-7.08z"/>
                      </svg>
                  </button>
               </tr>
            </table>
            <hr style={{margin: '5px'}}/>
            <p class="post-text">
               Lorem, ipsum dolor sit amet consectetur adipisicing elit. Est, unde harum nesciunt nobis amet sit quod asperiores animi ipsa officiis blanditiis esse fugit, omnis aut possimus explicabo autem error molestiae beatae aliquam deleniti expedita perspiciatis. Molestias quis voluptas quasi exercitationem ducimus minima corrupti ipsum iusto deleniti asperiores, accusamus omnis fugiat, voluptate aut, qui totam dolore? Libero culpa similique alias reprehenderit tempore vitae consectetur consequuntur blanditiis eveniet! In modi fugit corrupti atque quasi voluptatibus sint, dolore nemo vero sapiente placeat sequi eius esse odit impedit ipsum dolorum. Nemo saepe, aperiam enim minima, ea necessitatibus error numquam a, quidem odit fugiat.
            </p>
            <img src="Images/logo.jpg" class="post-img" alt=""/>
            <hr style={{marginTop: '0px', backgroundColor: 'black'}}/>
            <button class="like">❤</button>
            <span class="no-of-likes">0</span>

            <input type="text" class="comment" placeholder="Comment"/>
            <span class="no-of-comments">0</span>
            <hr/>
            <div class="comment-by-others">
               <img src="Images/user.png" class="comment-img" alt=""/>
               <span class="commentor">Another User</span><br/>
               <span class="actual-comment">   
               This is a comment
               </span>
            </div>

            <div class="comment-by-others">
               <img src="Images/user.png" class="comment-img" alt=""/>
               <span class="commentor">Another User</span><br/>
               <span class="actual-comment">   
               This is a comment
               </span>
            </div>

            <div class="comment-by-others">
               <img src="Images/user.png" class="comment-img" alt=""/>
               <span class="commentor">Another User</span><br/>
               <span class="actual-comment">   
               This is a comment
               </span>
            </div>
         </div>


         <div class="post">
            <table>
               <tr>
                  <td><img src="Images/user.png" class="logo-img" alt=""/></td>
                  <td><strong>User name (CSE, Sem I)</strong></td>

                  <button class="report">
                     <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" fill="currentColor" class="bi bi-backspace" viewBox="0 0 16 16">
                        <path d="M5.83 5.146a.5.5 0 0 0 0 .708L7.975 8l-2.147 2.146a.5.5 0 0 0 .707.708l2.147-2.147 2.146 2.147a.5.5 0 0 0 .707-.708L9.39 8l2.146-2.146a.5.5 0 0 0-.707-.708L8.683 7.293 6.536 5.146a.5.5 0 0 0-.707 0z"/>
                        <path d="M13.683 1a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2h-7.08a2 2 0 0 1-1.519-.698L.241 8.65a1 1 0 0 1 0-1.302L5.084 1.7A2 2 0 0 1 6.603 1h7.08zm-7.08 1a1 1 0 0 0-.76.35L1 8l4.844 5.65a1 1 0 0 0 .759.35h7.08a1 1 0 0 0 1-1V3a1 1 0 0 0-1-1h-7.08z"/>
                      </svg>
                  </button>
               </tr>
            </table>
            <hr style={{margin: '5px'}}/>
            <p class="post-text">
               Lorem, ipsum dolor sit amet consectetur adipisicing elit. Est, unde harum nesciunt nobis amet sit quod asperiores animi ipsa officiis blanditiis esse fugit, omnis aut possimus explicabo autem error molestiae beatae aliquam deleniti expedita perspiciatis. Molestias quis voluptas quasi exercitationem ducimus minima corrupti ipsum iusto deleniti asperiores, accusamus omnis fugiat, voluptate aut, qui totam dolore? Libero culpa similique alias reprehenderit tempore vitae consectetur consequuntur blanditiis eveniet! In modi fugit corrupti atque quasi voluptatibus sint, dolore nemo vero sapiente placeat sequi eius esse odit impedit ipsum dolorum. Nemo saepe, aperiam enim minima, ea necessitatibus error numquam a, quidem odit fugiat.
            </p>
            <img src="Images/logo.jpg" class="post-img" alt=""/>
            <hr style={{marginTop: '0px', backgroundColor: 'black'}}/>
            <button class="like">❤</button>
            <span class="no-of-likes">0</span>

            <input type="text" class="comment" placeholder="Comment"/>
            <span class="no-of-comments">0</span>
            <hr/>
            <div class="comment-by-others">
               <img src="Images/user.png" class="comment-img" alt=""/>
               <span class="commentor">Another User</span><br/>
               <span class="actual-comment">   
               This is a comment
               </span>
            </div>

            <div class="comment-by-others">
               <img src="Images/user.png" class="comment-img" alt=""/>
               <span class="commentor">Another User</span><br/>
               <span class="actual-comment">   
               This is a comment
               </span>
            </div>

            <div class="comment-by-others">
               <img src="Images/user.png" class="comment-img" alt=""/>
               <span class="commentor">Another User</span><br/>
               <span class="actual-comment">   
               This is a comment
               </span>
            </div>
         </div> */}


                </div>
            // </div>
        );
    }
}

const mapStateToProps=state=>({
    posts:state.post.items,
    post:state.post.item,
    comment:state.post.cmtitem,
    like:state.post.likeitem,
    postLoading:state.post.postLoading,
    auth:state.auth,
    user:state.auth.user,
});

export default connect(mapStateToProps, { fetchPosts, addComment, addLike })(Posts);
// export default Posts;