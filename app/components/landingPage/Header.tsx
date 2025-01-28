import Image from "next/image";
import Button from "../ui/Button";

export default function Header() {
  return (
    <header className="absolute top-0 left-0 right-0 max-w-7xl mx-auto flex items-center justify-between py-10">
      <div className="flex items-center gap-4">
        <Image src="/logo.svg" alt="logo" width={35} height={35} />
        <h3 className="text-white text-2xl font-bold">ProjectInBio</h3>
      </div>
      <div className="flex items-center gap-4">
        <Button>Minha Página</Button>
        <Button>Sair</Button>
      </div>
    </header>
  );
}
