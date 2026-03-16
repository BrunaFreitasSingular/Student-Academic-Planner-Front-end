import { Button } from "@/src/components/Button";
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
      <Button href="/pages/disciplines">Ver disciplinas</Button>
      <Button href="/pages/dashboard">Abrir Dashboard</Button>
    </div>
    </div>
    
  );
}
