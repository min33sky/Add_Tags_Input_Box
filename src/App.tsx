import TagInputBox from './components/TagInputBox';

export default function App() {
  return (
    <div className="grid h-screen place-items-center bg-gradient-to-br from-violet-900 to-violet-700">
      <TagInputBox maxTags={10} />
    </div>
  );
}
