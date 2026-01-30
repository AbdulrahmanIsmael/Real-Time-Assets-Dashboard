import Card from "@/components/shared/Card";
import assetsImg from "@/public/assets/icons/assets.png";
import bestImg from "@/public/assets/icons/best.png";
import profitImg from "@/public/assets/icons/profit.png";
import valueImg from "@/public/assets/icons/value.png";
const Cards = () => {
  return (
    <section className="py-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 items-end gap-5">
      <Card
        img={valueImg}
        title="Total Portfolio Value"
        value="10000"
        result="Amazon Inc."
        color="text-green-700"
      />
      <Card
        img={profitImg}
        title="Total Profit / Loss"
        value="1.5%"
        result="Facebook Inc."
        color="text-green-700"
        size={45}
      />
      <Card img={assetsImg} title="Number Of Assets" value="6" />
      <Card
        img={bestImg}
        title="Most Performing Asset"
        value="5000"
        result="Noon"
        color="text-green-700"
      />
    </section>
  );
};

export default Cards;
