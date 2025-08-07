// app/(protected)/layout.jsx or wherever your layout is
import { cookies } from 'next/headers';
import { createServerComponentClient } from '@supabase/auth-helpers-nextjs';
import NavBar from '../components/NavBar';
import { redirect } from 'next/navigation';

const DashboardLayout = async ({ children }) => {
  const supabase = createServerComponentClient({
    cookies,
  });

  const {
    data: { session },
  } = await supabase.auth.getSession();

  if (!session) {
    redirect('/login');
  }

  return (
    <>
      <NavBar user={session?.user} />
      {children}
    </>
  );
};

export default DashboardLayout;
