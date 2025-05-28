import { Parallax } from "react-scroll-parallax"

const ParallaxBackground = ({ darkMode }) => {
  return (
    <>
      {/* Fixed position background elements with parallax effect */}
      <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none">
        {/* Top-left corner element */}
        <Parallax
          translateY={["-100px", "100px"]}
          translateX={["-100px", "100px"]}
          className="absolute -top-20 -left-20"
        >
          <div className={`w-64 h-64 rounded-full ${darkMode ? "bg-blue-900/5" : "bg-blue-200/20"}`}></div>
        </Parallax>

        {/* Bottom-right corner element */}
        <Parallax
          translateY={["100px", "-100px"]}
          translateX={["100px", "-100px"]}
          className="absolute -bottom-32 -right-32"
        >
          <div className={`w-96 h-96 rounded-full ${darkMode ? "bg-blue-900/5" : "bg-blue-200/20"}`}></div>
        </Parallax>

        {/* Center element */}
        <Parallax
          translateY={["-50px", "50px"]}
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
        >
          <div className={`w-80 h-80 rounded-full ${darkMode ? "bg-blue-900/5" : "bg-blue-200/20"}`}></div>
        </Parallax>

        {/* Additional floating elements */}
        {[...Array(3)].map((_, i) => (
          <Parallax
            key={`bg-element-${i}`}
            translateY={[`${(i + 1) * 50}px`, `${(i + 1) * -50}px`]}
            translateX={[`${(i + 1) * -30}px`, `${(i + 1) * 30}px`]}
            className="absolute"
            style={{
              top: `${20 + i * 30}%`,
              left: `${15 + i * 25}%`,
            }}
          >
            <div
              className={`rounded-full ${darkMode ? "bg-blue-900/5" : "bg-blue-200/20"}`}
              style={{
                width: `${100 + i * 50}px`,
                height: `${100 + i * 50}px`,
              }}
            ></div>
          </Parallax>
        ))}
      </div>
    </>
  )
}

export default ParallaxBackground
