import React, { useState, useRef} from 'react';
import {connect} from 'react-redux'
import { Redirect } from 'react-router-dom'

function NewPostForm(props) {
    const post = useRef(" ")
    const name = useRef(" ")
    const [redirect, setRedirect] = useState(false)


    function submit(event) {
        const {dispatch} = props;
        event.preventDefault();
        console.log(post.current.value)
        console.log(name.current.value)
        const action = {
            type:'ADD-POST',
            name: name.current.value,
            post: post.current.value
        }
        dispatch(action)
        setRedirect(true)
    }
    
    return (
        <div>
            {redirect ? <Redirect to='/allPosts' /> : ''}
            <form onSubmit={submit}>
            <input ref={post}></input>
            <input ref={name} ></input>
            <button type="submit"> </button>
            </form>
           
       
        </div>
    )
}
export default connect() (NewPostForm);