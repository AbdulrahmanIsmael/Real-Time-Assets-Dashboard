import Image, { StaticImageData } from "next/image";

const Icon = ({
  srcLight,
  srcDark,
  title,
  isDark,
  size,
}: {
  srcLight: StaticImageData;
  srcDark?: StaticImageData;
  title: string;
  isDark?: boolean;
  size?: number;
}) => {
  return (
    <>
      {isDark ? (
        <Image src={srcDark! || srcLight} alt={title} width={size || 40} />
      ) : (
        <Image src={srcLight} alt={title} width={size || 40} />
      )}
    </>
  );
};

export default Icon;
