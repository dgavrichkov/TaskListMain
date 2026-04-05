import { MementoYear } from './ui/MementoYear';
import './ui/memento-styles.css';

export const MementoMori = () => {
  const currentYear = new Date().getFullYear();

  return (
    <div>
      <MementoYear year={currentYear} />
    </div>
  );
};
