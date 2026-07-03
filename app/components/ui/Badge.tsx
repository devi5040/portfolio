import Link from 'next/link';
import { Url } from 'url';

type BadgeInputType = {
  title: string;
  destination?: Url | string;
};

export const Badge = ({ title, destination }: BadgeInputType) => {
  return (
    <button className="px-4 py-2.5 bg-card hover:bg-card-hover text-[#e9e9e9] font-geist">
      {destination ? <Link href={destination}>{title}</Link> : <p>{title}</p>}
    </button>
  );
};
