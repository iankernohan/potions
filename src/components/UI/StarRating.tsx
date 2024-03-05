import { ReactNode } from "react";
import { IoStarOutline, IoStarSharp } from "react-icons/io5";

interface Props {
  rating: number;
  number?: number;
  gap?: number;
}

export default function StarRating({ rating, number = 5, gap = 0 }: Props) {
  const starRating: ReactNode[] = [];

  for (let i = 1; i <= number; i++) {
    if (i <= rating) {
      starRating.push(
        <IoStarSharp
          style={{ color: "orange", fontSize: "1.25rem", margin: `0 ${gap}` }}
        />
      );
    } else {
      starRating.push(
        <IoStarOutline
          style={{ color: "orange", fontSize: "1.25rem", margin: `0 ${gap}px` }}
        />
      );
    }
  }

  return (
    <div>
      {starRating.map((star, i) => (
        <span key={i}>{star}</span>
      ))}
    </div>
  );
}
