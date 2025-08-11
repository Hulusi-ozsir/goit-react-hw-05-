import { Link } from "react-router-dom";
import css from "./NotFoundPage.module.css";

export default function NotFoundPage() {
  return (
    <div className={css.container}>
      <h1>404 - Page Not Found</h1>
      <p>Oops! This page does not exist.</p>
      <Link to="/" className={css.link}>
        Go back home
      </Link>
    </div>
  );
}