
import Image from "next/image";
import BrandButton from "../button/BrandButton";

type Brand = {
    id: number;
    name: string;
    slug: string;
  };
  
export default function BrandCard({ brand }: { brand: Brand }) {
    return (
      <main>
        <div className="flex flex-col items-center p-4 bg-white shadow-xl rounded-lg">
            <Image
                src={`/brand/${brand.slug}.svg`}
                alt={brand.name}
                width={200}
                height={200}
                className="mb-10"
                priority
            />
            <h2 className="text-xl font-semibold mb-6">{brand.name}</h2>
            <BrandButton slug={brand.slug}/>
        </div>
      </main>
    );
}