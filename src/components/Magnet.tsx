
import {
  useEffect,
  useRef,
  useState,
} from "react";

interface Props {
  children: React.ReactNode;
  padding?: number;
  strength?: number;
}

export default function Magnet({
  children,
  padding = 150,
  strength = 3,
}: Props) {
  const ref =
    useRef<HTMLDivElement>(null);

  const [transform, setTransform] =
    useState(
      "translate3d(0px,0px,0px)"
    );

  const [active, setActive] =
    useState(false);

  useEffect(() => {
    const element = ref.current;

    if (!element) return;

    const handleMove = (
      e: MouseEvent
    ) => {
      const rect =
        element.getBoundingClientRect();

      const x =
        e.clientX -
        (rect.left +
          rect.width / 2);

      const y =
        e.clientY -
        (rect.top +
          rect.height / 2);

      const insideX =
        e.clientX >
          rect.left - padding &&
        e.clientX <
          rect.right + padding;

      const insideY =
        e.clientY >
          rect.top - padding &&
        e.clientY <
          rect.bottom + padding;

      const isActive =
        insideX && insideY;

      setActive(isActive);

      if (!isActive) {
        setTransform(
          "translate3d(0px,0px,0px)"
        );
        return;
      }

      setTransform(
        `translate3d(
          ${x / strength}px,
          ${y / strength}px,
          0px
        )`
      );
    };

    window.addEventListener(
      "mousemove",
      handleMove
    );

    return () => {
      window.removeEventListener(
        "mousemove",
        handleMove
      );
    };
  }, [padding, strength]);

  return (
    <div
      ref={ref}
      style={{
        transform,
        transition: active
          ? "transform .3s ease-out"
          : "transform .6s ease-in-out",
        willChange:
          "transform",
      }}
    >
      {children}
    </div>
  );
}

