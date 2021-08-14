// Import packages
import { NextPage } from "next";
import Head from "next/head";
import dynamic from "next/dynamic";

// Components
const Navbar = dynamic(import("./Navbar"));
const Footer = dynamic(import("./Footer"));

// Type declarations
type props = {
  title: string;
};

const Layout: NextPage<props> = ({ children, title }) => {
  return (
    <div>
      <Head>
        <title>{title} | Thailand endurance cup</title>
      </Head>
      <Navbar />
      <main>{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;
