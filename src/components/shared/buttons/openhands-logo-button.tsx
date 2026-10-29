import { useTranslation } from "react-i18next";
import { NavigationLink } from "#/components/shared/navigation-link";
import { I18nKey } from "#/i18n/declaration";
import { cn } from "#/utils/utils";

export type OpenHandsLogoButtonProps = {
  className?: string;
  logoClassName?: string;
  logoWidth?: number;
  logoHeight?: number;
  showWordmark?: boolean;
};

export function OpenHandsLogoButton({
  className,
  showWordmark = false,
}: OpenHandsLogoButtonProps = {}) {
  const { t } = useTranslation("openhands");

  const ariaLabel = t(I18nKey.BRANDING$OPENHANDS_LOGO);

  return (
    <NavigationLink
      to="/conversations"
      aria-label={ariaLabel}
      className={cn(
        "flex items-center gap-2.5 group transition-all duration-200 select-none",
        className,
      )}
    >
      {showWordmark ? (
        <div className="flex items-center gap-2.5 py-1">
          <div className="flex items-center gap-2">
            <span className="relative flex h-2.5 w-2.5 items-center justify-center">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-cyan-400" />
            </span>
            <span className="text-base font-extrabold tracking-tight bg-gradient-to-r from-white via-slate-100 to-cyan-400 bg-clip-text text-transparent">
              CogniCanvas
            </span>
          </div>
          <span className="px-1.5 py-0.5 text-[9px] font-bold text-cyan-300 bg-cyan-950/70 border border-cyan-700/50 rounded-md tracking-wider uppercase shadow-[0_0_8px_rgba(6,182,212,0.2)]">
            Studio
          </span>
        </div>
      ) : (
        <div className="flex h-7 w-7 items-center justify-center rounded-lg bg-gradient-to-br from-cyan-500/20 to-indigo-500/20 border border-cyan-500/40 text-cyan-300 font-extrabold text-xs shadow-[0_0_10px_rgba(6,182,212,0.25)] group-hover:border-cyan-400 transition-all">
          CC
        </div>
      )}
    </NavigationLink>
  );
}
