import MenuItem from "./MenuItem/MenuItem";

export default function Aside({ menuItems }) {
  const menuItemsElements = menuItems.map(({ id, text, logo, route}) => (
    <MenuItem key={id} text={text} logo={logo} route={route} />
  ));
  return (
    <aside className='w-40 text-xl text-zinc-700'>
      <nav>{menuItemsElements}</nav>
    </aside>
  );
}
