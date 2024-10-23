import { getRandomInt } from "@/lib/utils";
import Image from "next/image";
 
export type UserCardProps = {
  type:  "Eleve"  |   "Professeur"  | "Parent"  |"Personnel" ,
  valeur?: number,
  min?: number,
  max?: number
}

const UserCard = ({ type, valeur, min = 50, max = 100 }: UserCardProps): JSX.Element => {
  return (
    <div className="rounded-2xl odd:bg-lamaPurple even:bg-lamaYellow p-4 flex-1 min-w-[130px]">
      <div className="flex justify-between items-center">
        <span className="text-[10px] bg-white px-2 py-1 rounded-full text-green-600">
          2024/25
        </span>
        <Image src="/more.png" alt={type} width={20} height={20} />
      </div>
      <h1 className="text-2xl font-semibold my-4">{valeur ? valeur : getRandomInt(min, max)}</h1>
      <h2 className="capitalize text-sm font-medium text-gray-500">{type}s</h2>
    </div>
  );
};

export default UserCard;
