import { useTranslation } from "react-i18next";
import CogniCanvasLogo from "#/assets/branding/openhands-logo.svg?react";
import { NavigationLink } from "#/components/shared/navigation-link";
import { I18nKey } from "#/i18n/declaration";
import { cn } from "#/utils/utils";

const DEFAULT_LOGO_WIDTH = 46;
const DEFAULT_LOGO_HEIGHT = 30;

export type OpenHandsLogoButtonProps = {
  className?: string;
  /** Applied to the root `<svg>` */
  logoClassName?: string;
  logoWidth?: number;
  logoHeight?: number;
  showWordmark?: boolean;
};

export function OpenHandsLogoButton({
  className,
  logoClassName,
  logoWidth = DEFAULT_LOGO_WIDTH,
  logoHeight = DEFAULT_LOGO_HEIGHT,
  showWordmark = false,
}: OpenHandsLogoButtonProps = {}) {
  const { t } = useTranslation("openhands");

  const ariaLabel = t(I18nKey.BRANDING$OPENHANDS_LOGO);

  return (
    <NavigationLink
      to="/conversations"
      aria-label={ariaLabel}
      className={cn("flex items-center gap-2.5 group transition-all duration-200", className)}
    >
      <div className="relative flex items-center justify-center p-1 rounded-lg bg-gradient-to-br from-cyan-500/10 via-indigo-500/10 to-transparent border border-cyan-500/20 group-hover:border-cyan-400/50 shadow-[0_0_12px_rgba(6,182,212,0.15)] transition-all">
        <CogniCanvasLogo
          width={logoWidth}
          height={logoHeight}
          className={cn(
            "shrink-0 transition-transform duration-200 group-hover:scale-105",
            logoClassName,
          )}
        />
      </div>
      {showWordmark && (
        <div className="flex flex-col select-none">
          <div className="flex items-center gap-1.5">
            <span className="text-sm font-bold tracking-tight bg-gradient-to-r from-white via-slate-100 to-cyan-300 bg-clip-text text-transparent">
              CogniCanvas
            </span>
            <span className="px-1.5 py-0.5 text-[9px] font-semibold text-cyan-400 bg-cyan-950/60 border border-cyan-800/40 rounded-full">
              v1.34
            </span>
          </div>
          <span className="text-[9px] font-medium text-cyan-400/60 tracking-wider uppercase">
            Agent Cockpit
          </span>
        </div>
      )}
    </NavigationLink>
  );
}
