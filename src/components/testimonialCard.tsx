import React from "react";
import { Star } from "lucide-react";
import Image from "next/image";

type Props = {
  testimonial: string;
  client: string;
  proffesion: string;
  imgURL: string;
};

export default function TestimonialCard({
  testimonial,
  client,
  proffesion,
  imgURL
}: Props) {
  return (
    <div className="flex flex-col justify-between min-h-[175px] px-6 py-4 bg-white shadow-md rounded-sm gap-5 border border-gray-200 z-50">
      <div className="space-y-3">
        <div className="flex items-center gap-0.5">
          <Star className="h-4 w-4 fill-yellow-400 text-yellow-500" />
          <Star className="h-4 w-4 fill-yellow-400 text-yellow-500" />
          <Star className="h-4 w-4 fill-yellow-400 text-yellow-500" />
          <Star className="h-4 w-4 fill-yellow-400 text-yellow-500" />
          <Star className="h-4 w-4 fill-yellow-400 text-yellow-500" />
        </div>
        <p className="text-[16px] leading-6 text-[#18181B]">{testimonial}</p>
      </div>
      <div className="flex items-center gap-4">
        <Image src={imgURL} alt="" height={43} width={43} />
        <div className="flex flex-col gap-1.5">
          <h4 className="text-[16px] leading-6 text-[#18181B]">{client}</h4>
          <p className="text-[#52525B] text-sm">{proffesion}</p>
        </div>
      </div>
    </div>
  );
}
