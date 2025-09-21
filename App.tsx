import React, { useState } from 'react';
import { Sidebar } from './components/Sidebar';
import { ContentDisplay } from './components/ContentDisplay';
import { BOOK_CONTENT } from './constants';

const App: React.FC = () => {
  const [selectedChapterId, setSelectedChapterId] = useState<number>(0);
  const [formData, setFormData] = useState<Record<string, any>>({});

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value, type } = e.target;
    // Check if the target is a checkbox input
    const isCheckbox = type === 'checkbox';
    // Cast the target to HTMLInputElement to access the 'checked' property
    const inputValue = isCheckbox ? (e.target as HTMLInputElement).checked : value;

    setFormData(prevData => ({
      ...prevData,
      [name]: inputValue,
    }));
  };

  const selectedChapter = BOOK_CONTENT.find(c => c.id === selectedChapterId) || BOOK_CONTENT[0];

  return (
    <div className="flex h-screen bg-slate-100 font-sans antialiased">
      <Sidebar
        chapters={BOOK_CONTENT}
        activeChapterId={selectedChapterId}
        onSelectChapter={setSelectedChapterId}
      />
      <main className="flex-1 overflow-y-auto">
        <ContentDisplay chapter={selectedChapter} formData={formData} handleInputChange={handleInputChange} />
      </main>
    </div>
  );
};

export default App;