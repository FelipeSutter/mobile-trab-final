import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#000",
    justifyContent: "center",
    alignItems: "center",
  },
  middle: {
    position: "absolute",
    top: "50%",
    left: "50%",
    flexDirection: "row",
  },
  bar: {
    width: 10,
    height: 70,
    backgroundColor: "#fff",
    borderTopRightRadius: 20,
    borderTopLeftRadius: 20,
    animationDuration: 1200,
    animationTimingFunction: "linear",
    animationIterationCount: "infinite",
  },
  bar1: {
    transform: [{ translateY: -35 }, { translateX: -5 }],
    animationDelay: 100,
  },
  bar2: {
    transform: [{ translateY: -35 }, { translateX: -5 }],
    animationDelay: 200,
  },
  bar3: {
    transform: [{ translateY: -35 }, { translateX: -5 }],
    animationDelay: 300,
  },
  bar4: {
    transform: [{ translateY: -35 }, { translateX: -5 }],
    animationDelay: 400,
  },
  bar5: {
    transform: [{ translateY: -35 }, { translateX: -5 }],
    animationDelay: 500,
  },
  bar6: {
    transform: [{ translateY: -35 }, { translateX: -5 }],
    animationDelay: 600,
  },
  bar7: {
    transform: [{ translateY: -35 }, { translateX: -5 }],
    animationDelay: 700,
  },
  bar8: {
    transform: [{ translateY: -35 }, { translateX: -5 }],
    animationDelay: 800,
  },
  "@keyframes loader": {
    "0%": {
      transform: [{ scaleY: 0.1 }],
      backgroundColor: "transparent",
    },
    "50%": {
      transform: [{ scaleY: 1 }],
      backgroundColor: "rgba(94, 10, 255, 1)",
    },
    "100%": {
      transform: [{ scaleY: 0.1 }],
      backgroundColor: "transparent",
    },
  },
});

export default styles;
