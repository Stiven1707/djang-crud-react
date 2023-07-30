import { useForm } from 'react-hook-form';
import { createTask, deleteTask } from '../api/tasks.api';
import { useNavigate, useParams } from 'react-router-dom';

export function TaskFormPage() {
  const { register, handleSubmit, formState: { errors } } = useForm()
  const params = useParams();
  const navigate = useNavigate();

  const onSubmit = handleSubmit(async data => {
    await createTask(data);
    navigate('/tasks');
  })

  return (
    <div>
      <form onSubmit={onSubmit}>
        <input
          type="text"
          placeholder="Write a title"
          {...register("title", { required: true })}
        />
        {errors.title && <span>This field is required</span>}
        <textarea
          placeholder="Write a description"
          {...register("description", { required: true })}
        >
        </textarea>
        {errors.description && <span>This field is required</span>}
        <input type="submit" value="Send" />
      </form>
      {params.id && <button
        onClick={async () => {
          const accepted = window.confirm('Are you sure you want to delete this task?');
          if (accepted) {
            await deleteTask(params.id);
            navigate('/tasks');
          }

        }}
      >Delete
      </button>
      }

    </div>
  )
}
