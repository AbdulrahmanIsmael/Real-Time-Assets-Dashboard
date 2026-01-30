import Icon from "@/components/shared/Icon";
import { StaticImageData } from "next/image";

const Card = ({
  img,
  title,
  value,
  result,
  color,
  size,
}: {
  img: StaticImageData;
  title: string;
  value?: string;
  result?: string;
  color?: string;
  size?: number | string;
}) => {
  return (
    <div className="flex flex-col items-center gap-y-4">
      <h3 className="text-2xl font-bold flex items-center gap-x-5">
        <Icon
          srcLight={img}
          title="Profit Icon"
          key="profit"
          size={size ? +size : 35}
        />
        {title}
      </h3>
      <div className="bg-navbar-bg border border-borders min-h-30 min-w-56 px-5 py-3 rounded-xl flex flex-col justify-center gap-y-5 items-center text-center">
        <span
          className={`${color} ${result ? "text-2xl" : "text-5xl"} font-bold`}
        >
          {value}
        </span>
        <div className="text-2xl font-semibold">{result}</div>
      </div>
    </div>
  );
};

export default Card;
