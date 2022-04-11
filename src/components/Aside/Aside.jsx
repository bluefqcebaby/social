import MenuItem from "./MenuItem/MenuItem";

export default function Aside({ aside }) {
  const { menuItems } = aside;
  const menuItemsElements = menuItems.map(({ text, logo, route }) => (
    <MenuItem text={text} logo={logo} route={route} />
  ));
  return (
    <aside className='w-40 text-xl text-zinc-700'>
      <nav>{menuItemsElements}</nav>
    </aside>
  );
}
