import { SubjectCardProps } from "../types/subject";

export function SubjectCardCompact({
  name,
  credits,
  year,
  semester,
  concept,
  onEdit,
}: SubjectCardProps) {
  return (
    <div className="py-3">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2 min-w-0">
          {concept && (
            <span className="w-5 h-5 rounded text-xs font-medium bg-gray-100 text-gray-500 flex items-center justify-center shrink-0">
              {concept}
            </span>
          )}
          <p className="text-sm font-medium text-gray-900 truncate">{name}</p>
        </div>
        <button
          onClick={onEdit}
          className="text-xs px-2.5 py-1 rounded-lg border border-gray-200 text-gray-400 hover:bg-gray-50 transition ml-2 shrink-0"
        >
          Editar
        </button>
      </div>

      <div className="mt-1 flex items-center gap-2 pl-7">
        <p className="text-xs text-gray-400">
          {credits} créditos &nbsp;·&nbsp; {year}/{semester}
        </p>
        <span className="text-xs px-2 py-0.5 rounded-full bg-green-50 text-green-600">
          Concluída
        </span>
      </div>
    </div>
  );
}
