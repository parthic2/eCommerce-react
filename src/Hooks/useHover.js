import { useState } from "react";

export const useHover = () => {
  const [isViewHovered, setViewHovered] = useState(false);
  const [isStarHovered, setStarHovered] = useState(false);
  const [isTopDownHovered, setTopDownHovered] = useState(false);

  const handleViewMouseEnter = () => {
    setViewHovered(true);
  };

  const handleViewMouseLeave = () => {
    setViewHovered(false);
  };

  const handleStarMouseEnter = () => {
    setStarHovered(true);
  };

  const handleStarMouseLeave = () => {
    setStarHovered(false);
  };

  const handleTopDownMouseEnter = () => {
    setTopDownHovered(true);
  };

  const handleTopDownMouseLeave = () => {
    setTopDownHovered(false);
  };

  return {
    isViewHovered,
    isStarHovered,
    isTopDownHovered,
    handleViewMouseEnter,
    handleViewMouseLeave,
    handleStarMouseEnter,
    handleStarMouseLeave,
    handleTopDownMouseEnter,
    handleTopDownMouseLeave
  }
}