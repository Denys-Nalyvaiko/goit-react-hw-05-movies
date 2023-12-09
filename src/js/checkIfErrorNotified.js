import { Notify } from 'notiflix';

const checkIfErrorNotified = (isErrorNotified, errorMessage) => {
  if (isErrorNotified) {
    return false;
  }

  Notify.failure(errorMessage);
  return true;
};

export default checkIfErrorNotified;
