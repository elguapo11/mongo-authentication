import { useState, useRef } from 'react';
import axios from 'axios';

function EditPost({ postId, handleEdit }) {
  const [isEditing, setIsEditing] = useState(false);
  const updatedContentRef = useRef();

  const handleEditClick = () => {
    setIsEditing(true);
  };

  const handleCancelClick = () => {
    setIsEditing(false);
  };

  const handleSaveClick = async () => {
    try {
      const updatedContent = updatedContentRef.current.value;

      // Call the handleEdit function passed from the parent component
      await handleEdit(postId, updatedContent);

      // Reset the editing state
      setIsEditing(false);
    } catch (error) {
      console.error('Error updating post:', error);
    }
  };

  return (
    <div>
      {!isEditing ? (
        <button onClick={handleEditClick}>Edit</button>
      ) : (
        <div>
          <textarea
            className='defaultValue_update'
            ref={updatedContentRef}
            defaultValue={'Update your thoughts'}
          />
          <button onClick={handleSaveClick}>Save</button>
          <button onClick={handleCancelClick}>Cancel</button>
        </div>
      )}
    </div>
  );
}

export default EditPost;
