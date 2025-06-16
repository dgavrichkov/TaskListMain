import {
  DefaultError,
  QueryClient,
  QueryKey,
  QueryObserver,
  QueryObserverOptions,
} from '@tanstack/react-query';
import { createAtom } from 'mobx';

export class MobxQuery<
  TQueryFnData = unknown,
  TError = DefaultError,
  TData = TQueryFnData,
  TQueryData = TQueryFnData,
  TQueryKey extends QueryKey = QueryKey,
> {
  private atom = createAtom(
    'MobxQuery',
    () => this.startTracking(),
    () => this.stopTracking(),
  );

  private queryObserver = new QueryObserver(this.queryClient, this.defaultedQueryOptions);

  constructor(
    private getOptions: () => QueryObserverOptions<
      TQueryFnData,
      TError,
      TData,
      TQueryData,
      TQueryKey
    >,
    private queryClient: QueryClient,
  ) {}

  result() {
    this.atom.reportObserved();

    return this.queryObserver.getOptimisticResult(this.defaultedQueryOptions);
  }

  private unsubscribe = () => {};

  private startTracking() {
    console.log('start tracking');
    this.unsubscribe = this.queryObserver.subscribe(() => {
      this.atom.reportChanged();
    });
  }

  private stopTracking() {
    this.unsubscribe();
  }

  private get defaultedQueryOptions() {
    return this.queryClient.defaultQueryOptions(this.getOptions());
  }
}
