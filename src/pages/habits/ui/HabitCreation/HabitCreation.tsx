import { Dialog, DialogContent, DialogTrigger } from '@/shared/shadcn/ui/dialog';
import { HabitCreateForm } from '../HabitCreateForm';
import { Button } from '@/shared/shadcn/ui/button';
import { SquarePlusIcon } from 'lucide-react';

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
          <h2 className="text-lg font-semibold">Создание привычки</h2>
          <HabitCreateForm />
        </div>
      </DialogContent>
    </Dialog>
  );
};
