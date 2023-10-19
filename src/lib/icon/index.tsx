import React from 'react';
import Logo from '@/assets/svg/lassraLogo.svg?react';
import Sun from '@/assets/svg/sun.svg?react';
import Moon from '@/assets/svg/moon.svg?react';
import LandingMask from '@/assets/images/landingMask.svg?react';

export type iconTypes = 'logo' | 'sun' | 'moon' | 'landingMask';

interface IconInterface {
  name: iconTypes;
  svgProp?: React.SVGProps<SVGSVGElement>;
}

const icons: Record<iconTypes, JSX.Element> = {
  logo: <Logo />,
  moon: <Moon />,
  sun: <Sun />,
  landingMask: <LandingMask />,
};

const Icon = ({ name, svgProp }: IconInterface) => {
  return React.cloneElement(icons[name], svgProp);
};

export default Icon;
