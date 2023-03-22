import React from 'react';
import { Brush, Mobile, Logo, Monitor, Driver, Graduation, Business } from '../../assets/svg';

interface Props {
  name: string;
  // name: 'mobile' | 'logo' | 'brush'
};

export const Icon: React.FC<Props> = ({ name }: Props) => {
  switch (name) {
    case 'mobile': return <Mobile />;
    case 'logo': return <Logo />;
    case 'brush': return <Brush />;
    case 'monitor': return <Monitor />;
    case 'driver': return <Driver />;
    case 'graduation': return <Graduation />;
    case 'business': return <Business />;

    default: return <Logo />
  }
}
