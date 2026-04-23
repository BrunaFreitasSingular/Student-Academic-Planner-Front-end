import Image from "next/image";

type ProfileCardProps = {
  name: string;
  course: string;
  semester: string;
  image: string;
};

export function ProfileCard({
  name,
  course,
  semester,
  image,
}: ProfileCardProps) {
  return (
    <div className="bg-white border border-gray-200 rounded-xl px-5 py-4 flex items-center justify-between">
      <div className="flex items-center gap-4">
        <Image
          src={image}
          alt="Foto de perfil"
          width={44}
          height={44}
          className="rounded-full object-cover border border-gray-200 flex-shrink-0"
        />
        <div>
          <p className="text-sm font-medium text-gray-900">{name}</p>
          <span className="text-xs text-gray-400">
            {course}&nbsp;·&nbsp;{semester} semestre
          </span>
        </div>
      </div>

      <button className="text-xs px-3 py-1.5 rounded-lg border border-gray-200 text-gray-400 hover:bg-gray-50 transition">
        Editar
      </button>
    </div>
  );
}
