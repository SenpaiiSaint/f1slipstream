import { Dashboard } from "./Directive/Dashboard/Dashboard";
import { Sidebar } from "./Directive/Sidebar/Sidebar";

export default function Home() {
  return (
    <main className="grid gap-4 p-4 grid-cols-[220px_1fr]">
      {/* Main components go below */}
      <Sidebar />
      <Dashboard />
    </main>
  );
}
