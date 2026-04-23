"use client";

import { SubjectType, SubjectCardProps } from "../types/subject";
import Link from "next/link";

export type SubjectProps = {
  id: number;
  name: string;
  credits: number;
  year: number;
  semester: string;
  status: string;
  type: SubjectType;
  concept?: string;
  average?: number;
  onEdit?: () => void;
};

export function SubjectCardDetailed({
  id,
  name,
  credits,
  status,
  average,
  onEdit,
}: SubjectCardProps) {
  return (
    <div className="flex items-center justify-between py-3">
      <div className="flex-1 min-w-0">
        <Link href={`/dashboard/${id}`}>
          <p className="text-sm font-medium text-gray-900 hover:text-blue-600 transition truncate">
            {name}
          </p>
        </Link>
        <p className="text-xs text-gray-400 mt-0.5">
          {credits} créditos &nbsp;·&nbsp; Nota: {average ?? "-"}
        </p>
      </div>

      <div className="flex items-center gap-2 shrink-0 ml-3">
        <span className="text-xs px-2 py-1 rounded-full bg-blue-50 text-blue-600">
          {status}
        </span>
        <button
          onClick={onEdit}
          className="text-xs px-2.5 py-1 rounded-lg border border-gray-200 text-gray-400 hover:bg-gray-50 transition"
        >
          Editar
        </button>
      </div>
    </div>
  );
}
