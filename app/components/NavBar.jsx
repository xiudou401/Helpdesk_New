import Link from 'next/link';
import LogoutButton from './LogoutButton';

export default function NavBar({ user }) {
  return (
    <nav>
      <h1>Dojo Helpdesk</h1>
      <Link href="/">Dashboard</Link>
      <Link href="/tickets" className="mr-auto">
        Tickets
      </Link>
      {user && <span>Hello, {user.email}</span>}
      <LogoutButton />
    </nav>
  );
}
