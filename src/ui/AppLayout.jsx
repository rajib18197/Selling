import CabinsList from "../features/cabins/CabinsList";
import NavBar from "./NavBar";
import SideBar from "./SideBar";

export default function AppLayout() {
  return (
    <div>
      <NavBar />
      <main>
        <div className="container grid lg:grid-cols-[218px_1fr] gap-[3.5rem]">
          <SideBar />
          <CabinsList />
        </div>
      </main>
    </div>
  );
}
