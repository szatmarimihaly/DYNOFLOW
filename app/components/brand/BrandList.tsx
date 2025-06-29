
import { supabase } from '@/lib/supabase'
import BrandCard from './BrandCard'
import { Metadata } from 'next';

type Brand = {
    id: number;
    name : string;
    slug: string;
};

export const revalidate = 43200;

const BrandList = async() => {
  const { data: brands, error } = await supabase
    .from('brands')
    .select('id, name, slug')
    .order('id', { ascending: true });

    if(error) return <p>{error.message}</p>
    if (!brands) return <p>Nincsenek márkák.</p>;

    return (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 p-6">
            {brands.map((brand) => (
            <BrandCard key={brand.id} brand={brand} />
            ))}
      </div>
  )
}

export default BrandList