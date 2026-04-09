"use client"

import { Button } from "./Button";
import { LinkComponet } from "./Link";

export type SubjectProps = {
  id: number;
  name: string;
  credits: number;
  year: number;
  semester: string;
  status: string;
  variant?: "default" | "approved" | "reproved";
  onEdit?: () => void;
};

export function SubjectCard({
  id,
  name,
  credits,
  year,
  semester,
  status,
  variant = "default",
  onEdit
}: SubjectProps) {

  const textVariants = {
    default: "text-sm text-gray-600",
    approved: "text-xs text-gray-600",
    reproved: "text-sm text-red-500"
  };

  const textClassName = textVariants[variant];

  return (
    <div className="flex flex-col">
      <div className="flex justify-between">
        <LinkComponet variant="primary" href={`/dashboard/${id}`}>
          <div className="cursor-pointer">
            <p>{name}</p>
          </div>
        </LinkComponet>

        <Button variant="tertiary" onClick={onEdit}>
          Editar
        </Button>
      </div>

      <div className={textClassName}>
        <p className="flex items-center gap-1">
          {credits} créditos • {year} • {semester} • {status} •

          <span className="relative group inline-block ml-1">
            Nota: -

            <span className="absolute -top-1 -right-2 w-2 h-2 border bg-white rounded-full"></span>

            <span className="absolute bottom-full mb-2 left-1/2 -translate-x-1/2
                             hidden group-hover:block
                             bg-black text-white text-xs rounded px-2 py-1
                             whitespace-nowrap shadow-lg transition">
              Revisar atualizações da nota
            </span>
          </span>
        </p>
      </div>
    </div>
  );
}