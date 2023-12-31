import * as React from 'react';
import { animated } from '@react-spring/web';
import useBoop, { BoopConfigType } from 'hooks/useBoop';

type BoopProps = { children: React.ReactNode } & BoopConfigType;

const Boop: React.FC<BoopProps> = ({ children, ...boopConfig }) => {
  const [style, trigger] = useBoop(boopConfig);

  return (
    <animated.span onMouseEnter={trigger as React.MouseEventHandler<HTMLSpanElement>} style={style}>
      {children}
    </animated.span>
  );
};

export default Boop;
