import Image from 'next/image';

const LoadingScreen = () => {
  return (
    <div className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-[#E8EAED]">
      <Image
        src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/13457591-dfc4-41dc-91fd-9d07a9f98199-aromaamorperfumes-com/assets/icons/logo_2082_1711618876-2.png"
        alt="Aroma Amor Perfumes Logo"
        width={130}
        height={130}
        priority
      />
      <div
        className="mt-[112px] h-10 w-10 animate-spin rounded-full border-4 border-solid border-[#CBD5E0] border-t-[#4A5568]"
        role="status"
        aria-label="Loading"
      >
        <span className="sr-only">Loading...</span>
      </div>
    </div>
  );
};

export default LoadingScreen;