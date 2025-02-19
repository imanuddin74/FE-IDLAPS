import Link from "next/link";
import InputInterval from "../InputInterval";
import SelectTheme from "../SelectTheme";
type NavbarProps = {
  title: string;
};
export default function Navbar(navbarProps: NavbarProps) {
  const { title } = navbarProps;
  return (
    <div className="navbar bg-base-300">
      <div className="container mx-auto">
        <div className="flex-1 px-2 lg:flex-none">
          <Link className="text-xl font-bold" href={"/"}>
            IDLaps
            <svg
              className="h-5 w-5 fill-current rotate-45 inline-block"
              width={24}
              height={24}
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 448 512"
            >
              <path d="M32 0C49.7 0 64 14.3 64 32V48l69-17.2c38.1-9.5 78.3-5.1 113.5 12.5c46.3 23.2 100.8 23.2 147.1 0l9.6-4.8C423.8 28.1 448 43.1 448 66.1V345.8c0 13.3-8.3 25.3-20.8 30l-34.7 13c-46.2 17.3-97.6 14.6-141.7-7.4c-37.9-19-81.3-23.7-122.5-13.4L64 384v96c0 17.7-14.3 32-32 32s-32-14.3-32-32V400 334 64 32C0 14.3 14.3 0 32 0zM64 187.1l64-13.9v65.5L64 252.6V318l48.8-12.2c5.1-1.3 10.1-2.4 15.2-3.3V238.7l38.9-8.4c8.3-1.8 16.7-2.5 25.1-2.1l0-64c13.6 .4 27.2 2.6 40.4 6.4l23.6 6.9v66.7l-41.7-12.3c-7.3-2.1-14.8-3.4-22.3-3.8v71.4c21.8 1.9 43.3 6.7 64 14.4V244.2l22.7 6.7c13.5 4 27.3 6.4 41.3 7.4V194c-7.8-.8-15.6-2.3-23.2-4.5l-40.8-12v-62c-13-3.8-25.8-8.8-38.2-15c-8.2-4.1-16.9-7-25.8-8.8v72.4c-13-.4-26 .8-38.7 3.6L128 173.2V98L64 114v73.1zM320 335.7c16.8 1.5 33.9-.7 50-6.8l14-5.2V251.9l-7.9 1.8c-18.4 4.3-37.3 5.7-56.1 4.5v77.4zm64-149.4V115.4c-20.9 6.1-42.4 9.1-64 9.1V194c13.9 1.4 28 .5 41.7-2.6l22.3-5.2z" />
            </svg>
          </Link>
        </div>
        <div className="flex justify-end flex-1 px-2 gap-x-5">
          {title === "race" && <InputInterval />}
          <div className="flex items-stretch">
            <Link
              className={
                title === "race"
                  ? "btn btn-primary rounded-btn btn-sm md:btn-md lg:btn-md"
                  : "btn btn-ghost rounded-btn btn-sm md:btn-md lg:btn-md"
              }
              href={"/race"}
            >
              Race Setting
            </Link>
            <div className="dropdown dropdown-end">
              <label
                tabIndex={0}
                className="btn btn-ghost rounded-btn btn-sm md:btn-md lg:btn-md"
              >
                Master{" "}
                <svg
                  className="fill-current"
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                >
                  <path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z" />
                </svg>
              </label>
              <ul
                tabIndex={0}
                className="menu dropdown-content p-2 shadow bg-base-100 rounded-box w-52 mt-4 "
              >
                <li>
                  <Link
                    className={title === "event" ? "active" : ""}
                    href={"/events"}
                  >
                    Event
                  </Link>
                </li>
                <li>
                  <Link
                    className={title === "category" ? "active" : ""}
                    href={"/categories"}
                  >
                    Category
                  </Link>
                </li>
                <li>
                  <Link
                    className={title === "rider" ? "active" : ""}
                    href={"/riders"}
                  >
                    Rider
                  </Link>
                  <Link
                    className={title === "team" ? "active" : ""}
                    href={"/teams"}
                  >
                    Team
                  </Link>
                </li>
                <li>
                  <SelectTheme />
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* <div className="flex-1"></div>
        <div className="flex-none">
          <ul className="menu menu-horizontal rounded-box p-2 ">
            <li tabIndex={0}>
              <a>
                Master
                
              </a>
              <ul className="p-2 bg-base-100"></ul>
            </li>
          </ul>
        </div> */}
      </div>
    </div>
  );
}
