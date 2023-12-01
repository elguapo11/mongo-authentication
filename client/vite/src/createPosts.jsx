import axios from 'axios';
import { useRef } from 'react';

function Create() {
    const titleRef = useRef();
    const contentRef = useRef();
  
    function onSubmit(e) {
      e.preventDefault();
      const postBody = {
        Title: titleRef.current.value,
        Content: contentRef.current.value,
      };
  
      axios
        .post("http://localhost:3000/posts/create", postBody)
  
        .then((response) => console.log('post created'));
    }
  
    return (
      <form onSubmit={onSubmit}>
        <label htmlFor="title">Title</label>
        <input ref={titleRef} type="title" id="title" />
        <span></span>
        <label htmlFor="title">Content</label>
        <input ref={contentRef} type="entry" id="entry" />
        <button type="submit">Submit</button>
        
      </form>
    );
  }
  
  export default Create;