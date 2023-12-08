import axios from 'axios';
import { useRef } from 'react';

function Create() {
  const titleRef = useRef();
  const contentRef = useRef();
  const tagRef = useRef();

  function onSubmit(e) {
    e.preventDefault();
    const postBody = {
      Title: titleRef.current.value,
      Content: contentRef.current.value,
    };

    axios
      .post('http://localhost:3000/posts/create', postBody)

      .then((response) => console.log('post created'));
    window.location.reload();
  }

  return (
    <form id='form' onSubmit={onSubmit}>
      <label htmlFor='title'>Title</label>
      <input ref={titleRef} type='title' id='title' />
      <span></span>
      <label htmlFor='content'>Content</label>
      <input ref={contentRef} type='content' id='content' />
      <span></span>
      <button type='submit'>Submit</button>
    </form>
  );
}

export default Create;
