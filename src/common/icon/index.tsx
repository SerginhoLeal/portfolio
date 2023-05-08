import React from 'react';
import * as Assets from '../../assets/svg';

interface Props {
  name: string;
  onPress?: () => void;
  // name: 'mobile' | 'logo' | 'brush'
};

export const Icon: React.FC<Props> = ({ name, onPress }: Props) => {
  switch (name) {
    case 'logo': return <Assets.Logo onClick={onPress} />;
    case 'brush': return <Assets.Brush onClick={onPress} />;
    case 'driver': return <Assets.Driver onClick={onPress} />;
    case 'github': return <Assets.Github onClick={onPress} />;
    case 'mobile': return <Assets.Mobile onClick={onPress} />;
    case 'monitor': return <Assets.Monitor onClick={onPress} />;
    case 'discord': return <Assets.Discord onClick={onPress} />;
    case 'whatsapp': return <Assets.WhatsApp onClick={onPress} />;
    case 'business': return <Assets.Business onClick={onPress} />;
    case 'linkedin': return <Assets.Linkedin onClick={onPress} />;
    case 'instagram': return <Assets.Instagram onClick={onPress} />;
    case 'graduation': return <Assets.Graduation onClick={onPress} />;

    default: return <Assets.Logo />
  }
}
