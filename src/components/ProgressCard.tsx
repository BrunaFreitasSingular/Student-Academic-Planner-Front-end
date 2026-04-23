import { useListProgress } from "../hooks/progress/useListProgress";

export function ProgressCard({ user_id }: { user_id: string }) {
  const { data, loading, error } = useListProgress(user_id);

  if (!user_id) return null;
  if (loading)
    return (
      <div className="text-sm text-gray-400 p-4">Carregando progresso...</div>
    );
  if (error)
    return (
      <div className="text-sm text-red-400 p-4">Erro ao carregar progresso</div>
    );
  if (!data) return null;

  return (
    <div className="bg-white border border-gray-200 rounded-xl p-5 space-y-4">
      <span className="text-sm font-medium text-gray-900">
        Progresso do curso
      </span>

      <div>
        <div className="flex justify-between text-xs text-gray-400 mb-1.5">
          <span>Curso concluído</span>
          <span>{data.finishedPercentage}%</span>
        </div>
        <div className="h-1.5 bg-gray-100 rounded-full overflow-hidden">
          <div
            className="h-full bg-gray-500 rounded-full transition-all"
            style={{ width: `${data.finishedPercentage}%` }}
          />
        </div>
      </div>

      <div className="grid grid-cols-3 gap-2">
        <div className="bg-gray-50 rounded-lg p-3">
          <p className="text-xs text-gray-400 mb-1">Créditos</p>
          <p className="text-sm font-medium text-gray-900">
            {data.completedRequiredCredits}
            <span className="text-xs text-gray-400 font-normal">
              {" "}
              / {data.totalRequiredCredits}
            </span>
          </p>
        </div>
        <div className="bg-gray-50 rounded-lg p-3">
          <p className="text-xs text-gray-400 mb-1">Disciplinas</p>
          <p className="text-sm font-medium text-gray-900">
            {data.totalSubjects}
          </p>
        </div>
        <div className="bg-gray-50 rounded-lg p-3">
          <p className="text-xs text-gray-400 mb-1">Obrigatórias</p>
          <p className="text-sm font-medium text-gray-900">
            {data.requiredPercentage}%
          </p>
        </div>
      </div>

      <div className="space-y-2 pt-1 border-t border-gray-100">
        {[
          { label: "Eletivas", value: data.electivePercentage },
          { label: "Complementares", value: data.complementary },
        ].map(({ label, value }) => (
          <div key={label}>
            <div className="flex justify-between text-xs text-gray-400 mb-1">
              <span>{label}</span>
              <span>{value}%</span>
            </div>
            <div className="h-1 bg-gray-100 rounded-full overflow-hidden">
              <div
                className="h-full bg-gray-300 rounded-full"
                style={{ width: `${value}%` }}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
