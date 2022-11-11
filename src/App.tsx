import tagIcon from './assets/tag.svg';

export default function App() {
  return (
    <div className="grid place-items-center h-screen bg-gradient-to-br from-violet-900 to-violet-700">
      <div className="bg-slate-100 px-6 py-10 w-11/12 max-w-md space-y-6 rounded-lg shadow-lg">
        <header className="flex space-x-2">
          <img src={tagIcon} className="w-6 " alt="tagIcon" />
          <h1 className="font-bold text-xl">Tags</h1>
        </header>

        <div className="flex flex-col space-y-4">
          <p className="flex flex-col gap-2 text-sm">
            <span className="text-violet-600 font-semibold mr-2">Tip!</span>
            콤마를 이용해 여러개의 태그를 추가할 수 있습니다.
          </p>
          <ul className="flex flex-wrap border-2 rounded-md border-slate-300 p-2">
            <input type="text" className="flex-1 outline-none px-2 py-1" />
          </ul>
        </div>

        <footer className="flex flex-col gap-4 items-center justify-between sm:flex-row">
          <p>
            <span className="font-bold text-violet-600">10</span>개 태그를
            추가할 수 있습니다.
          </p>
          <button className="w-full sm:w-fit bg-violet-600 px-4 py-2 text-slate-100 rounded-md hover:bg-violet-800 transition">
            모두 삭제
          </button>
        </footer>
      </div>
    </div>
  );
}
