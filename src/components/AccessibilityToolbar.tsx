import { useCallback, useEffect, useId, useRef, useState, type ReactNode } from 'react';
import {
  Accessibility,
  BookOpen,
  Contrast,
  Link2,
  Minus,
  PauseCircle,
  Plus,
  RotateCcw,
  Type,
  X,
} from 'lucide-react';

const STORAGE_KEY = 'meir-sara-a11y-v1';

export type A11yPrefs = {
  fontStep: number;
  highContrast: boolean;
  highlightLinks: boolean;
  readableFont: boolean;
  reduceMotion: boolean;
};

const DEFAULTS: A11yPrefs = {
  fontStep: 2,
  highContrast: false,
  highlightLinks: false,
  readableFont: false,
  reduceMotion: false,
};

const FONT_MIN = 0;
const FONT_MAX = 4;

function clampFontStep(n: number): number {
  return Math.min(FONT_MAX, Math.max(FONT_MIN, Math.round(n)));
}

function loadPrefs(): A11yPrefs {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return { ...DEFAULTS };
    const p = JSON.parse(raw) as Partial<A11yPrefs>;
    return {
      ...DEFAULTS,
      ...p,
      fontStep: clampFontStep(Number(p.fontStep ?? DEFAULTS.fontStep)),
      highContrast: Boolean(p.highContrast),
      highlightLinks: Boolean(p.highlightLinks),
      readableFont: Boolean(p.readableFont),
      reduceMotion: Boolean(p.reduceMotion),
    };
  } catch {
    return { ...DEFAULTS };
  }
}

function persistPrefs(p: A11yPrefs) {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(p));
  } catch {
    /* ignore quota / private mode */
  }
}

function applyPrefsToDocument(p: A11yPrefs) {
  const root = document.documentElement;
  root.dataset.a11yFontStep = String(p.fontStep);

  const setBool = (attr: string, on: boolean) => {
    if (on) root.setAttribute(attr, 'true');
    else root.removeAttribute(attr);
  };

  setBool('data-a11y-high-contrast', p.highContrast);
  setBool('data-a11y-highlight-links', p.highlightLinks);
  setBool('data-a11y-readable-font', p.readableFont);
  setBool('data-a11y-reduce-motion', p.reduceMotion);
}

