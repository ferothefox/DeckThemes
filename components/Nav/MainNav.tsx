import { useContext } from "react";
import { authContext, desktopModeContext } from "../../pages/_app";
import { fetchDiscordUrl } from "../../apiHelpers";
import { NavIcon } from "./NavIcon";
import { TbUpload } from "react-icons/tb";
import { RiAdminFill } from "react-icons/ri";
import { Permissions } from "../../types";
import { MiniPfpDisplay } from "../Users";
import { LoadingSpinner } from "../Generic";
import { Discord, Patreon } from "@icons-pack/react-simple-icons";
import { useHasCookie } from "../../hooks";
import { ImBook } from "react-icons/im";
import { NavIconLink } from "./NavIconLink";
import { DesktopNav } from "../Desktop";

export function MainNav() {
  const { accountInfo } = useContext(authContext);
  const { desktopMode } = useContext(desktopModeContext);
  const hasCookie = useHasCookie();

  if (desktopMode) return <DesktopNav />;

  return (
    <nav className="font-fancy flex w-full items-center justify-center">
      <div className="mx-4 flex w-full max-w-7xl items-center py-4">
        <div className="">
          <NavIcon />
        </div>
        <div className="ml-8 flex h-full items-center gap-8 md:ml-auto">
          <>
            {!!process.env.NEXT_PUBLIC_DISCORD_URL && (
              <NavIconLink
                href={process.env.NEXT_PUBLIC_DISCORD_URL}
                className="flex select-none items-center gap-2 py-4 transition duration-150 hover:scale-95 hover:active:scale-90"
              >
                <Discord size={18} />
                <div className="font-fancy hidden text-xs font-bold sm:flex ">
                  Discord
                </div>
              </NavIconLink>
            )}
            {!!process.env.NEXT_PUBLIC_PATREON_URL && (
              <NavIconLink
                href={process.env.NEXT_PUBLIC_PATREON_URL}
                className="flex select-none items-center gap-2 py-4 transition duration-150 hover:scale-95 hover:active:scale-90"
              >
                <Patreon size={14} />
                <div className="font-fancy hidden text-xs font-bold sm:flex">
                  Patreon
                </div>
              </NavIconLink>
            )}
          </>
        </div>
        <div className="ml-auto flex h-full items-center gap-8 font-extrabold md:ml-8">
          <NavIconLink
            href={process.env.NEXT_PUBLIC_DOCS_URL || "/"}
            className="flex select-none items-center gap-2 py-4 transition duration-150 hover:scale-95 hover:active:scale-90"
          >
            <ImBook size={14} />
            <div className="font-fancy hidden text-xs font-bold sm:flex ">
              Documentation
            </div>
          </NavIconLink>
          <>
            {accountInfo?.username ? (
              <>
                {accountInfo.permissions.includes(Permissions.viewSubs) && (
                  <NavIconLink
                    href={"/submissions"}
                    className="flex select-none items-center gap-2 py-4 transition duration-150 hover:scale-95 hover:active:scale-90"
                    isInternal
                  >
                    <RiAdminFill size={14} />
                    <div className="font-fancy hidden text-xs font-bold sm:flex ">
                      Admin <span className="opacity-50">(???)</span>
                    </div>
                  </NavIconLink>
                )}
                <NavIconLink
                  href={"/submit"}
                  className="flex select-none items-center gap-2 rounded-full border border-borders-base3-dark py-2 px-4 transition duration-150  hover:scale-95 hover:bg-base-3-dark hover:active:scale-90"
                  isInternal
                >
                  <TbUpload size={14} className="scale-x-105" />
                  <div className="font-fancy hidden text-xs font-bold sm:block">
                    Upload
                  </div>
                </NavIconLink>
                <MiniPfpDisplay accountInfo={accountInfo} goToMe hideName />
              </>
            ) : (
              <>
                {hasCookie ? (
                  <>
                    <LoadingSpinner size={32} />
                  </>
                ) : (
                  <>
                    <button
                      className="flex h-fit select-none items-center justify-center gap-2 rounded-full border border-borders-base3-dark px-4 py-2 text-xs font-bold text-fore-11-light transition duration-150 hover:scale-95 hover:bg-base-3-dark hover:text-fore-11-dark hover:active:scale-90 dark:text-fore-11-dark"
                      onClick={fetchDiscordUrl}
                    >
                      <div>
                        Login{" "}
                        <span className="hidden sm:inline-block">
                          with Discord
                        </span>
                      </div>
                    </button>
                  </>
                )}
              </>
            )}
          </>
        </div>
      </div>
    </nav>
  );
}
