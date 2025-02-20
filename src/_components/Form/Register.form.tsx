'use client';

import { AppProvider } from '@/lib/context/userform.context';
import RegisterUserForm from './RegisterUser.form';

const MainRegisterForm = ({ isModal }: { isModal: boolean }) => {
  return (
    <AppProvider>
      <RegisterUserForm isModal={isModal} />
    </AppProvider>
  );
};

export default MainRegisterForm;
