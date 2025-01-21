import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";

const NavbarServer = async () => {
  const session = await getServerSession(authOptions);
  return session;
};

export default NavbarServer;
