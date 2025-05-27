import { PhrasalVerbAdminForm } from './VerbAdminPhrasalForm';
import { VerbAdminWordForm } from './VerbAdminWordForm';

export const VerbAdmin = () => {
  return (
    <div>
      <h2>Add Word</h2>
      <VerbAdminWordForm />
      <h2>Add Phrasal</h2>
      <PhrasalVerbAdminForm />
    </div>
  );
};
