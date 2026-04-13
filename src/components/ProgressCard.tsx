import { useListProgress } from "../hooks/progress/useListProgress";


export function ProgressCard({ user_id }: { user_id: number }) {
  const { data, loading, error } = useListProgress(user_id);

  if (loading) return <p>Carregando progresso...</p>;
  if (error) return <p>Erro: {error}</p>;
  if (!data) return <p>Nenhum progresso encontrado</p>;

  return (
    <div
      style={{
        border: "1px solid #ccc",
        padding: 16,
        borderRadius: 8,
        maxWidth: 400,
      }}
    >
      <h2>Progresso do Curso</h2>

      <p>
        Créditos obrigatórios: {data.completedRequiredCredits}/
        {data.totalRequiredCredits}
      </p>

      <p>Curso concluído: {data.finishedPercentage}%</p>

      {/* Barra de progresso */}
      <div style={{ background: "#eee", height: 10, marginBottom: 10 }}>
        <div
          style={{
            width: `${data.finishedPercentage}%`,
            height: 10,
            background: "green",
          }}
        />
      </div>

      <p>Obrigatórias: {data.requiredPercentage}%</p>
      <p>Eletivas: {data.electivePercentage}%</p>
      <p>Complementares: {data.complementary}%</p>

      <p>Total de matérias: {data.totalSubjects}</p>
    </div>
  );
}