import Icon from "@/components/shared/Icon";
import walletImg from "@/public/assets/icons/wallet.png";

const Logo = () => {
  return (
    <h1 className="text-4xl font-bold text-text-primary flex items-center justify-center gap-x-5 text-center">
      <Icon srcLight={walletImg} title="Wallet Icon" size={25} />
      <span className="text-lg lg:text-xl xl:text-2xl font-semibold">
        Investment Management
      </span>
    </h1>
  );
};

export default Logo;
