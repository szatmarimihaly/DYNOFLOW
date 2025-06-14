
import Image from "next/image";

type Model = {
    id: number;
    name: string;
    slug: string;
  };
  
  export default function ModelCard({ model }: { model: Model }) {
    return (
      <div className="border p-4 rounded shadow">
        <Image
            src={`/models/${model.slug}.webp`}
            alt={model.name}
            width={300}
            height={200}
        
        />
        <h2 className="text-lg font-semibold">{model.name}</h2>
      </div>
    );
  }
  