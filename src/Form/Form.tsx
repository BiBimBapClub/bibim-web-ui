import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { createBoard } from '../../services/api';
import { validateBoardForm } from '../../utils/validationUtils';
import { BoardFormData } from '../../services/types';
import { FormWrapper, FormTitle, FormInput, FormTextarea, FormSubmitButton } from './Form.styles';

const Form = function () {
  const history = useHistory();

  const [formData, setFormData] = useState<BoardFormData>({
    title: '',
    content: '',
    file: null,
  });

  const [error, setError] = useState<string>('');

  const handleFormChange = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = event.target;
    setFormData((prevState) => ({ ...prevState, [name]: value }));
  };

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const fileList = event.target.files;
    if (fileList && fileList.length > 0) {
      setFormData((prevState) => ({ ...prevState, file: fileList[0] }));
    }
  };

  const handleFormSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const { title, content, file } = formData;

    const validationError = validateBoardForm(title, content);
    if (validationError) {
      setError(validationError);
      return;
    }

    try {
      const boardData = new FormData();
      boardData.append('title', title);
      boardData.append('content', content);
      if (file) {
        boardData.append('file', file);
      }
      await createBoard(boardData);
      history.push('/');
    } catch (error) {
      setError('게시글 작성에 실패했습니다. 다시 시도해주세요.');
    }
  };

  return (
    <FormWrapper onSubmit={handleFormSubmit}>
      <FormTitle>게시글 작성하기</FormTitle>
      <FormInput
        type="text"
        name="title"
        placeholder="제목을 입력하세요"
        value={formData.title}
        onChange={handleFormChange}
        required
      />
      <FormTextarea
        name="content"
        placeholder="내용을 입력하세요"
        value={formData.content}
        onChange={handleFormChange}
        required
      />
      <FormInput type="file" name="file" onChange={handleFileChange} />
      {error && <p>{error}</p>}
      <FormSubmitButton type="submit">작성 완료</FormSubmitButton>
    </FormWrapper>
  );
};

export default Form;