import NavbarClient from '../components/NavbarClient';
import { getServerSession } from 'next-auth';
import { authOptions } from '@/lib/auth';

const Navbar = async () => {
  const session = await getServerSession(authOptions);
  return <NavbarClient session={session} />;
};

export default Navbar;
