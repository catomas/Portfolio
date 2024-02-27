interface TitleProps {
  title: string;
  subTitle: string;
}

export const Title = ({ title, subTitle }: TitleProps) => {
  return (
    <div className="flex flex-col items-center">
      <h3 className="text-gray-400">{title}</h3>
      <h2 className="text-3xl">{subTitle}</h2>
    </div>
  );
};
