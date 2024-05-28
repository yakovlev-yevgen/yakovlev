import IconInstagram from '@/public/icons/instagram.svg';
import IconTelegram from '@/public/icons/telegram.svg';
import IconPhone from '@/public/icons/phone.svg';
import IconPLus from '@/public/icons/plus.svg';
import IconMinus from '@/public/icons/minus.svg';
import IconFavicon from '@/public/icons/favicon.svg';
import IconLogo from '@/public/icons/logo.svg';
import IconBurger from '@/public/icons/burger.svg';
import IconClose from '@/public/icons/close.svg';
import IconTrust from '@/public/icons/trust.svg';
import IconRespect from '@/public/icons/respect.svg';
import IconPrivacy from '@/public/icons/privacy.svg';

export const ICONS = {
  INSTAGRAM: IconInstagram,
  TELEGRAM: IconTelegram,
  PHONE: IconPhone,
  PLUS: IconPLus,
  MINUS: IconMinus,
  FAVICON: IconFavicon,
  LOGO: IconLogo,
  BURGER: IconBurger,
  CLOSE: IconClose,
  TRUST: IconTrust,
  RESPECT: IconRespect,
  PRIVACY: IconPrivacy,
};

export type IconName = keyof typeof ICONS;
