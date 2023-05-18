import IconsSVG from '@assets/svg/symbol-defs.svg';

interface Props{
  name: string,
  className: string,
  color: string,
  width: string,
  height: string,
}

export const Icons:React.FC<Props> = ({ name, className, color, width, height }) => {
  return (
    <svg
      className={`${className}`}
      fill={color}
      stroke={color}
      width={width}
      height={height}
    >
      <use xlinkHref={`${IconsSVG}#icon-${name}`} />
    </svg>
  );
};
