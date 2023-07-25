import React from 'react';
import * as Assets from '../../assets/svg';

interface Props {
  name: string;
  onPress?: () => void;
  styles?: React.CSSProperties;
  // name: 'mobile' | 'logo' | 'brush'
};

export const Icon: React.FC<Props> = ({ name, styles, onPress }: Props) => {
  switch (name) {
    case 'logo': return <Assets.Logo style={styles} onClick={onPress} />;
    case 'brush': return <Assets.Brush style={styles} onClick={onPress} />;
    case 'driver': return <Assets.Driver style={styles} onClick={onPress} />;
    case 'github': return <Assets.Github style={styles} onClick={onPress} />;
    case 'mobile': return <Assets.Mobile style={styles} onClick={onPress} />;
    case 'monitor': return <Assets.Monitor style={styles} onClick={onPress} />;
    case 'discord': return <Assets.Discord style={styles} onClick={onPress} />;
    case 'whatsapp': return <Assets.WhatsApp style={styles} onClick={onPress} />;
    case 'business': return <Assets.Business style={styles} onClick={onPress} />;
    case 'linkedin': return <Assets.Linkedin style={styles} onClick={onPress} />;
    case 'instagram': return <Assets.Instagram style={styles} onClick={onPress} />;
    case 'graduation': return <Assets.Graduation style={styles} onClick={onPress} />;
    case 'shop-react-ignite': return <Assets.IgniteShopLogo style={styles} onClick={onPress} />;
    case 'portfolio': return <Assets.PortfolioLogo style={styles} onClick={onPress} />;
    case 'terra': return <Assets.Terra style={styles} onClick={onPress} />;
    case 'health': return <Assets.Health style={styles} onClick={onPress} />;
    case 'rentx': return <Assets.Rentx style={styles} onClick={onPress} />;
    case 'redux': return <Assets.Redux style={styles} onClick={onPress} />;
    case 'next': return <Assets.Next style={styles} onClick={onPress} />;
    case 'vite': return <Assets.Vite style={styles} onClick={onPress} />;
    case 'photoshop': return <Assets.PhotoShop style={styles} onClick={onPress} />;
    case 'aws': return <Assets.AWS style={styles} onClick={onPress} />;
    case 'jest': return <Assets.Jest style={styles} onClick={onPress} />;
    case 'ts': return <Assets.Typescript style={styles} onClick={onPress} />;
    case 'expo': return <Assets.Expo style={styles} onClick={onPress} />;
    case 'todo': return <Assets.Todo style={styles} onClick={onPress} />;

    default: return <Assets.Logo />
  }
}
