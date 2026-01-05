import * as React from "react";
import { Helmet } from "react-helmet";
import { Link } from "gatsby";

// styles
const pageStyles = {
  color: "#232129",
  padding: "96px",
  fontFamily: "-apple-system, Roboto, sans-serif, serif",
};
const headingStyles = {
  marginTop: 0,
  marginBottom: 64,
  maxWidth: 320,
};

const paragraphStyles = {
  marginBottom: 48,
};
const codeStyles = {
  color: "#8A6534",
  padding: 4,
  backgroundColor: "#FFF4DB",
  fontSize: "1.25rem",
  borderRadius: 4,
};

// markup
const NotFoundPage = () => {
  return (
    <main style={pageStyles}>
      <Helmet>
        <title>송영자 어머님 산수연</title>
        <meta property="og:title" content="송영자 어머님 산수연" />
        <meta property="og:description" content="소중한 분들을 초대합니다." />
        <meta
          property="og:image"
          content="https://tourmaline-meerkat-5f90a8.netlify.app/Thumb.png"
        />
        <meta
          property="og:url"
          content="https://tourmaline-meerkat-5f90a8.netlify.app"
        />
        <meta property="og:type" content="website" />
      </Helmet>
      <title>Not found</title>
      <h1 style={headingStyles}>Page not found</h1>
      <p style={paragraphStyles}>
        Sorry{" "}
        <span role="img" aria-label="Pensive emoji">
          😔
        </span>{" "}
        we couldn’t find what you were looking for.
        <br />
        {process.env.NODE_ENV === "development" ? (
          <>
            <br />
            Try creating a page in <code style={codeStyles}>src/pages/</code>.
            <br />
          </>
        ) : null}
        <br />
        <Link to="/">Go home</Link>.
      </p>
    </main>
  );
};

export default NotFoundPage;
