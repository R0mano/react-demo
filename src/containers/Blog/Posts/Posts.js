import React, {Component} from 'react';
import axios from '../../../axios';
import Post from '../../../components/Post/Post';
import classes from './Posts.module.css';

class Posts extends Component {
    state = {
        posts: [],
    };

    postSelectedHandler = (id) => {
        this.setState({ selectedPostId: id });
    };

    componentDidMount() {
        console.log(this.props, ' <-props')
        axios
            .get("/posts")
            .then((response) => {
                const posts = response.data.slice(0, 4);
                const updatedPosts = posts.map((post) => {
                    return {
                        ...post,
                        author: "Romain",
                    };
                });
                this.setState({ posts: updatedPosts });
                // console.log(response, ' <- This is the rsponse object');
            })
            .catch((error) => {
                console.log(error, " <- This is the error message");
                // this.setState({ error: true });
            });
    }

    render() {
        let posts = <p style={{ textAlign: "center" }}>Something went wrong</p>;
        if (!this.state.error) {
            posts = this.state.posts.map((post) => {
                return (
                    <Post
                        key={post.id}
                        title={post.title}
                        author={post.author}
                        clicked={() => this.postSelectedHandler(post.id)}
                    />
                );
            });
        }
        return (
            <section className={classes.Posts}>{posts}</section>
        )
    }
}
export default Posts;