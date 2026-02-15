import { Outlet, useLocation } from "react-router-dom";
import { useEffect, useMemo, useState } from "react";
import SiteHeader from "./SiteHeader";
import SiteNav from "./SiteNav";
import SiteFooter from "./SiteFooter";
import SiteCopyright from "./SiteCopyright";
import HomeIntro from "./HomeIntro";
import MobileNavPanel from "./MobileNavPanel";

const titles = {
  "/": "Michael Amista' - Portfolio",
  "/education": "Education | Michael Amista'",
  "/experience": "Experience | Michael Amista'",
  "/skills": "Skills | Michael Amista'",
  "/projects": "Projects | Michael Amista'"
};

export default function SiteLayout() {
  const location = useLocation();
  const [isPanelOpen, setIsPanelOpen] = useState(false);
  const [isToggleAlt, setIsToggleAlt] = useState(false);

  const isHome = useMemo(() => location.pathname === "/", [location.pathname]);

  useEffect(() => {
    document.title = titles[location.pathname] ?? "Michael Amista' - Portfolio";
  }, [location.pathname]);

  useEffect(() => {
    document.body.classList.add("is-preload");
    const timerId = window.setTimeout(() => {
      document.body.classList.remove("is-preload");
    }, 100);

    return () => {
      window.clearTimeout(timerId);
      document.body.classList.remove("is-preload");
    };
  }, []);

  useEffect(() => {
    setIsPanelOpen(false);
  }, [location.pathname]);

  useEffect(() => {
    if (isPanelOpen) {
      document.body.classList.add("is-navPanel-visible");
    } else {
      document.body.classList.remove("is-navPanel-visible");
    }

    return () => {
      document.body.classList.remove("is-navPanel-visible");
    };
  }, [isPanelOpen]);

  useEffect(() => {
    const onKeyDown = (event) => {
      if (event.key === "Escape") {
        setIsPanelOpen(false);
      }
    };

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, []);

  useEffect(() => {
    const onScroll = () => {
      setIsToggleAlt(window.scrollY > 50);
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <a
        href="#navPanel"
        id="navPanelToggle"
        className={isToggleAlt ? "alt" : ""}
        onClick={(event) => {
          event.preventDefault();
          setIsPanelOpen((open) => !open);
        }}
      >
        Menu
      </a>

      <div
        id="wrapper"
        className="fade-in"
        onClick={() => {
          if (isPanelOpen) setIsPanelOpen(false);
        }}
      >
        <div className="bg" />
        {isHome ? <HomeIntro /> : null}
        <SiteHeader />
        <SiteNav />

        <div id="main">
          <Outlet />
        </div>

        <SiteFooter />
        <SiteCopyright />
      </div>

      <MobileNavPanel isOpen={isPanelOpen} onClose={() => setIsPanelOpen(false)} />
    </>
  );
}
