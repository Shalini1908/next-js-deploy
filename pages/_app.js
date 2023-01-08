
import TodoApp from "./components/TodoApp";

export default function App({ Component, pageProps }) {
  return (
  <>
      <TodoApp/>
  <Component {...pageProps} />
  </>
  )


}
