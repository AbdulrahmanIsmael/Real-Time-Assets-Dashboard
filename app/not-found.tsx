import Image from "next/image";
import notFoundImg from "@/public/assets/images/not-found.png";
const NotFound = () => {
  return (
    <section className="text-center font-bold text-2xl sm:text-3xl lg:text-6xl mt-40 flex flex-col items-center gap-y-10">
      <Image
        src={notFoundImg}
        alt="Page Not Found Image"
        width={250}
        height={250}
      />
      404 Page Is Not Found!
    </section>
  );
};

export default NotFound;
