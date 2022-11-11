import { useState } from 'react';
import tagIcon from '../assets/tag.svg';
import closeIcon from '../assets/close.svg';

interface Props {
  maxTags: number;
}

export default function TagInputBox({ maxTags }: Props) {
  const [tags, setTags] = useState<string[]>([]);

  /**
   * 입력 받은 문자열을 태그 배열로 변환하는 함수
   * @param text
   * @returns 태그 배열을 리턴한다.
   */
  const inputToTags = (text: string) => {
    return text.replace(/\s+/g, ' ').replace(/,/g, '').trim().split(' ');
  };

  const handleAddTags = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === 'Enter') {
      const newTags = inputToTags(event.currentTarget.value);
      for (const tag of newTags) {
        if (tag.length > 1 && !tags.includes(tag)) {
          setTags((prev) => [...prev, tag]);
        }
      }
      event.currentTarget.value = '';
    }
  };

  const handleRemoveTag = (tag: string) => {
    setTags((prev) => prev.filter((t) => t !== tag));
  };

  const handleRemoveAllTags = () => {
    setTags([]);
  };

  return (
    <div className="w-11/12 max-w-md space-y-6 rounded-lg bg-slate-100 px-6 py-10 shadow-lg selection:bg-violet-500 selection:text-slate-100">
      <header className="flex space-x-2">
        <img src={tagIcon} className="w-6 " alt="tagIcon" />
        <h1 className="text-xl font-bold">Tags</h1>
      </header>

      <div className="flex flex-col space-y-4">
        <p className="flex flex-col gap-2 text-sm">
          <span className="mr-2 font-semibold text-violet-600">Tip!</span>
          콤마를 이용해 여러개의 태그를 추가할 수 있습니다.
        </p>
        <ul className="flex flex-wrap gap-2 rounded-md border-2 border-slate-300 p-2">
          {tags.map((tag, idx) => (
            <li
              key={idx}
              className="relative space-x-1 rounded-md bg-slate-200 py-1 pl-2 pr-5"
            >
              <span className="inline-block align-text-top text-sm">{tag}</span>
              <button
                onClick={() => handleRemoveTag(tag)}
                className="absolute right-1 top-1/2 -translate-y-1/2"
              >
                <img src={closeIcon} className="h-3 w-3" alt="close btn" />
              </button>
            </li>
          ))}

          <input
            disabled={tags.length >= maxTags}
            type="text"
            className="flex-1 px-2 py-1 outline-none disabled:bg-slate-200"
            onKeyUp={handleAddTags}
            placeholder="태그를 입력하세요"
          />
        </ul>
      </div>

      <footer className="flex flex-col items-center justify-between gap-4 sm:flex-row">
        <p>
          <span className="font-bold text-violet-600">
            {maxTags - tags.length}
          </span>
          개 태그를 추가할 수 있습니다.
        </p>
        <button
          onClick={handleRemoveAllTags}
          className="w-full rounded-md bg-violet-600 px-4 py-2 text-sm text-slate-100 transition hover:bg-violet-800 sm:w-fit"
        >
          모두 삭제
        </button>
      </footer>
    </div>
  );
}
