import { useRef } from 'react';
import axios from 'axios';

function Delete() {
  const postIdRef = useRef();

  function onSubmit(e) {
    e.preventDefault();
    const postId = postIdRef.current.value;

    axios
      .delete(`http://localhost:3000/posts/delete/${postId}`)
      .then((response) => console.log(`Post Id ${postId} has been deleted`));
    window.location.reload();
  }

  return (
    <form onSubmit={onSubmit}>
      <label htmlFor='Delete Post'> Delete Post # </label>
      <input ref={postIdRef} type='id_delete' id='id_delete' />
      <button type='submit'>Delete</button>
    </form>
  );
}
export default Delete;
