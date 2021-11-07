import { Dialog } from './dialog';
// eslint-disable-next-line import/no-anonymous-default-export
export default {
  title: 'Components/Dialog',
};

export const Default = () => {
  return (
    <Dialog
      title="Dummy Dialog"
      buttons={[
        { label: 'agree', type: 'success' },
        { label: 'disagree', type: 'error' },
      ]}
    >
      Ad id ut sit adipisicing magna dolore. Duis commodo nostrud et labore ad
      mollit elit dolor irure culpa commodo nulla. Qui aliqua et ad cupidatat
      aliqua magna nostrud enim anim nulla aute dolore. Do non laboris
      adipisicing amet ad cillum ea reprehenderit eu amet deserunt.
    </Dialog>
  );
};
