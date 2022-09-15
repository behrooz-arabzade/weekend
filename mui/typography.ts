// Add new typography variant here
const typography = (theme: any) => ({
  t12: {
    [theme.breakpoints.between("sm", "md")]: {
      fontWeight: 12,
      fontSize: 12,
      lineHeight: "16.5px",
    },
    [theme.breakpoints.between("md", "lg")]: {
      fontWeight: 14,
      fontSize: 14,
      lineHeight: "19.5px",
    },
    [theme.breakpoints.up("lg")]: {
      fontWeight: 16,
      fontSize: 16,
      lineHeight: "21px",
    },
  },
});

export default typography;
