import {useForm} from 'react-hook-form';
import { createTask } from '../api/tasks.api';
import {useNavigate} from 'react-router-dom';

export function TaskFormPage() {
  const { register, handleSubmit, formState:{errors} } = useForm()

  const navigate = useNavigate();

  const onSubmit = handleSubmit(async data => {
    const res = await createTask(data);
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
    </div>
  )
}
