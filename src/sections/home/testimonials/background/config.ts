export const BACKGROUND = {
  color: "#889eb0", // Precisely sampled slate blue from reference

  typography: {
    // Desktop: w-[110vw] perfectly centers the SVG and mathematically crops 5% on both the left (T) and right (S).
    // Height is set to 85vh to achieve the tall, vertically stretched deformation seen in the reference.
    desktop: "absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[110vw] h-[85vh] flex justify-center items-center pointer-events-none",
    
    // Mobile: To crop the top and bottom by 5%, we set width to 110vh, and rotate the container so it becomes vertical.
    // Height is set to 80vw to stretch the text horizontally across the mobile screen.
    mobile: "absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[110vh] h-[80vw] -rotate-90 flex justify-center items-center pointer-events-none",
  },

  balloon: {
    // Desktop: Overlaps 'TES'
    desktop: "absolute top-[28%] left-[8%] w-[24%]",
    // Mobile: Overlaps 'TES' vertically
    mobile: "absolute top-[18%] left-[12%] w-[65%]",
  }
};
