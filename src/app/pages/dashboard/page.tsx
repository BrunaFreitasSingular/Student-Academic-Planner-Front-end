//import { Button } from "../../../components/Button"
//import Image from "next/image";
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
    </div>
    );
}