import { Button } from "./Button";

type SubjectProps = {
  name: string;
  credits: number;
  year: number;
  semester: string;
  status: string;
  variant?: "default" | "approved" | "reproved";
};

export function SubjectCard({
  name,
  credits,
  year,
  semester,
  status,
  variant = "default"
}: SubjectProps) {

    const textBase = "text-sm text-gray-600";

    const textVariants = {
      default: "text-sm text-gray-600",
      approved: "text-xs text-gray-600", 
      reproved: ""
    };

    const textClassName = `${textBase} ${textVariants[variant]}`;

  return (
    <div className="flex flex-col">
      <div className="flex justify-between">
      <h2 className="font-medium">{name}</h2>
        <Button variant="quaternary">
          Editar
        </Button>
      </div>
      <div className={textClassName}>
        <p>
          {credits} créditos • {year} • {semester} • {status} • Nota: -
        </p>
      </div>
    </div>
  );
}
{/*adicionar a media das notas quando calcular*/}
