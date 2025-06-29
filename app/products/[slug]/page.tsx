import { supabase } from '@/lib/supabase';
import ModelCard from '@/app/components/model/ModelCard';
import ModelError from '@/app/components/error/ModelError';
import { Metadata } from 'next';

type Props = {
  params: {
    slug: string;
  };
};

export const revalidate = 43200;

export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  const brandName = decodeURIComponent(params.slug).toUpperCase(); // Or fetch from Supabase

  return {
    title: `DYNOFLOW | ${brandName} Models`,
    description: `Choose your ${brandName} model and discover available carbon fiber upgrades, exhaust systems, and tuning accessories.`,
  };
}


const BrandModelsPage = async ({ params }: Props) => {
  const { slug } = await Promise.resolve(params);

  const { data: brand, error: brandError } = await supabase
    .from('brands')
    .select('id, name')
    .eq('slug', slug)
    .single();

  if (!brand || brandError) {
    return <ModelError />;
  }

  const { data: models, error: modelError } = await supabase
    .from('models')
    .select('id, name, slug')
    .eq('brand_id', brand.id)
    .order('name');

  if (!models || modelError) {
    return <ModelError />;
  }

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-6 text-center">{brand.name}</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {models.map((model) => (
          <ModelCard key={model.id} model={model} brandSlug={slug} />
        ))}
      </div>
    </div>
  );
};

export default BrandModelsPage;
