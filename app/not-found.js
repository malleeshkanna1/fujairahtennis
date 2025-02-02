import React from "react";
import PageStyles from './page.module.css';
import Link from "next/link";

const PageNotFound = () => {
  return (
    <div className={PageStyles["master-container"]}>
      <div className={PageStyles["container"]}>
        <h1>404</h1>
        <h3>OOPS...</h3>
        <p>We're sorry, but something went wrong.</p><br/>
        <Link href="/" className={PageStyles["home-btn"]}>
          HOMEPAGE
        </Link>
      </div>
    </div>
  );
};

export default PageNotFound;
