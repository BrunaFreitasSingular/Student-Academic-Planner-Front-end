import Image from "next/image";

type ProfileCardProps = {
  name: string;
  course: string;
  semester: string;
  image: string;
};

export function ProfileCard({ name, course, semester, image }: ProfileCardProps) {
  return (
    <div className="bg-gray-300 rounded-md p-4 flex items-center justify-between">
      <div className="flex items-center gap-4">

        <Image
          src={image}
          alt="Foto de perfil"
          width={50}
          height={50}
          className="rounded-full object-cover"
        />

        <div>
          <p>Name: {name}</p>
          <p>Course: {course}</p>
          <p>Semester: {semester}</p>
        </div>

      </div>

      <button>Editar</button>
    </div>
  );
}
