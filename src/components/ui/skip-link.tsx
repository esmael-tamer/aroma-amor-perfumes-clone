const SkipLink = () => {
  return (
    <a
      href="#main-content"
      className="fixed right-4 top-4 z-[100] -translate-y-[150%] focus:translate-y-0 transition-transform bg-primary text-primary-foreground px-4 py-2 rounded-md shadow-lg font-bold outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
    >
      تخطي إلى المحتوى الرئيسي
    </a>
  );
};

export default SkipLink;
