import React from 'react';

type RowProps = {
  index: number;
  style: React.CSSProperties;
};

type Props = {
  /** высота контейнера */
  listHeight: number;
  /** высота строки */
  rowHeight: number;
  /** общее количество элементов в списке */
  rowCount: number;
  rowComponent: (props: RowProps) => React.ReactNode;
};

export const MyVirtualList = ({ listHeight, rowComponent, rowCount, rowHeight }: Props) => {
  const listRef = React.useRef(null);

  const showNumber = Math.ceil(listHeight / rowHeight) + 10;

  const startIndex = 0;
  const endIndex = showNumber;

  const currentSlice = Array.from({ length: endIndex - startIndex + 1 }, (_, i) => {
    const index = startIndex + i;

    return {
      index,
      offsetTop: index * rowHeight,
    };
  });

  const handleScroll = () => {
    // console.log('Scroll!');
    // calculate new start and end indexes, set them to state
  };

  // TODO сделать высоту точнее
  const fillerHeight = rowCount * rowHeight;

  React.useEffect(() => {}, []);

  return (
    <div
      className="my-virtual-list"
      style={{
        height: listHeight,
        overflowY: 'scroll',
        position: 'relative',
        border: '1px solid black',
      }}
      ref={listRef}
      onScroll={handleScroll}
    >
      {/* map array, render row */}
      {currentSlice.map((item) =>
        rowComponent({
          index: item.index,
          style: {
            position: 'absolute',
            transform: `translateY(${item.offsetTop}px)`,
            height: rowHeight,
            width: '100%',
          },
        }),
      )}
      {/* --- */}
      {/* <div className="my-virtual-list__filler" style={{ height: fillerHeight }}></div> */}
    </div>
  );
};
