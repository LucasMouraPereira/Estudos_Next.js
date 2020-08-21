import ThemeConstainer from "../contexts/theme/ThemeContainer"

function MyApp({ Component, pageProps }) {
  return (
    <ThemeConstainer>
      <Component {...pageProps} />
    </ThemeConstainer>
  )
}

export default MyApp
