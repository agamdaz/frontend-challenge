import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { items, clearItems, toggleItem } from './app/itemsSlice';
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

const headerTranslations = {
  inputPlaceholder: "Type to search",
  buttonLabel: "Clear all!",
}

function App() {
  const { available, selected } = useSelector(items)
  const dispatch = useDispatch();
  const clear = () => dispatch(clearItems());
  const toggle = (label:string) => dispatch(toggleItem(label));

  return (
    <div className={pageContainer}>
      <main className={mainLayout}>
        <Header {...headerTranslations} onClick={clear}/>
        <section className={itemsContainer}>
          <ItemsContainer items={available} onClick={toggle}/>
          <ItemsContainer items={selected} onClick={toggle}/>
        </section>
      </main>
    </div>
  );
}

export default App;
