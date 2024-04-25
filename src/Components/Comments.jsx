import { getComments, createComment, deleteComment } from "./Client";
import { useState, useEffect } from "react";

const Comments = ({ id }) => {
  const [comments, setComments] = useState([]);

  const fetchData = async () => {
    const data = await getComments(id);
    setComments(data);
  };

  useEffect(() => {
    fetchData();
  }, [id]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    await createComment({
      event_id: id,
      name: e.target.name.value,
      commentText: e.target.commentText.value,
    });
    console.log('submit comment');
    e.target.reset();
    fetchData();
  };

  const handleDelete = async (id) => {
    console.log(id);
    await deleteComment(id);
    fetchData();
  }

  return (
    <div className='p-4'>
      <h2 className='text-2xl font-bold mb-4'>Add a Comment</h2>
      <form onSubmit={handleSubmit} className='mb-8'>
        <input
          type='text'
          name='name'
          placeholder='Name'
          className='border p-2 rounded mb-2 w-full'
        />
        <input
          type='text'
          name='commentText'
          placeholder='Comment'
          className='border p-2 rounded mb-2 w-full'
        />
        <button
          type='submit'
          className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded'
        >
          Submit
        </button>
      </form>

      <h2 className='text-2xl font-bold mb-4'>Comments</h2>
      <ul>
        {comments &&
          comments.map((comment) => (
            <li key={comment.id} className='mb-4 p-4 border rounded'>
              <p className='font-bold'>{comment.name}</p>
              <p className='mb-2'>{comment.commentText}</p>
              <button
                onClick={() => handleDelete(comment.id)}
                className='bg-red-500 hover:bg-red-700 text-white font-bold py-1 px-2 rounded'
              >
                Delete
              </button>
            </li>
          ))}
      </ul>
    </div>
  );
};

export default Comments;
