import React from "react";

export default function footer() {
  const links: string[] = ["About", "Services", "Projects"];
  const icons: string[] = ["facebook-square", "twitter", "pinterest", "instagram"];

  return (
    <footer className="py-10 bg-[#afe4da]">
      <div className="row justify-content-center">
        <div className="py-3 text-center">
          <h2 className="text-3xl text-[#25564b]">sunnyside</h2>
        </div>
        <div id="footer-links" className="flex flex-row justify-center my-2 py-3">
          <div className="text-[#458c7e]">
            {links.map((link: string) => (
              <a className="mx-2" href="#">
                {link}
              </a>
            ))}
          </div>
        </div>
        <div id="footer-icons" className="flex flex-row justify-center py-3">
          {icons.map((iconName: string) => {
            return (
              <a className="nav-link text-[#458c7e] mx-3" href="#">
                <i className={`fab fa-${iconName} fa-lg`} />
              </a>
            );
          })}
        </div>
      </div>
    </footer>
  );
}