export default function AccessibilityToolbar() {
  const titleId = useId();
  const panelId = useId();
  const closeBtnRef = useRef<HTMLButtonElement>(null);
  const [open, setOpen] = useState(false);
  const [prefs, setPrefs] = useState<A11yPrefs>(() => ({ ...DEFAULTS }));

  useEffect(() => {
    const next = loadPrefs();
    setPrefs(next);
    applyPrefsToDocument(next);
  }, []);

  const commit = useCallback((next: A11yPrefs) => {
    setPrefs(next);
    applyPrefsToDocument(next);
    persistPrefs(next);
  }, []);

  useEffect(() => {
    if (!open) return;
    const t = window.setTimeout(() => closeBtnRef.current?.focus(), 0);
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setOpen(false);
    };
    window.addEventListener('keydown', onKey);
    return () => {
      window.clearTimeout(t);
      window.removeEventListener('keydown', onKey);
    };
  }, [open]);

  const setFontStep = (fontStep: number) => commit({ ...prefs, fontStep: clampFontStep(fontStep) });

  const toggle = (key: keyof Omit<A11yPrefs, 'fontStep'>) => {
    commit({ ...prefs, [key]: !prefs[key] });
  };

  const resetAll = () => {
    commit({ ...DEFAULTS });
  };

  return (
    <div
      className="fixed bottom-[max(1rem,env(safe-area-inset-bottom,0px))] start-[max(1rem,env(safe-area-inset-left,0px))] z-[160] flex flex-col items-start gap-2"
      dir="rtl"
    >
      {open ? (
        <div
          id={panelId}
          role="dialog"
          aria-modal="true"
          aria-labelledby={titleId}
          className="mb-1 w-[min(calc(100vw-2rem),19.5rem)] rounded-2xl border-2 border-stone-800 bg-white p-4 text-stone-900 shadow-2xl"
        >
          <div className="mb-3 flex items-start justify-between gap-2 border-b border-stone-200 pb-3">
            <h2 id={titleId} className="text-base font-bold leading-snug">
              התאמות נגישות
            </h2>
            <button
              ref={closeBtnRef}
              type="button"
              onClick={() => setOpen(false)}
              className="shrink-0 rounded-lg p-1.5 text-stone-600 ring-amber-600 transition-colors hover:bg-stone-100 hover:text-stone-900 focus-visible:outline-none focus-visible:ring-2"
              aria-label="סגור תפריט נגישות"
            >
              <X className="h-5 w-5" aria-hidden />
            </button>
          </div>

          <div className="space-y-4 text-sm">
            <div>
              <div className="mb-2 flex items-center gap-2 font-semibold text-stone-800">
                <Type className="h-4 w-4 shrink-0 text-amber-700" aria-hidden />
                גודל הטקסט
              </div>
              <div className="flex items-center gap-2">
                <button
                  type="button"
                  className="flex h-10 flex-1 items-center justify-center gap-1 rounded-xl border border-stone-300 bg-stone-50 font-medium ring-amber-600 transition-colors hover:bg-stone-100 focus-visible:outline-none focus-visible:ring-2 disabled:opacity-40"
                  onClick={() => setFontStep(prefs.fontStep - 1)}
                  disabled={prefs.fontStep <= FONT_MIN}
                  aria-label="הקטן טקסט"
                >
                  <Minus className="h-4 w-4" aria-hidden />
                  הקטן
                </button>
                <button
                  type="button"
                  className="flex h-10 flex-1 items-center justify-center gap-1 rounded-xl border border-stone-300 bg-stone-50 font-medium ring-amber-600 transition-colors hover:bg-stone-100 focus-visible:outline-none focus-visible:ring-2 disabled:opacity-40"
                  onClick={() => setFontStep(prefs.fontStep + 1)}
                  disabled={prefs.fontStep >= FONT_MAX}
                  aria-label="הגדל טקסט"
                >
                  <Plus className="h-4 w-4" aria-hidden />
                  הגדל
                </button>
              </div>
            </div>

            <ToggleRow
              icon={<Contrast className="h-4 w-4 text-amber-700" aria-hidden />}
              label="ניגודיות גבוהה"
              pressed={prefs.highContrast}
              onClick={() => toggle('highContrast')}
            />
            <ToggleRow
              icon={<Link2 className="h-4 w-4 text-amber-700" aria-hidden />}
              label="הדגשת קישורים"
              pressed={prefs.highlightLinks}
              onClick={() => toggle('highlightLinks')}
            />
            <ToggleRow
              icon={<BookOpen className="h-4 w-4 text-amber-700" aria-hidden />}
              label="גופן קריא יותר"
              pressed={prefs.readableFont}
              onClick={() => toggle('readableFont')}
            />
            <ToggleRow
              icon={<PauseCircle className="h-4 w-4 text-amber-700" aria-hidden />}
              label="הפחתת תנועה"
              pressed={prefs.reduceMotion}
              onClick={() => toggle('reduceMotion')}
            />

            <button
              type="button"
              onClick={resetAll}
              className="flex w-full items-center justify-center gap-2 rounded-xl border border-stone-300 bg-white py-3 font-semibold text-stone-800 ring-amber-600 transition-colors hover:bg-stone-50 focus-visible:outline-none focus-visible:ring-2"
            >
              <RotateCcw className="h-4 w-4" aria-hidden />
              איפוס הגדרות
            </button>
          </div>
        </div>
      ) : null}

      <button
        type="button"
        aria-expanded={open}
        aria-controls={open ? panelId : undefined}
        onClick={() => setOpen((v) => !v)}
        className="flex items-center gap-2 rounded-full border-2 border-stone-900 bg-amber-500 px-4 py-3 text-sm font-bold text-stone-900 shadow-lg ring-amber-600 transition-colors hover:bg-amber-400 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-offset-orange-50"
      >
        <Accessibility className="h-5 w-5 shrink-0" aria-hidden />
        נגישות
      </button>
    </div>
  );
}

function ToggleRow({
  icon,
  label,
  pressed,
  onClick,
}: {
  icon: ReactNode;
  label: string;
  pressed: boolean;
  onClick: () => void;
}) {
  return (
    <button
      type="button"
      role="switch"
      aria-checked={pressed}
      onClick={onClick}
      className={`flex w-full items-center justify-between gap-3 rounded-xl border px-3 py-2.5 text-start font-medium ring-amber-600 transition-colors focus-visible:outline-none focus-visible:ring-2 ${
        pressed
          ? 'border-amber-700 bg-amber-100 text-stone-900'
          : 'border-stone-300 bg-stone-50 text-stone-800 hover:bg-stone-100'
      }`}
    >
      <span className="flex items-center gap-2">
        <span className="shrink-0">{icon}</span>
        {label}
      </span>
      <span
        className={`shrink-0 rounded-full px-2 py-0.5 text-xs font-bold ${
          pressed ? 'bg-amber-600 text-white' : 'bg-stone-200 text-stone-600'
        }`}
        aria-hidden
      >
        {pressed ? 'פעיל' : 'כבוי'}
      </span>
    </button>
  );
}
