import { Portal } from '../../entities/Portal';

export const Posts = () => {
  return (
    <div>
      <h2>Posts from typicode</h2>
      <Portal portalId="header-portal">
        <button>Posts button</button>
      </Portal>
    </div>
  )
};
