import { SlMenu } from "react-icons/sl";
import Image from "next/image";
import image1 from "@/public/images/brand-image.jpg";
import Link from "next/link";
import { useRouter } from "next/router";

const menu = [
  {
    title: "Home",
    url: "/",
  },
  {
    title: "About",
    url: "/about",
  },
  {
    title: "Resume",
    url: "/resume",
  },
  {
    title: "Portfolios",
    url: "/portfolios",
  },
  {
    title: "Blogs",
    url: "/blogs",
  },
  {
    title: "Contact",
    url: "/contact",
  },
];

export default function Sidebar() {
  const router = useRouter();

  return (
    <>
      <nav className="fixed top-0 left-0 h-screen transition-all duration-[400] z-10 border-[#2e344e] border-r-[1px] bg-[#191d2b] w-0 lg:w-[260px] xl:w-[300px]">
        <button className="absolute top-[20px] left-[100%] h-[50px] w-[50px] flex lg:hidden items-center justify-center bg-[#191d2b] text-center text-[1.6rem] p-0 border-[#2e344e] text-[#a4acc4]">
          <SlMenu />
        </button>
        <div className="flex flex-col h-full w-full justify-between items-center overflow-hidden overflow-y-auto ">
          <div className="flex justify-center border-b-[1px] border-[#2e344e] py-[20px] text-center w-full">
            <Link href="/">
              <div className="border-[7px] border-[#2e344e] rounded-full h-[200px] w-[200px] overflow-hidden align-middle">
                <Image
                  src={image1}
                  alt="Alternative Text"
                  width={1000}
                  height={1000}
                  quality={100}
                  className="w-full h-full object-cover"
                />
              </div>
            </Link>
          </div>
          <ul className="mb-0 py-[15px] px-[5px] w-full">
            {menu.map((menu, index) => (
              <li key={index} className="text-center">
                <Link href={menu.url}>
                  <div
                    className={`relative text-[.94rem] text-[#a4acc4] font-semibold tracking-[1px] overflow-hidden py-[5px] uppercase transition-all duration-500 ease-out z-[1] group 
                  ${
                    router.pathname === menu.url
                      ? "text-white bg-[#037fff]"
                      : "hover:text-[#037fff] group"
                  }`}
                  >
                    {menu.title}
                    <span
                      className={`absolute bg-blue-400 bg-opacity-20 top-0 left-0 right-[100%] h-full w-0 invisible transition-all duration-500 ease-out -z-[1] ${
                        router.pathname === menu.url
                          ? ""
                          : "group-hover:visible group-hover:w-full"
                      }`}
                    ></span>
                  </div>
                </Link>
              </li>
            ))}
          </ul>
          <p className="border-t-[#2e344e] text-[1rem] mb-0 py-[15px] text-center w-full">
            <span>©</span>
            <span>2023</span>
            &nbsp;
            <b>Francis Nico</b>
          </p>
        </div>
      </nav>
    </>
  );
}
