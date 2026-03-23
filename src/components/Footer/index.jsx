import React from "react";

const Footer = () => {
  return (
    <div>
      <hr className="text-gray-200" />
      <footer className="footer sm:footer-horizontal footer-center text-base-content p-4">
        <aside>
          <p className="text-gray-400">Copyright © {new Date().getFullYear()} - Tjoet Muty Ahmad</p>
        </aside>
      </footer>
    </div>
  );
};

export default Footer;
