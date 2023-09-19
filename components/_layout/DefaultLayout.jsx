import dynamic from "next/dynamic";
import Sidebar from "@/layout/partials/Sidebar";

export default function DefaultLayout(props) {
  const Footer = () => {
    const Component = dynamic(() => import("@/layout/partials/Footer"));
    return <Component />;
  };

  return (
    <div className="relative flex flex-col min-h-screen pl-0 lg:pl-[260px] xl:pl-[300px] z-[1]">
      <Sidebar />
      <div className="relative flex-grow overflow-hidden">{props.children}</div>
    </div>
  );
}
