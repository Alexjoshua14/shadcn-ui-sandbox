
import ServerComponent from "@/components/ServerComponent";
import { ResizableHandle, ResizablePanel, ResizablePanelGroup } from "@/components/ui/resizable";
import Link from "next/link";


export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="flex flex-col items-center justify-center gap-8 text-3xl bg-teal-400/40 backdrop-blur-xl p-14 rounded">
        <Link href="/resizable">Resizable Example</Link>
        <Link href="/pagination">Pagination Example</Link>
      </div>
    </main>
  );
}
