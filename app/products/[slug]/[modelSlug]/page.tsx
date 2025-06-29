// app/products/[slug]/[modelSlug]/page.tsx

import { supabase } from '@/lib/supabase';
import ProductList from '@/app/components/products/ProductList';
import ModelError from '@/app/components/error/ModelError';
import { Metadata } from 'next';

type Props = {
  params: {
    slug: string;
    modelSlug: string;
  };
};

export async function generateMetadata({
  params,
}: {
  params: { slug: string; modelSlug: string };
}): Promise<Metadata> {
  const brand = decodeURIComponent(params.slug).toUpperCase();
  const model = decodeURIComponent(params.modelSlug).toUpperCase();

  return {
    title: `DYNOFLOW | ${brand} ${model}`,
    description: `High-quality carbon fiber accessories and exhaust systems for your ${brand} ${model}. Customize your car with premium DYNOFLOW upgrades.`,
  };
}

const ProductPage = async ({ params }: Props) => {
  const { slug, modelSlug } = params;

  // 1. Lekérjük a modellt
  const { data: model, error: modelError } = await supabase
    .from('models')
    .select('id, name')
    .eq('slug', modelSlug)
    .single();

  if (!model || modelError) return <ModelError />;

  // 2. Lekérjük a termékeket a modellhez
  const { data: products, error: productError } = await supabase
    .from('products')
    .select('id, name, slug, price, category')
    .eq('model_id', model.id);

  if (!products || productError) return <ModelError />;

  return (
    <div className="p-6">
      <ProductList products={products} />
    </div>
  );
};

export default ProductPage;
