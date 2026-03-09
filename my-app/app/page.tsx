import { Button } from "@/components/Button";

export default function HomePage() {
  return (
    <div className="space-y-4">
      <h1 className="text-3xl font-bold">Home</h1>
      <Button href="/subjects">Ver disciplinas</Button>
    </div>
  );
}