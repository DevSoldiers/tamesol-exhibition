import { useSession } from 'next-auth/react';
import { useContext } from 'react';
import { ModalContext } from '@/lib/context/modal.context';
import { useRouter } from 'next/navigation';

export default function ButtonLink({ buttonText, title }: { buttonText: string; title: string }) {
  const session = useSession();
  const router = useRouter();
  const hasUser = session?.data?.user;
  const {
    modalState: { setIsOpen, isOpen },
  } = useContext(ModalContext);

  return (
    <>
      <button
        className="w-full bg-orange-500 hover:bg-orange-600 text-white font-bold py-2 md:py-3 px-6 rounded-lg transition-colors duration-300 transform hover:scale-105 shadow-md hover:shadow-orange-200 flex items-center justify-center gap-2"
        onClick={() =>
          !hasUser ? setIsOpen(!isOpen) : router.push(`en/web-ticket?ticket=${title}`)
        }
      >
        <span>{buttonText}</span>
      </button>
    </>
  );
}
