export const Footer = (): JSX.Element => {
  const today = new Date();

  return (
    <footer style={{ padding: 25, textAlign: "center" }}>
      &copy; {today.getFullYear()} apple-yagi. All rights reserved.
    </footer>
  );
};
