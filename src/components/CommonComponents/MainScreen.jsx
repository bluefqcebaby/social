export default function MainScreen({ children }) {
  return (
    <main className='pt-4 bg-[#f7f8fa] pb-52 min-h-screen'>
      <div className='container'>{children}</div>
    </main>
  );
}
