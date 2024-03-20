import dynamic from "next/dynamic";
import Navbar from '@/layout/partials/Navbar'

export default function DefaultLayout(props) {
  const Footer = () => {
    const Component = dynamic(() => import("@/layout/partials/Footer"));
    return <Component />;
  };

  return (
    <div className="relative flex flex-col min-h-screen">
      <Navbar></Navbar>
      <div className="relative flex flex-col justify-center items-center w-full max-w-[1920px] h-full min-h-screen">{props.children}</div>
    </div>
  );
}
