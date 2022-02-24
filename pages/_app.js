// _app.js를 가장 먼저 보고, index.js를 렌더링한다.
// 여기서 전역 설정을 해준다. 공통으로 들어가는 컴포넌트나 스타일 지정
// _app.js 커스텀 App 컴포넌트가 있는 이곳에서만 styles폴더의 global.css파일을 import할 수 있다.

import "../styles/globals.css";
import Layout from "../components/Layout";
// _app.js는 코드가 간결하게 있는 게 좋기 때문에 Layout으로 props를 전달해 일을 분담한다.

export default function App({ Component, pageProps }) {
  // prop을 하나 불러온다.
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}
