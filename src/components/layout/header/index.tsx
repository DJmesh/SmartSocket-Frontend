import Search from "./search";
import Profile from "./profile";

export default function Header() {
  return (
    <header className="sticky top-0 z-10 flex h-24 items-center border-b-2 bg-background px-3 items-center pr-4 p-6">
      <div className="flex w-full items-center gap-4 md:ml-auto md:gap-2 lg:gap-3 justify-end">
        <Search />
        {/* <Profile /> */}
      </div>
    </header>
  );
}
