import Seo from "../components/Seo";
import Link from "next/link";
import { useRouter } from "next/router";

export default function Home({ results }) {
  const router = useRouter();
  const onClick = (id, title) => {
    router.push(`/movies/${title}/${id}`); //브라우저 상에서는 마스킹 된다. 콘솔상에서는 확인 가능
  };
  return (
    <div className="container">
      <Seo title="Home" />
      {results?.map((movie) => (
        <div
          onClick={() => onClick(movie.id, movie.original_title)}
          className="movie"
          key={movie.id}
        >
          <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} />
          <h4>
            <Link href={`/movies/${movie.original_title}/${movie.id}`}>
              <a>{movie.original_title}</a>
            </Link>
          </h4>
        </div>
      ))}
      <style jsx>{`
        .container {
          display: grid;
          grid-template-columns: 1fr 1fr;
          padding: 20px;
          gap: 20px;
        }
        .movie {
          cursor: pointer;
        }
        .movie img {
          max-width: 100%;
          border-radius: 12px;
          transition: transform 0.2s ease-in-out;
          box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 12px;
        }
        .movie:hover img {
          transform: scale(1.05) translateY(-10px);
        }
        .movie h4 {
          font-size: 18px;
          text-align: center;
        }
      `}</style>
    </div>
  );
}

// 아래 코드는 백엔드에서 실행되어 클라이언트에서 보이지 않음.
// getServerSideProps는 html 자체에 데이터가 포함되게 된다.
export async function getServerSideProps() {
  // fetch
  const { results } = await (
    await fetch(`http://localhost:3000/api/movies`)
  ).json();
  // props 처리
  return {
    props: {
      results,
    },
  };
}
