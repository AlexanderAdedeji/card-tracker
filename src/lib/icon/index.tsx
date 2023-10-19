import Logo from '@/assets/svg/lassraLogo.svg?react';

export type iconTypes = 'logo';

interface IconInterface {
  name: iconTypes;
  svgProp?: React.SVGProps<SVGSVGElement>;
}

const Icon = ({ name, svgProp }: IconInterface) => {
  const icons: Record<iconTypes, JSX.Element> = {
    logo: <Logo {...svgProp} />,
  };

  return icons[name];
};

export default Icon;
