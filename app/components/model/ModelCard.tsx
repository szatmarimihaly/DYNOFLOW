import Image from "next/image";
import ModellButton from "../button/ModellButton";

type Model = {
  id: number;
  name: string;
  slug: string;
};

type Props = {
  model: Model;
  brandSlug: string;
};

export default function ModelCard({ model, brandSlug }: Props) {
  return (
    <div className="bg-white rounded-xl shadow-xl flex flex-col items-center gap-4">
      <h2 className="text-4xl font-semibold mt-10">{model.name}</h2>
      <div className="relative w-[300px] h-[200px] rounded-xl overflow-hidden">
        
        <Image
          src={`/models/${model.slug}.webp`}
          alt={model.name}
          fill
          style={{ objectFit: 'cover' }}
          sizes="(max-width: 768px) 100vw, 300px"
          priority
        />
      </div>
      <ModellButton brandSlug={brandSlug} modelSlug={model.slug} />
    </div>
  );
}
