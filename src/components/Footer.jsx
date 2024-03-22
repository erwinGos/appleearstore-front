import React from 'react';
import { Link } from 'react-router-dom';

const navigation = {
}

const Footer = () => {
    return (
      <footer className="backgroundSecondarySection" aria-labelledby="footer-heading">
        <h2 id="footer-heading" className="sr-only">
          Footer
        </h2>
        <div className="sm:p-12 p-4">
          <div className="">
            <p className="mt-8">
              &copy; {new Date().getFullYear()} Appleearstore, Inc. All rights reserved.
            </p>
        </div>
        </div>
      </footer>
    )
}
export default Footer;
