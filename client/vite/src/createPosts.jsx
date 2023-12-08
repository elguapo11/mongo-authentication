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
      <label htmlFor='title'></label>
      <input
        ref={titleRef}
        placeholder='Write a Title'
        type='title'
        id='title'
      />
      <br></br>
      <label htmlFor='content'></label>
      <input
        ref={contentRef}
        placeholder='Write your Thoughts'
        type='content'
        id='content'
      />
      <span></span>
      <button type='submit'>Submit</button>
    </form>
  );
}

export default Create;
