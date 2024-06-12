export const logPageView = (path) => {
  if (window.gtag) {
    window.gtag("config", "G-HN9RY72NPF", {
      page_path: path,
    });
  }
};
