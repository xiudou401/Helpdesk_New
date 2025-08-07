// app/(protected)/layout.jsx or wherever your layout is
import { cookies, headers } from 'next/headers';
import { createServerComponentClient } from '@supabase/auth-helpers-nextjs';
import NavBar from '../components/NavBar';

const DashboardLayout = async ({ children }) => {
  const supabase = createServerComponentClient({
    cookies,
  });

  const {
    data: { session },
  } = await supabase.auth.getSession();

  return (
    <>
      <NavBar user={session?.user} />
      {children}
    </>
  );
};

export default DashboardLayout;
