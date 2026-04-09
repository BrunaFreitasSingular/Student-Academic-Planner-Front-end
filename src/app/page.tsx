import { Button } from "@/src/components/Button";
import { LinkComponet } from "../components/Link";
import { ProfileCard } from "../components/profileCard";

export default function HomePage() {
  return (
    <div className="space-y-4">
      <div className="p-6 space-y-4">

      <ProfileCard
        name="Bruna Freitas"
        course="Engenharia da Computação"
        semester="4º"
        image="/images/profile.jpg"
      />
    </div>
    <div className="flex justify-center gap-5 ">
      <LinkComponet href="/subjects">Ver disciplinas</LinkComponet>
      <LinkComponet href="/dashboard">Abrir Dashboard</LinkComponet>
    </div>
    </div>
    
  );
}
