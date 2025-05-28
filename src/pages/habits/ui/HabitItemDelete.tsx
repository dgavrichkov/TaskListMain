import { habitStore } from '../model/store';
import { Button } from '@/shared/shadcn/ui/button';
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from '@/shared/shadcn/ui/alert-dialog';
import { IHabit } from '../model/types';

type Props = IHabit;

export const HabitItemDelete = (habit: Props) => {
  return (
    <AlertDialog>
      <AlertDialogTrigger asChild>
        <Button className="cursor-pointer" type="button" variant={'destructive'}>
          Удалить
        </Button>
      </AlertDialogTrigger>
      <AlertDialogContent style={{ color: 'var(--foreground)' }}>
        <AlertDialogHeader>
          <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel>Отмена</AlertDialogCancel>
          <AlertDialogAction onClick={() => habitStore.deleteHabit(habit.id)}>
            Continue
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
};
