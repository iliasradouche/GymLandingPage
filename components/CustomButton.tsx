const CustomButton = ({
  text,
  containerStyles,
}: {
  text: string;
  containerStyles: string;
  onMouseEnter?: () => void;
  onMouseLeave?: () => void;
}) => {
  return (
    <button
      className={`${containerStyles} group relative cursor-pointer overflow-hidden bg-accent uppercase rounded-full`}
    >
      <span className="ease absolute top-1/2 h-0 w-64 origin-center -translate-x-20 rotate-50 bg-black transition-height duration-500 group-hover:h-64 group-hover:-translate-y-32"></span>
      <span className="ease relative text-black transition duration-300 group-hover:text-white">
        {text}
      </span>
    </button>
  );
};

export default CustomButton;
