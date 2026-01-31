import Icon from "@/components/shared/Icon";
import loadingImg from "@/public/assets/images/loading.gif";

const Loading = () => {
  return (
    <div className="w-full text-center flex items-center justify-center py-10 px-5">
      <Icon srcLight={loadingImg} title="loading" size={200} />
    </div>
  );
};

export default Loading;
