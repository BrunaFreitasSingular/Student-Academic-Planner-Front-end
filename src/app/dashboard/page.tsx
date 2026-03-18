//"use client"
import { MainContent } from "@/src/components/MainContent";
import { AsideContext } from "@/src/components/AsideContent";
import { ProfileCard } from "@/src/components/profileCard"

export default function Dashboard() {
    return (
    <div className="p-6 space-y-4">
        <ProfileCard
            name="Bruna Freitas"
            course="Engenharia da Computação"
            semester="4º"
            image="/images/profile.jpg"
        />
        <main>
            <div className="flex justify-evenly gap-2 p-8">
                <MainContent/>
                <AsideContext/>
            </div>
        </main>
    </div>
    );
}
