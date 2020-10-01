import React, {useState} from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { items, clearItems, toggleItem } from './app/itemsSlice';
import { getAvailable, getSelected } from "./app/itemsAdapter";
import { Header } from './components/Header';
import { ItemsContainer } from './components/ItemsContainer';
import { style, media } from 'typestyle';
import { layoutCssSetup, commonCss } from './components/_commonCss';

layoutCssSetup();

const pageContainer = style({
  margin: 'auto',
  maxWidth: '580px',
  padding: commonCss.baseSpacing,
}, media({ minWidth: 420 }, { marginTop: '10vh' }))

const mainLayout = style({
  border: commonCss.defaultBorder,
  background: commonCss.backgroundColor,
})

const itemsContainer = style({
  display: 'flex',
})

function App() {
  const [filterCharacters, setFilterCharacters] = useState('');

  const storeItems = useSelector(items);
  const available = getAvailable(storeItems, filterCharacters);
  const selected = getSelected(storeItems);

  const dispatch = useDispatch();
  const toggle = (label:string) => dispatch(toggleItem(label));

  const headerProps = {
    inputPlaceholder: "Type to search",
    buttonLabel: "Clear all!",
    clearButtonActive: selected.length === 0,
    clearButtonClick: () => dispatch(clearItems()),
    filterType: (e:any) => setFilterCharacters(e.target.value),
  }

  return (
    <div className={pageContainer}>
      <main className={mainLayout}>
        <Header {...headerProps}/>
        <section className={itemsContainer}>
          <ItemsContainer items={available} onClick={toggle}/>
          <ItemsContainer items={selected} onClick={toggle}/>
        </section>
      </main>
    </div>
  );
}

export default App;
