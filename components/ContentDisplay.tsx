import React from 'react';
import type { Chapter, ContentProps } from '../types';

interface ContentDisplayProps {
  chapter: Chapter;
  formData: ContentProps['formData'];
  handleInputChange: ContentProps['handleInputChange'];
}

export const ContentDisplay: React.FC<ContentDisplayProps> = ({ chapter, formData, handleInputChange }) => {
  return (
    <div className="p-4 sm:p-6 md:p-8 h-full w-full">
      <div className="max-w-4xl mx-auto bg-white rounded-xl shadow-lg h-full overflow-y-auto">
        <div className="p-6 sm:p-8 md:p-12">
            <h1 className="text-3xl md:text-4xl font-bold text-gray-900 border-b-2 border-gray-200 pb-4 mb-8">
                {chapter.title}
            </h1>
            <div className="text-gray-700 leading-relaxed space-y-6">
                {chapter.content({ formData, handleInputChange })}
            </div>
        </div>
      </div>
    </div>
  );
};