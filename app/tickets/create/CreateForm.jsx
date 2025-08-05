'use client';
import { useRouter } from 'next/navigation';
import { useState } from 'react';

export default function CreateForm() {
  const router = useRouter();

  const [isLoading, setIsLoading] = useState(false);
  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');
  const [priority, setPriority] = useState('low');

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newTicket = {
      title,
      body,
      priority,
      user_email: 'mario@netninja.dev',
    };

    const res = await fetch('http://localhost:4000/tickets', {
      method: 'post',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(newTicket),
    });
    if (res.status === 201) {
      router.refresh();
      router.push('/tickets');
    }
  };

  return (
    <form className="w-1/2" onSubmit={handleSubmit}>
      <label>
        <span>Title:</span>
        <input
          required
          type="text"
          onChange={(e) => setTitle(e.target.value)}
          value={title}
        />
      </label>
      <label>
        <span>Body:</span>
        <input
          required
          type="text"
          onChange={(e) => setBody(e.target.value)}
          value={body}
        />
      </label>
      <label>
        <span>Priority:</span>
        <select onChange={(e) => setPriority(e.target.value)} value={priority}>
          <option value="low">Low Priority</option>
          <option value="medium">Medium Priority</option>
          <option value="high">High Priority</option>
        </select>
      </label>
      <button>
        {isLoading ? <span>Adding</span> : <span>Add Ticket</span>}
      </button>
    </form>
  );
}
