'use client';

import Link from 'next/link';
import { useTranslation } from 'react-i18next';
import ArrowForwardIosOutlinedIcon from '@mui/icons-material/ArrowForwardIosOutlined';

type Props = {
  brandSlug: string;
  modelSlug: string;
};

const ModellButton = ({ brandSlug, modelSlug }: Props) => {
  const { t } = useTranslation();

  return (
    <Link
      href={`/products/${brandSlug}/${modelSlug}`}
      className="p-2 bg-black text-white rounded-xl mb-10 mt-4 flex items-center gap-4"
    >
      {t('to_product')} <ArrowForwardIosOutlinedIcon fontSize='small'/>
    </Link>
  );
};

export default ModellButton;
