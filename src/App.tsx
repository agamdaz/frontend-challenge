import React, {useState} from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { items, clearItems, toggleItem } from './app/itemsSlice';
import { getAvailable, getSelected } from "./app/itemsAdapter";
import { Header } from './components/Header';
import { ItemsContainer } from './components/ItemsContainer';
import { cssRaw, cssRule, style, media } from 'typestyle';
import { normalize, setupPage } from 'csstips';

cssRaw(`
  @import url('https://fonts.googleapis.com/css?family=Courier+Prime');
`);

normalize();
setupPage('#root');

cssRule('body', {
  backgroundImage: 'url("background.svg")',
});

const pageContainer = style({
  margin: 'auto',
  maxWidth: '580px',
  padding: '8px',
}, media({ minWidth: 420 }, { marginTop: '10vh' }))

const mainLayout = style({
  border: '2px solid #000',
  background: '#fff',
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
