// gatsby-ssr.js 파일
const React = require("react");

exports.onRenderBody = ({ setHeadComponents }) => {
  setHeadComponents([
    <meta key="og:title" property="og:title" content="송영자 어머님 산수연" />,
    <meta
      key="og:desc"
      property="og:description"
      content="소중한 분들을 초대합니다."
    />,
    <meta
      key="og:image"
      property="og:image"
      content="https://tourmaline-meerkat-5f90a8.netlify.app/Thumb.png"
    />,
    <meta key="og:type" property="og:type" content="website" />,
  ]);
};
