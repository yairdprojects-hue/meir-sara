import { useEffect } from 'react';

const SCRIPT_ID = 'userway-widget-script';
const SCRIPT_SRC = 'https://cdn.userway.org/widget.js';

declare global {
  interface Window {
    UserWay?: {
      changeWidgetLanguage?: (code: string) => void;
    };
  }
}

/**
 * וידג'ט נגישות צד־שלישי (UserWay).
 * הירשמו ב־https://userway.org , הוסיפו את הדומיין, והדביקו את data-account מסניפט ההטמעה ל־.env:
 * VITE_USERWAY_ACCOUNT=המזהה_שלכם
 */
export default function UserWayWidget() {
  useEffect(() => {
    const account = import.meta.env.VITE_USERWAY_ACCOUNT?.trim();
    if (!account) {
      if (import.meta.env.DEV) {
        console.info(
          '[UserWay] לא הוגדר VITE_USERWAY_ACCOUNT — הווידג\'ט לא ייטען. הוסיפו מזהה מ־https://userway.org',
        );
      }
      return;
    }

    const setHebrew = () => {
      window.UserWay?.changeWidgetLanguage?.('he');
    };

    document.addEventListener('userway:init_completed', setHebrew);

    if (!document.getElementById(SCRIPT_ID)) {
      const script = document.createElement('script');
      script.id = SCRIPT_ID;
      script.src = SCRIPT_SRC;
      script.async = true;
      script.setAttribute('data-account', account);
      document.body.appendChild(script);
    } else if (window.UserWay) {
      setHebrew();
    }

    return () => {
      document.removeEventListener('userway:init_completed', setHebrew);
    };
  }, []);

  return null;
}
