import Link from "next/link";

export default function Home() {
  return (
    <main className="p-24 flex flex-col items-center">
      <ul className="list-disc">
        <li><Link href={"/works"} className="underline">Example that works (client component)</Link></li>
        <li>
          <Link href={"/does-not-work"} className="underline">
            Example that does not work (server component)
          </Link>
        </li>
      </ul>
    </main>
  );
}
