import React, { useEffect } from "react";
import { Text } from "react-native";
import Animated, {
  useSharedValue,
  useAnimatedProps,
  withTiming,
} from "react-native-reanimated";

const AnimatedText = Animated.createAnimatedComponent(Text);

const AnimatedNumber = ({
  value,
  duration = 800,
  style,
  suffix = "",
  prefix = "",
}) => {
  const animatedValue = useSharedValue(0);

  useEffect(() => {
    animatedValue.value = withTiming(value, { duration });
  }, [value]);

  const animatedProps = useAnimatedProps(() => ({
    text: `${prefix}${Math.round(animatedValue.value)}${suffix}`,
  }));

  return (
    <AnimatedText
      animatedProps={animatedProps}
      style={style}
    />
  );
};

export default AnimatedNumber;
