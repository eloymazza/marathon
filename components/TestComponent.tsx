'use client';

import itemsSlice, { selectItemState } from '../store/itemsSlice';
import { useSelector, useDispatch } from 'react-redux';
import { AppState } from '../store/store';

export default function TestComp() {
  const { items } = useSelector((state: AppState) => state.items);
  const [firstEl] = items;
  return (
    <div>
      <p>{firstEl}</p>
    </div>
  );
}
