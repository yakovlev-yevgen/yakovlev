import IconInstagram from '@/public/icons/instagram.svg';
import IconTelegram from '@/public/icons/telegram.svg';
import IconPhone from '@/public/icons/phone.svg';
import IconPLus from '@/public/icons/plus.svg';
import IconMinus from '@/public/icons/minus.svg';
import IconFavicon from '@/public/icons/favicon.svg';
import IconLogo from '@/public/icons/logo.svg';

export const ICONS = {
  INSTAGRAM: IconInstagram,
  TELEGRAM: IconTelegram,
  PHONE: IconPhone,
  PLUS: IconPLus,
  MINUS: IconMinus,
  FAVICON: IconFavicon,
  LOGO: IconLogo,
};

export type IconName = keyof typeof ICONS;
