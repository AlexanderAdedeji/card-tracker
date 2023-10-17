export type iconTypes = '';

interface IconInterface {
  name: iconTypes;
  svgProp?: React.SVGProps<SVGSVGElement>;
}

//TODO: can I abstract the icons const out of render
const Icon = ({ name, svgProp }: IconInterface) => {
  const icons: Record<iconTypes, JSX.Element> = {
    '': <></>,
  };

  return icons[name];
};
