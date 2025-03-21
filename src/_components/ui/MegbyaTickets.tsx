'use client';
import Container from '@/_components/Container';
import { CardProps } from '@/_types/card.interface';
import { useTranslations } from 'next-intl';
import Card from '../Cards/Card';
import Modal from '@/_ui/Modal/Modal';
import SignInForm from '../Form/SignIn.form';
import { useContext } from 'react';
import { ModalContext } from '@/lib/context/modal.context';
import { AppProvider } from '@/lib/context/userform.context';
import RegisterUserForm from '../Form/RegisterUser.form';

export default function MegbyaTickets() {
  const t = useTranslations();
  const content: CardProps[] = t.raw('megbyaTickets');
  const {
    modalState: { isOpen, authType },
  } = useContext(ModalContext);
  return (
    <Container>
      <p className="mb-3 text-black p-0 text-3xl text-center md:text-left">
        አዲስ ነገር ኤግዚቢሽን መግቢያ ትኬቶች
      </p>
      <article className="card_wrapper grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 justify-items-center">
        {content?.map((Content, key: number) => (
          <Card
            key={key}
            imageSrc={Content.imageSrc}
            imageAlt={Content.imageAlt}
            title={Content.title}
            price="."
            description={Content.description}
            descriptionTitle={Content.descriptionTitle}
            buttonText={Content.buttonText}
          />
        ))}
      </article>

      {isOpen && (
        <Modal>
          <AppProvider>
            {authType == 'signIn' ? <SignInForm isModal /> : <RegisterUserForm isModal />}
          </AppProvider>
        </Modal>
      )}
    </Container>
  );
}
