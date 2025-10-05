import { Dialog, DialogContent, DialogTitle, DialogTrigger } from '@/shared/ui/Dialog';
import { HabitCreateForm } from '../HabitCreateForm';
import { SquarePlusIcon } from 'lucide-react';
import { Button } from '@/shared/ui';

export const HabitCreation = () => {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button
          className="cursor-pointer ml-auto"
          size="icon"
          title="Создать привычку"
          variant="outline"
        >
          <SquarePlusIcon />
        </Button>
      </DialogTrigger>
      <DialogContent>
        <div className="grid gap-4">
          <DialogTitle>Создание привычки</DialogTitle>
          <HabitCreateForm />
        </div>
      </DialogContent>
    </Dialog>
  );
};
