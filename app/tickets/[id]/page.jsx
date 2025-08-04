export const dynamic = 'force-dynamic';

const getTicket = async (id) => {
  const res = await fetch(`http://localhost:4000/tickets/${id}`, {
    next: {
      revalidate: 60,
    },
  });
  if (!res.ok) throw new Error('Failed to fetch ticket');
  return res.json();
};

// export async function generateStaticParams() {
//   // Optional: preload paths if using SSG
//   return [];
// }

// ✅ FIX: Use a named async function
export default async function TicketDetails({ params }) {
  const { id } = await Promise.resolve(params);

  const ticket = await getTicket(id);
  return (
    <main>
      <nav>
        <h2>Ticket Details</h2>
      </nav>
      <div className="card">
        <h3>{ticket.title}</h3>
        <small>Created by {ticket.user_email}</small>
        <p>{ticket.body}</p>
        <div className={`pill ${ticket.priority}`}>
          {ticket.priority} priority
        </div>
      </div>
    </main>
  );
}
